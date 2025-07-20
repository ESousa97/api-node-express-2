# 🚀 Projeto API Node.js com Express e MongoDB

<div align="center">
  
  **Uma arquitetura robusta para gerenciamento de dados, focada em escalabilidade, manutenibilidade e tratamento de erros avançado**
  
  [![Linguagem Principal](https://img.shields.io/github/languages/top/ESousa97/api-node-express-2?style=for-the-badge&color=blue)](https://github.com/ESousa97/api-node-express-2)
  [![Tamanho do Repositório](https://img.shields.io/github/repo-size/ESousa97/api-node-express-2?style=for-the-badge&color=green)](https://github.com/ESousa97/api-node-express-2)
  [![Último Commit](https://img.shields.io/github/last-commit/ESousa97/api-node-express-2?style=for-the-badge&color=yellow)](https://github.com/ESousa97/api-node-express-2)
  [![Contribuidores](https://img.shields.io/github/contributors/ESousa97/api-node-express-2?style=for-the-badge&color=pink)](https://github.com/ESousa97/api-node-express-2)

</div>

---

## 🎯 **Abstract (Resumo Técnico)**

> Esta API RESTful para gerenciamento de livraria transcende o CRUD básico, incorporando **princípios modernos de design de software** — separação clara de responsabilidades, escalabilidade e tratamento de erros customizado. Construída com **Node.js, Express e MongoDB**, emprega arquitetura em camadas, middlewares reutilizáveis e funcionalidades avançadas como tratamento de erros hierárquico, paginação genérica e busca parametrizada. O resultado é um **boilerplate altamente pedagógico**, preparado para produção e que serve como referência para APIs resilientes no ecossistema Node.js.

### 🌟 **Diferenciais da Implementação**

- 🏗️ **Arquitetura em Camadas Avançada** - Separação rigorosa de responsabilidades
- 🛡️ **Tratamento de Erros Hierárquico** - Sistema customizado de erros com herança
- 📊 **Paginação e Ordenação Inteligente** - Middleware reutilizável para performance
- 🔍 **Busca Parametrizada Avançada** - Filtros combinados e flexíveis
- ⚡ **ES Modules Nativo** - Sintaxe moderna import/export
- 🧪 **Validação Rigorosa** - Schemas Mongoose com validações customizadas

---

## 📋 **Índice**

<details>
<summary>🗂️ Clique para expandir o sumário completo</summary>

- [🎯 Abstract](#-abstract-resumo-técnico)
- [💡 Introdução e Motivação](#-introdução-e-motivação)
- [🏗️ Arquitetura do Sistema](#️-arquitetura-do-sistema)
- [🎨 Decisões de Design Chave](#-decisões-de-design-chave)
- [⚡ Funcionalidades Detalhadas](#-funcionalidades-detalhadas)
- [🔧 Tech Stack](#-tech-stack)
- [📁 Estrutura do Código-Fonte](#-estrutura-do-código-fonte)
- [📋 Pré-requisitos](#-pré-requisitos)
- [⚙️ Instalação e Configuração](#️-instalação-e-configuração)
- [🚀 Uso e Exemplos](#-uso-e-exemplos)
- [📖 API Reference](#-api-reference)
- [🧪 Testes e Qualidade](#-testes-e-qualidade-de-código)
- [🌐 Deploy e Escalabilidade](#-deployment-e-escalabilidade)
- [🤝 Contribuição](#-contribuição)
- [👥 Equipe](#-equipe-principal)
- [❓ FAQ](#-faq)
- [📞 Suporte](#-contato-e-suporte)

</details>

---

## 💡 **Introdução e Motivação**

APIs RESTful são o núcleo de sistemas modernos, mas ir além do básico é essencial: **segurança, performance, tratativa granular de erros e escalabilidade**. Este projeto surge como um exemplo canônico que aborda desde o tratamento avançado de erros até middleware de paginação e validação rigorosa.

### 🎯 **Objetivos do Projeto**

- 🔥 Criar uma **base reutilizável** para projetos Node.js de produção
- 📚 Servir como **referência didática** para padrões e boas práticas
- 🛠️ Demonstrar **arquitetura escalável** com separação de responsabilidades
- 🔒 Implementar **tratamento robusto de erros** e validações

---

## 🏗️ **Arquitetura do Sistema**

O projeto adota **arquitetura em camadas**, promovendo clareza e manutenção:

```mermaid
graph TD
    subgraph "🌐 Camada de Apresentação"
        A[📱 Cliente HTTP] --> B[🛣️ Routes]
    end
    
    subgraph "🎮 Camada de Controle"
        B --> C[🎯 Controller]
        C --> D[📊 Middleware Paginação]
    end
    
    subgraph "📦 Camada de Dados"
        D --> E[🏪 Model]
        E --> F[(🗄️ MongoDB)]
    end
    
    subgraph "🛡️ Camada de Erros"
        B -->|❌ Erro| G[🚨 Middleware de Erros]
        C -->|❌ Erro| G
        D -->|❌ Erro| G
        E -->|❌ Erro| G
    end
    
    F --> E
    E --> D
    D --> C
    C --> H[✅ Resposta HTTP]
    G --> I[❌ Resposta de Erro]

    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
    style E fill:#fce4ec
    style F fill:#f1f8e9
    style G fill:#ffebee
    style H fill:#e8f5e8
    style I fill:#ffcdd2
```

### 🔄 **Fluxo de Processamento**

| Etapa | Componente | Responsabilidade |
|-------|------------|------------------|
| 1️⃣ | **Routes** | Definem endpoints e delegam requisições |
| 2️⃣ | **Controllers** | Centralizam lógica de negócio e orquestração |
| 3️⃣ | **Middlewares** | Processam paginação, ordenação e validação |
| 4️⃣ | **Models** | Interagem com MongoDB via Mongoose |
| 5️⃣ | **Error Handler** | Tratamento centralizado e padronizado |

---

## 🎨 **Decisões de Design Chave**

<div align="center">

| 🎯 Decisão | 💡 Motivação | 🚀 Benefício |
|------------|--------------|--------------|
| **ES Modules** | Sintaxe moderna import/export | Melhor tree-shaking e performance |
| **Express.js** | Framework minimalista | Flexibilidade e extensibilidade |
| **Mongoose** | ODM robusto para MongoDB | Validação e relacionamentos avançados |
| **Herança de Erros** | Sistema customizado hierárquico | Tratamento granular e consistente |
| **Middlewares Reutilizáveis** | Separação de responsabilidades | Código modular e testável |

</div>

### 🛡️ **Sistema de Tratamento de Erros**

```javascript
ErroBase
├── ErroValidacao (400)
├── NaoEncontrado (404)
└── RequisicaoIncorreta (400)
```

---

## ⚡ **Funcionalidades Detalhadas**

### 📚 **Gerenciamento Completo**

<div align="center">

| 🔧 Funcionalidade | 📋 Descrição | ✨ Recursos |
|-------------------|--------------|-------------|
| **CRUD Autores** | Operações completas | Validação rigorosa |
| **CRUD Livros** | Gestão com relacionamentos | População automática |
| **Busca Avançada** | Filtros parametrizados | Múltiplos critérios |
| **Paginação** | Performance otimizada | Ordenação flexível |
| **Validação** | Schemas customizados | Mensagens descritivas |

</div>

### 🔍 **Recursos de Busca Avançada**

- 🏢 **Por Editora** - Filtro exato ou parcial
- 📖 **Por Título** - Busca case-insensitive com regex
- 📊 **Por Páginas** - Intervalo mínimo/máximo
- 👨‍💼 **Por Autor** - Nome completo ou parcial
- 🔗 **Combinada** - Múltiplos filtros simultâneos

### 📊 **Sistema de Paginação**

```javascript
// Exemplo de resposta paginada
{
  "resultado": [...], // Dados da página atual
  "info": {
    "totalRegistros": 50,
    "paginaAtual": 2,
    "totalPaginas": 5,
    "registrosPorPagina": 10
  }
}
```

---

## 🔧 **Tech Stack**

<div align="center">

### 🏗️ **Arquitetura Principal**

| Categoria | Tecnologia | Versão | Propósito |
|-----------|------------|--------|-----------|
| **Runtime** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | 16+ | Execução JavaScript backend |
| **Framework** | ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | 4.x | Rotas e middlewares HTTP |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | 5.x | Banco NoSQL |
| **ODM** | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logoColor=white) | 7.x | Modelagem e validação |

### 🛠️ **Ferramentas de Desenvolvimento**

| Ferramenta | Função | Status |
|------------|--------|--------|
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) | Padronização de código | ✅ |
| ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white) | Hot reload | ✅ |
| ![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=flat&logoColor=black) | Variáveis de ambiente | ✅ |

</div>

---

## 📁 **Estrutura do Código-Fonte**

```
🏗️ api-node-express-2/
├── 📄 .env                          # Configurações de ambiente
├── ⚙️ .eslintrc.json               # Regras do ESLint
├── 🚫 .gitignore                   # Arquivos ignorados pelo Git
├── 📦 package.json                 # Dependências e scripts
├── 🚀 server.js                    # Ponto de entrada da aplicação
└── 📁 src/
    ├── 🎯 app.js                   # Configuração principal do Express
    ├── ⚙️ config/
    │   └── 🔌 dbConnect.js         # Conexão com MongoDB
    ├── 🎮 controllers/
    │   ├── 👨‍💼 autoresController.js   # Lógica de negócio - Autores
    │   └── 📚 livrosController.js    # Lógica de negócio - Livros
    ├── 🛡️ erros/
    │   ├── 🔴 ErroBase.js          # Classe base para erros
    │   ├── ⚠️ ErroValidacao.js     # Erros de validação
    │   ├── 🔍 NaoEncontrado.js     # Erro 404
    │   └── ❌ RequisicaoIncorreta.js # Erro 400
    ├── 🔧 middlewares/
    │   ├── 🔍 manipulador404.js    # Tratamento de rotas não encontradas
    │   ├── 🚨 manipuladorDeErros.js # Middleware central de erros
    │   └── 📊 paginar.js           # Middleware de paginação
    ├── 📦 models/
    │   ├── 👤 Autor.js             # Schema do Autor
    │   ├── 📖 Livro.js             # Schema do Livro
    │   ├── 🏠 index.js             # Exportações dos modelos
    │   └── ✅ validadorGlobal.js   # Validações customizadas
    └── 🛣️ routes/
        ├── 👥 autoresRoutes.js     # Rotas dos autores
        ├── 🏠 index.js             # Agregador de rotas
        └── 📚 livrosRoutes.js      # Rotas dos livros
```

---

## 📋 **Pré-requisitos**

<div align="center">

| Requisito | Versão Mínima | Status | Descrição |
|-----------|---------------|--------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-v16+-339933?style=flat&logo=node.js&logoColor=white) | 16.x | ✅ | Runtime JavaScript |
| ![npm](https://img.shields.io/badge/npm-v7+-CB3837?style=flat&logo=npm&logoColor=white) | 7.x | ✅ | Gerenciador de pacotes |
| ![MongoDB](https://img.shields.io/badge/MongoDB-v5+-47A248?style=flat&logo=mongodb&logoColor=white) | 5.x | ✅ | Banco de dados |

</div>

### 🔧 **Verificação do Ambiente**

```bash
# Verificar versões instaladas
node --version    # Deve ser >= 16.x
npm --version     # Deve ser >= 7.x
mongod --version  # Deve ser >= 5.x
```

---

## ⚙️ **Instalação e Configuração**

### 🚀 **Instalação Rápida**

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/ESousa97/api-node-express-2.git
cd api-node-express-2

# 2️⃣ Instale as dependências
npm install

# 3️⃣ Configure o ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# 4️⃣ Inicie em modo desenvolvimento
npm run dev
```

### 🔧 **Configuração do Ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
# 🌐 Configuração do Servidor
PORT=3000
NODE_ENV=development

# 🗄️ Configuração do Banco de Dados
STRING_CONEXAO_DB=mongodb://localhost:27017/livraria

# 🔐 Configurações Opcionais (para funcionalidades futuras)
JWT_SECRET=seu_jwt_secret_aqui
API_VERSION=v1
```

### 🐳 **Opção com Docker**

```bash
# Subir MongoDB local com Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Ou usar docker-compose (se disponível)
docker-compose up -d
```

---

## 🚀 **Uso e Exemplos**

### 📊 **Listar com Paginação e Ordenação**

```bash
# Listar livros da página 2, com 5 itens, ordenados por título
curl -X GET "http://localhost:3000/livros?pagina=2&limite=5&ordenacao=titulo:1"

# Resposta esperada:
{
  "resultado": [...],
  "info": {
    "totalRegistros": 25,
    "paginaAtual": 2,
    "totalPaginas": 5,
    "registrosPorPagina": 5
  }
}
```

### 🔍 **Busca Avançada Combinada**

```bash
# Buscar livros por editora E número mínimo de páginas
curl -G "http://localhost:3000/livros/busca" \
  --data-urlencode "editora=Casa do código" \
  --data-urlencode "minPaginas=150" \
  --data-urlencode "maxPaginas=500"
```

### 👨‍💼 **Cadastrar Autor**

```bash
curl -X POST "http://localhost:3000/autores" \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "J.R.R. Tolkien",
    "nacionalidade": "Sul-africano"
  }'
```

### 📚 **Cadastrar Livro com Validação**

```bash
# Requisição com dados válidos
curl -X POST "http://localhost:3000/livros" \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "O Senhor dos Anéis",
    "autor": "ObjectId_do_autor",
    "editora": "Martins Fontes",
    "numeroPaginas": 1200
  }'

# Requisição com dados inválidos (demonstra validação)
curl -X POST "http://localhost:3000/livros" \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "",
    "editora": ""
  }'

# Resposta de erro esperada:
{
  "erro": "Dados fornecidos estão em formato incorreto",
  "codigo": 400,
  "detalhes": {
    "titulo": "Título é obrigatório",
    "autor": "Autor é obrigatório"
  }
}
```

---

## 📖 **API Reference**

### 👨‍💼 **Endpoints de Autores**

<details>
<summary><strong>📋 Ver todos os endpoints de autores</strong></summary>

| Método | Endpoint | Descrição | Parâmetros | Status |
|--------|----------|-----------|------------|--------|
| `GET` | `/autores` | 📋 Lista autores com paginação | `pagina`, `limite`, `ordenacao` | ✅ |
| `GET` | `/autores/:id` | 🔍 Busca autor específico | `id` (ObjectId) | ✅ |
| `POST` | `/autores` | ➕ Cria novo autor | Body: `nome`, `nacionalidade` | ✅ |
| `PUT` | `/autores/:id` | ✏️ Atualiza autor | `id` + campos a atualizar | ✅ |
| `DELETE` | `/autores/:id` | 🗑️ Remove autor | `id` (ObjectId) | ✅ |

**Exemplo de Resposta GET /autores:**
```json
{
  "resultado": [
    {
      "_id": "64f8...",
      "nome": "J.R.R. Tolkien",
      "nacionalidade": "Sul-africano"
    }
  ],
  "info": {
    "totalRegistros": 10,
    "paginaAtual": 1,
    "totalPaginas": 2
  }
}
```

</details>

### 📚 **Endpoints de Livros**

<details>
<summary><strong>📖 Ver todos os endpoints de livros</strong></summary>

| Método | Endpoint | Descrição | Parâmetros | Status |
|--------|----------|-----------|------------|--------|
| `GET` | `/livros` | 📋 Lista livros com paginação | `pagina`, `limite`, `ordenacao` | ✅ |
| `GET` | `/livros/busca` | 🔍 Busca avançada | Ver tabela abaixo | ✅ |
| `GET` | `/livros/:id` | 📖 Detalha livro com autor | `id` (ObjectId) | ✅ |
| `POST` | `/livros` | ➕ Cria novo livro | Body: ver schema | ✅ |
| `PUT` | `/livros/:id` | ✏️ Atualiza livro | `id` + campos | ✅ |
| `DELETE` | `/livros/:id` | 🗑️ Remove livro | `id` (ObjectId) | ✅ |

**Parâmetros de Busca Avançada:**

| Parâmetro | Tipo | Descrição | Exemplo |
|-----------|------|-----------|---------|
| `editora` | String | Nome da editora (parcial) | `Casa do código` |
| `titulo` | String | Título do livro (regex) | `JavaScript` |
| `minPaginas` | Number | Páginas mínimas | `100` |
| `maxPaginas` | Number | Páginas máximas | `500` |
| `nomeAutor` | String | Nome do autor | `Douglas` |

</details>

### 📊 **Códigos de Resposta HTTP**

<div align="center">

| Código | Status | Descrição | Exemplo de Uso |
|--------|--------|-----------|----------------|
| ![200](https://img.shields.io/badge/200-OK-green) | ✅ Sucesso | Operação realizada | GET, PUT bem-sucedidos |
| ![201](https://img.shields.io/badge/201-Created-blue) | ➕ Criado | Recurso criado | POST bem-sucedido |
| ![400](https://img.shields.io/badge/400-Bad_Request-orange) | ❌ Dados inválidos | Erro de validação | Campos obrigatórios |
| ![404](https://img.shields.io/badge/404-Not_Found-red) | 🔍 Não encontrado | Recurso inexistente | ID inválido |
| ![500](https://img.shields.io/badge/500-Server_Error-darkred) | 💥 Erro interno | Falha no servidor | Erro de banco |

</div>

---

## 🧪 **Testes e Qualidade de Código**

### 🔍 **ESLint - Padronização**

```bash
# Verificar problemas de código
npx eslint .

# Corrigir automaticamente
npx eslint . --fix

# Verificar arquivo específico
npx eslint src/controllers/livrosController.js
```

### 🧪 **Framework de Testes Recomendado**

```bash
# Instalar Jest para testes
npm install --save-dev jest supertest

# Instalar para testes de integração
npm install --save-dev mongodb-memory-server
```

### 📊 **Exemplo de Teste Unitário**

```javascript
// tests/controllers/autores.test.js
import request from 'supertest';
import app from '../../src/app.js';

describe('🧪 Autores Controller', () => {
  test('✅ Deve listar autores com paginação', async () => {
    const response = await request(app)
      .get('/autores?pagina=1&limite=5')
      .expect(200);
    
    expect(response.body).toHaveProperty('resultado');
    expect(response.body).toHaveProperty('info');
    expect(response.body.info).toHaveProperty('totalRegistros');
  });
  
  test('❌ Deve retornar erro 400 para dados inválidos', async () => {
    const response = await request(app)
      .post('/autores')
      .send({ nome: '', nacionalidade: '' })
      .expect(400);
    
    expect(response.body).toHaveProperty('erro');
  });
});
```

### 🎯 **Métricas de Qualidade**

- 📊 **Cobertura de Testes:** Meta de 80%+
- 🔍 **ESLint Score:** Zero warnings/errors
- 📈 **Performance:** < 100ms resposta média
- 🛡️ **Segurança:** Validação rigorosa em todos os endpoints

---

## 🌐 **Deployment e Escalabilidade**

### ☁️ **Opções de Deploy**

<div align="center">

| Plataforma | Tipo | Complexidade | Recomendado Para |
|------------|------|--------------|------------------|
| ![Heroku](https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white) | PaaS | 🟢 Baixa | Prototipagem, MVP |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Serverless | 🟡 Média | APIs stateless |
| ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white) | IaaS | 🔴 Alta | Produção enterprise |
| ![DigitalOcean](https://img.shields.io/badge/DigitalOcean-0080FF?style=flat&logo=digitalocean&logoColor=white) | VPS | 🟡 Média | Custo-benefício |

</div>

### 🐳 **Containerização**

```dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./
RUN npm ci --only=production

# Copiar código-fonte
COPY . .

# Criar usuário não-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001

USER nodeuser

EXPOSE 3000

CMD ["npm", "start"]
```

### 📈 **Estratégias de Escalabilidade**

```yaml
# docker-compose.yml para escalabilidade
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000-3002:3000"
    environment:
      - NODE_ENV=production
      - STRING_CONEXAO_DB=${MONGO_URI}
    depends_on:
      - mongodb
    deploy:
      replicas: 3  # 3 instâncias da API
      
  mongodb:
    image: mongo:5
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=${MONGO_USER}
      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASS}
      
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    depends_on:
      - api
```

### 🚀 **Deploy em Heroku (Exemplo)**

```bash
# 1️⃣ Instalar Heroku CLI
npm install -g heroku

# 2️⃣ Login e criar app
heroku login
heroku create minha-api-livraria

# 3️⃣ Configurar variáveis de ambiente
heroku config:set STRING_CONEXAO_DB=mongodb+srv://...
heroku config:set NODE_ENV=production

# 4️⃣ Deploy
git push heroku main

# 5️⃣ Verificar logs
heroku logs --tail
```

---

## 🤝 **Contribuição**

Contribuições são **muito bem-vindas**! Este projeto segue práticas de código aberto e valorizamos cada contribuição.

### 📋 **Como Contribuir**

```bash
# 1️⃣ Fork o projeto no GitHub
# 2️⃣ Clone seu fork
git clone https://github.com/SEU-USUARIO/api-node-express-2.git

# 3️⃣ Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# 4️⃣ Implemente suas mudanças
# Siga os padrões de código existentes

# 5️⃣ Execute os testes
npm test
npm run lint

# 6️⃣ Commit suas mudanças
git commit -m "✨ Adiciona nova funcionalidade X"

# 7️⃣ Push para sua branch
git push origin feature/nova-funcionalidade

# 8️⃣ Abra um Pull Request
```

### 📝 **Diretrizes de Contribuição**

- ✅ **Código:** Siga o padrão ESLint configurado
- 🧪 **Testes:** Adicione testes para novas funcionalidades
- 📖 **Documentação:** Atualize README se necessário
- 🔀 **Commits:** Use mensagens descritivas com emojis
- 🐛 **Bugs:** Reporte via [Issues](https://github.com/ESousa97/api-node-express-2/issues)

### 🏆 **Tipos de Contribuição Valorizadas**

- 🚀 **Novas funcionalidades** - Endpoints, middlewares, validações
- 🐛 **Correção de bugs** - Melhorias na estabilidade
- 📚 **Documentação** - Exemplos, tutoriais, comentários
- 🧪 **Testes** - Cobertura, casos edge, integração
- ⚡ **Performance** - Otimizações, caching, queries
- 🛡️ **Segurança** - Validações, sanitização, autenticação

---

## 👥 **Equipe Principal**

<div align="center">

### 🏆 **Desenvolvedor**

<img src="https://github.com/ESousa97.png" width="120" height="120" style="border-radius: 50%; border: 3px solid #4CAF50;">

**José Enoque Sousa**  
*Full Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-ESousa97-181717?style=flat-square&logo=github)](https://github.com/ESousa97)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Enoque%20Sousa-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)

</div>

---

## ❓ **FAQ**

<details>
<summary><strong>🔌 Como configurar a conexão com o banco?</strong></summary>

1. Crie o arquivo `.env` na raiz do projeto
2. Defina `STRING_CONEXAO_DB` com a URL do MongoDB:
   ```env
   # Local
   STRING_CONEXAO_DB=mongodb://localhost:27017/livraria
   
   # MongoDB Atlas
   STRING_CONEXAO_DB=mongodb+srv://user:pass@cluster.mongodb.net/livraria
   ```
3. Certifique-se de que o MongoDB está rodando (local) ou configurado (Atlas)

</details>

<details>
<summary><strong>❌ Por que estou recebendo erro 400 ao criar um recurso?</strong></summary>

Erro 400 indica **falha de validação**. Verifique:
- ✅ Campos obrigatórios preenchidos
- ✅ Tipos de dados corretos
- ✅ Formato dos ObjectIds (se aplicável)
- 📖 Consulte a mensagem de erro retornada para detalhes específicos

Exemplo de erro de validação:
```json
{
  "erro": "Dados fornecidos estão em formato incorreto",
  "codigo": 400,
  "detalhes": {
    "titulo": "Título é obrigatório",
    "numeroPaginas": "Deve ser um número positivo"
  }
}
```

</details>

<details>
<summary><strong>🔍 A busca por título é case-sensitive?</strong></summary>

**Não!** A busca por título é:
- 🔤 **Case-insensitive** (ignora maiúsculas/minúsculas)
- 🎯 **Parcial** (busca por trechos do título)
- ⚡ **Otimizada** com regex MongoDB

Exemplo:
```bash
# Encontra "JavaScript: O Guia Definitivo"
curl "http://localhost:3000/livros/busca?titulo=javascript"
curl "http://localhost:3000/livros/busca?titulo=guia"
```

</details>

<details>
<summary><strong>📊 Como funciona a paginação?</strong></summary>

A paginação é **automática** e **configurável**:

```bash
# Sintaxe
GET /livros?pagina=2&limite=10&ordenacao=titulo:1

# Parâmetros
pagina=2        # Página desejada (padrão: 1)
limite=10       # Itens por página (padrão: 5, máx: 50)
ordenacao=campo:ordem  # 1=ASC, -1=DESC
```

**Resposta:**
```json
{
  "resultado": [...],
  "info": {
    "totalRegistros": 100,
    "paginaAtual": 2,
    "totalPaginas": 10,
    "registrosPorPagina": 10
  }
}
```

</details>

<details>
<summary><strong>🚀 O projeto está pronto para produção?</strong></summary>

**Sim**, com algumas considerações:

✅ **Pronto:**
- Tratamento robusto de erros
- Validação de dados rigorosa
- Arquitetura escalável
- Configuração por variáveis de ambiente

⚠️ **Recomendações adicionais:**
- Implementar autenticação/autorização
- Adicionar rate limiting
- Configurar logs estruturados
- Implementar monitoramento
- Adicionar testes automatizados

</details>

<details>
<summary><strong>🔧 Como adicionar novos campos aos modelos?</strong></summary>

1. **Atualize o Schema** no arquivo do modelo:
```javascript
// src/models/Livro.js
const livroSchema = new mongoose.Schema({
  // ... campos existentes
  isbn: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^978-\d{10}$/.test(v);
      },
      message: 'ISBN deve seguir o formato 978-XXXXXXXXXX'
    }
  }
});
```

2. **Atualize a validação** no controlador se necessário
3. **Teste** a nova funcionalidade
4. **Documente** as mudanças

</details>

<details>
<summary><strong>📈 Como monitorar a performance da API?</strong></summary>

Recomendações para monitoramento:

```javascript
// Middleware de logging personalizado
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
  });
  
  next();
});
```

**Ferramentas recomendadas:**
- 📊 **APM:** New Relic, DataDog
- 📈 **Logs:** Winston, Morgan
- 🔍 **Debugging:** Debug module
- ⚡ **Performance:** Artillery, k6

</details>

---

## 📞 **Contato e Suporte**

<div align="center">

### 🆘 **Precisa de Ajuda?**

| Tipo de Suporte | Canal | Tempo de Resposta |
|------------------|-------|-------------------|
| 🐛 **Bugs** | [GitHub Issues](https://github.com/ESousa97/api-node-express-2/issues) | 24-48h |
| 💡 **Sugestões** | [GitHub Discussions](https://github.com/ESousa97/api-node-express-2/discussions) | 2-7 dias |
| 📚 **Dúvidas** | [LinkedIn](https://www.linkedin.com/in/enoque-sousa-bb89aa168/) | 1-3 dias |
| 🚀 **Colaboração** | [Email](mailto:enoque.sousa@example.com) | 24h |



</div>

---

## 🎉 **Agradecimentos**

<div align="center">

Agradecemos a todos que contribuíram para tornar este projeto uma referência em APIs Node.js:

### 🌟 **Tecnologias que Inspiraram**
 💚 **Node.js Community** - Por criar um ecossistema incrível

 ⚡ **Express.js Team** - Pela simplicidade e flexibilidade

 🍃 **MongoDB** - Por revolucionar bancos NoSQL

 🔧 **Mongoose** - Por facilitar a modelagem de dados

### 📚 **Recursos Educacionais**

 🎓 Cursos e tutoriais da comunidade

 📖 Documentação oficial das tecnologias

 🤝 Stack Overflow e fóruns de desenvolvimento

</div>

---

<div align="center">

## 🚀 **Pronto para Começar?**

**⭐ Se este projeto foi útil, deixe uma estrela no GitHub!**

[![⭐ Star no GitHub](https://img.shields.io/badge/⭐_Star-no_GitHub-yellow?style=for-the-badge&logo=github)](https://github.com/ESousa97/api-node-express-2)

---

*💡 **Criado com** ❤️ **e muito** ☕ **por [José Enoque Sousa](https://github.com/ESousa97)***

*📅 **Última atualização:** Dezembro 2024*

**🔗 Links Úteis:**
[📚 Documentação](README.md) • [🐛 Issues](https://github.com/ESousa97/api-node-express-2/issues) • [💬 Discussions](https://github.com/ESousa97/api-node-express-2/discussions) • [📋 Projetos](https://github.com/ESousa97/api-node-express-2/projects)

</div>


> ✨ **Criado em:** 18 de jun. de 2024 às 21:40
