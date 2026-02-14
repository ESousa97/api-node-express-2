<div align="center">

# API Node.js com Express e MongoDB

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/api-node-express-2/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/api-node-express-2/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/ESousa97/api-node-express-2/codeql.yml?style=flat&logo=github-actions&logoColor=white&label=CodeQL)](https://github.com/ESousa97/api-node-express-2/security/code-scanning)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/api-node-express-2?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/ESousa97/api-node-express-2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**API RESTful para gerenciamento de livraria com Node.js, Express e MongoDB — arquitetura em camadas, tratamento de erros hierárquico e paginação genérica.**

[Documentação](docs/API.md)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
  - [Uso Local](#uso-local)
- [Endpoints](#endpoints)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [FAQ](#faq)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é uma API REST para gerenciamento de livraria que vai além do CRUD básico, incorporando princípios modernos de design de software. Desenvolvida com Node.js, Express e MongoDB, emprega arquitetura em camadas, middlewares reutilizáveis e funcionalidades como tratamento de erros hierárquico, paginação genérica e busca parametrizada.

O repositório prioriza:

- **Arquitetura em camadas** — Separação rigorosa de responsabilidades
- **Tratamento de erros hierárquico** — Sistema customizado de erros com herança de classes
- **Paginação e ordenação reutilizáveis** — Middleware genérico para performance
- **Busca parametrizada** — Filtros combinados e flexíveis (editora, título, páginas, autor)
- **ES Modules nativo** — Sintaxe moderna import/export
- **Validação rigorosa** — Schemas Mongoose com validações customizadas

### Por que Express + MongoDB?

Express oferece flexibilidade e extensibilidade como framework minimalista, enquanto MongoDB com Mongoose fornece modelagem robusta, validações avançadas e relacionamentos via `populate`. A combinação resulta em um boilerplate pedagógico e preparado para produção.

---

## Funcionalidades

- **CRUD completo de Autores** — Criação, leitura, atualização e remoção com validação rigorosa
- **CRUD completo de Livros** — Gestão com relacionamentos e população automática de autores
- **Busca avançada** — Por editora, título (case-insensitive), intervalo de páginas e nome do autor
- **Paginação inteligente** — Middleware reutilizável com ordenação flexível
- **Tratamento de erros hierárquico** — Classes `ErroBase`, `ErroValidacao`, `NaoEncontrado`, `RequisicaoIncorreta`
- **Segurança** — Rate limiting e sanitização de inputs
- **Testes automatizados** — Cobertura com Jest e Supertest

---

## Tecnologias

### Core

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logoColor=white)

### Ferramentas de Desenvolvimento

![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Node.js 18+ (recomendado)
- npm 9+
- MongoDB 6+

---

## Arquitetura do Sistema

O projeto adota arquitetura em camadas, promovendo clareza e manutenção:

```
Client
  → Express
    → Routes (definem endpoints e delegam requisições)
      → Controllers (lógica de negócio e orquestração)
        → Middlewares (paginação, ordenação, validação)
          → Models / Mongoose (interação com MongoDB)
            → MongoDB

  → Middleware de Erros (tratamento centralizado em qualquer camada)
```

### Sistema de Tratamento de Erros

```
ErroBase (500)
├── ErroValidacao (400)
├── NaoEncontrado (404)
└── RequisicaoIncorreta (400)
```

Cada erro customizado herda de `ErroBase`, permitindo tratamento granular e padronizado no middleware central de erros.

### Fluxo de Processamento

| Etapa | Componente        | Responsabilidade                             |
| ----- | ----------------- | -------------------------------------------- |
| 1     | **Routes**        | Definem endpoints e delegam requisições      |
| 2     | **Controllers**   | Centralizam lógica de negócio e orquestração |
| 3     | **Middlewares**   | Processam paginação, ordenação e validação   |
| 4     | **Models**        | Interagem com MongoDB via Mongoose           |
| 5     | **Error Handler** | Tratamento centralizado e padronizado        |

---

## Estrutura do Projeto

```
api-node-express-2/
├── server.js                       # Ponto de entrada da aplicação
├── src/
│   ├── app.js                      # Configuração principal do Express
│   ├── config/
│   │   └── dbConnect.js            # Conexão com MongoDB
│   ├── controllers/
│   │   ├── autoresController.js    # Lógica de negócio — Autores
│   │   └── livrosController.js     # Lógica de negócio — Livros
│   ├── erros/
│   │   ├── ErroBase.js             # Classe base para erros
│   │   ├── ErroValidacao.js        # Erros de validação (400)
│   │   ├── NaoEncontrado.js        # Erro 404
│   │   └── RequisicaoIncorreta.js  # Erro 400
│   ├── middlewares/
│   │   ├── rateLimiter.js          # Rate limiting
│   │   ├── sanitizador.js          # Sanitização de inputs
│   │   ├── manipulador404.js       # Tratamento de rotas não encontradas
│   │   ├── manipuladorDeErros.js   # Middleware central de erros
│   │   └── paginar.js              # Middleware de paginação
│   ├── models/
│   │   ├── Autor.js                # Schema do Autor
│   │   ├── Livro.js                # Schema do Livro
│   │   ├── index.js                # Exportações dos modelos
│   │   └── validadorGlobal.js      # Validações customizadas
│   └── routes/
│       ├── autoresRoutes.js        # Rotas dos autores
│       ├── index.js                # Agregador de rotas
│       └── livrosRoutes.js         # Rotas dos livros
├── tests/
│   └── api.test.js                 # Testes automatizados (Jest + Supertest)
├── docs/                           # Documentação adicional
├── .env.example                    # Exemplo de variáveis de ambiente
├── eslint.config.js                # Regras do ESLint
├── .prettierrc.json                # Regras do Prettier
├── package.json                    # Dependências e scripts
└── LICENSE                         # Licença MIT
```

---

## Começando

### Pré-requisitos

```bash
node --version    # v18 ou superior
npm --version     # v9 ou superior
mongod --version  # v6 ou superior
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/api-node-express-2.git
cd api-node-express-2
```

2. **Instale as dependências**

```bash
npm install
```

### Configuração

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Preencha as variáveis necessárias:

```env
PORT=3000
NODE_ENV=development
STRING_CONEXAO_DB=mongodb://localhost:27017/livraria
```

> **Nota:** Para MongoDB Atlas, use a string de conexão fornecida: `mongodb+srv://<USER>:<PASSWORD>@<CLUSTER>.mongodb.net/livraria`

**Opção com Docker (MongoDB local):**

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Uso Local

**Subir o servidor:**

```bash
npm run dev
```

**Teste rápido:**

```bash
curl http://localhost:3000/livros
curl http://localhost:3000/autores
curl "http://localhost:3000/livros/busca?editora=Casa+do+código&minPaginas=150"
```

Acesse: `http://localhost:3000/`

---

## Endpoints

### Autores

| Método   | Rota           | Descrição                   | Parâmetros                      |
| -------- | -------------- | --------------------------- | ------------------------------- |
| `GET`    | `/autores`     | Lista autores com paginação | `pagina`, `limite`, `ordenacao` |
| `GET`    | `/autores/:id` | Busca autor específico      | `id` (ObjectId)                 |
| `POST`   | `/autores`     | Cria novo autor             | Body: `nome`, `nacionalidade`   |
| `PUT`    | `/autores/:id` | Atualiza autor              | `id` + campos a atualizar       |
| `DELETE` | `/autores/:id` | Remove autor                | `id` (ObjectId)                 |

### Livros

| Método   | Rota            | Descrição                  | Parâmetros                                                   |
| -------- | --------------- | -------------------------- | ------------------------------------------------------------ |
| `GET`    | `/livros`       | Lista livros com paginação | `pagina`, `limite`, `ordenacao`                              |
| `GET`    | `/livros/busca` | Busca avançada             | `editora`, `titulo`, `minPaginas`, `maxPaginas`, `nomeAutor` |
| `GET`    | `/livros/:id`   | Detalha livro com autor    | `id` (ObjectId)                                              |
| `POST`   | `/livros`       | Cria novo livro            | Body: `titulo`, `autor`, `editora`, `numeroPaginas`          |
| `PUT`    | `/livros/:id`   | Atualiza livro             | `id` + campos a atualizar                                    |
| `DELETE` | `/livros/:id`   | Remove livro               | `id` (ObjectId)                                              |

### Paginação

Todos os endpoints de listagem suportam paginação:

```bash
GET /livros?pagina=2&limite=10&ordenacao=titulo:1
```

Resposta:

```json
{
  "resultado": [],
  "info": {
    "totalRegistros": 50,
    "paginaAtual": 2,
    "totalPaginas": 5,
    "registrosPorPagina": 10
  }
}
```

### Códigos de Resposta

| Código | Descrição              | Exemplo de Uso               |
| ------ | ---------------------- | ---------------------------- |
| `200`  | Sucesso                | GET, PUT bem-sucedidos       |
| `201`  | Recurso criado         | POST bem-sucedido            |
| `400`  | Dados inválidos        | Campos obrigatórios ausentes |
| `404`  | Recurso não encontrado | ID inexistente               |
| `500`  | Erro interno           | Falha de conexão com o banco |

> Documentação completa dos endpoints em [`docs/API.md`](docs/API.md).

---

## Scripts Disponíveis

```bash
# Iniciar servidor
npm start

# Modo desenvolvimento (com hot reload)
npm run dev

# Executar lint
npm run lint

# Corrigir lint automaticamente
npm run lint:fix

# Verificar formatação
npm run format:check

# Aplicar formatação
npm run format:write

# Rodar testes
npm test

# Testes com cobertura
npm run test:coverage
```

---

## Deploy

### Docker (Recomendado)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001
USER nodeuser
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t api-livraria .
docker run -p 3000:3000 --env-file .env api-livraria
```

### Heroku

```bash
heroku create minha-api-livraria
heroku config:set STRING_CONEXAO_DB=mongodb+srv://...
heroku config:set NODE_ENV=production
git push heroku main
```

### Outras opções

O projeto é compatível com Vercel (serverless), AWS, DigitalOcean e qualquer plataforma que suporte Node.js.

---

## FAQ

<details>
<summary><strong>Como configurar a conexão com o banco?</strong></summary>

Defina `STRING_CONEXAO_DB` no `.env` com a URL do MongoDB (local ou Atlas). Certifique-se de que o MongoDB está rodando antes de iniciar a aplicação.

</details>

<details>
<summary><strong>A busca por título é case-sensitive?</strong></summary>

Não. A busca utiliza regex case-insensitive do MongoDB, permitindo buscas parciais. Exemplo: `?titulo=javascript` encontra "JavaScript: O Guia Definitivo".

</details>

<details>
<summary><strong>Como funciona a paginação?</strong></summary>

Use os parâmetros `pagina` (padrão: 1), `limite` (padrão: 5, máx: 50) e `ordenacao` (formato `campo:1` para ASC ou `campo:-1` para DESC). A resposta inclui metadados com total de registros e páginas.

</details>

<details>
<summary><strong>O projeto está pronto para produção?</strong></summary>

A base está sólida com tratamento de erros, validação e arquitetura escalável. Para produção, recomenda-se adicionar autenticação/autorização (JWT), logs estruturados (Winston) e monitoramento (APM).

</details>

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#api-nodejs-com-express-e-mongodb)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
