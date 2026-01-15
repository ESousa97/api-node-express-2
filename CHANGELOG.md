# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added

- Configuração de CI/CD com GitHub Actions
- Badges de qualidade no README
- Testes automatizados com Jest
- Documentação de contribuição (CONTRIBUTING.md)
- Código de Conduta (CODE_OF_CONDUCT.md)
- Política de Segurança (SECURITY.md)
- Configuração do EditorConfig
- Template de exemplo para variáveis de ambiente

### Changed

- Atualização das dependências de desenvolvimento
- Melhoria na configuração do ESLint
- Padronização dos scripts npm

### Fixed

- Correção na configuração do ESLint para ES Modules

## [1.0.0] - 2026-01-12

### Added

- API RESTful para gerenciamento de livros e autores
- CRUD completo para entidade Livro
- CRUD completo para entidade Autor
- Sistema de tratamento de erros hierárquico
  - ErroBase
  - NaoEncontrado (404)
  - RequisicaoIncorreta (400)
  - ErroValidacao
- Middleware de paginação reutilizável
- Busca parametrizada com filtros combinados
- Validação de schemas com Mongoose
- Validador global para campos string
- Configuração de conexão com MongoDB
- Suporte a ES Modules
- Documentação completa no README

### Technical

- Express.js como framework web
- Mongoose para ODM MongoDB
- Nodemon para desenvolvimento
- ESLint para linting
- Arquitetura em camadas (routes, controllers, models, middlewares)

[Unreleased]: https://github.com/ESousa97/api-node-express-2/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ESousa97/api-node-express-2/releases/tag/v1.0.0
