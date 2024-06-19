# Projeto API Node.js com Express e MongoDB

### Descrição

Este projeto é uma API desenvolvida em Node.js utilizando o framework Express e o banco de dados MongoDB. O objetivo é fornecer uma interface RESTful para gerenciamento de entidades como Autores e Livros. O projeto inclui funcionalidades de CRUD (Create, Read, Update, Delete) para ambas as entidades.

### Pré-requisitos

Para rodar este projeto, você precisará ter instalado:

- Node.js
- npm (Node Package Manager)
- MongoDB

Instalação

1. Clonar o Repositório

```bash

git clone <url-do-repositorio>
cd nome-do-repositorio

```

2. Instalar Dependências

```bash

npm install

```

3. Configurar Variáveis de Ambiente

- Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash

PORT=3000
STRING_CONEXAO_DB=mongodb://seu_usuario:sua_senha@seuhost:27017/suabase

```
### Estrutura do Projeto

- `src/`

- `app.js` - Configura o servidor Express e as rotas.

- `server.js` - Ponto de entrada do servidor, define a porta e inicia o servidor.

- `config/`

- `dbConnect.js` - Configura a conexão com o MongoDB.

- `controllers/`

- `autoresController.js` - Contém a lógica de negócio para operações CRUD em Autores.

- `livrosController.js` - Contém a lógica de negócio para operações CRUD em Livros.

- `models/`

- `Autor.js` - Define o schema Mongoose para autores.

- `Livro.js` - Define o schema Mongoose para livros.

- `routes/`

- `autoresRoutes.js` - Define as rotas RESTful para Autores.

- `livrosRoutes.js` - Define as rotas RESTful para Livros.

### Uso

Para iniciar o servidor, execute:

```bash

npm run dev

```

Isso iniciará o servidor em `http://localhost:3000` usando `nodemon` para reinicialização automática em mudanças de arquivo.

#### Teste

Para executar testes (implementação de testes deve ser feita pelo usuário):

```bash

npm run test

```

### ESLint

Para verificar e corrigir problemas de estilo de código com ESLint:

```bash

npx eslint . --fix

```

#