# 🤝 Guia de Contribuição

Obrigado pelo interesse em contribuir com o projeto **API Node Express**! Este documento descreve o processo para contribuir de forma eficaz.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)

---

## 📜 Código de Conduta

Este projeto adota o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, espera-se que você mantenha esse código.

## 🚀 Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/api-node-express-2.git
cd api-node-express-2

# Adicione o repositório original como upstream
git remote add upstream https://github.com/ESousa97/api-node-express-2.git
```

### 2. Crie uma Branch

```bash
# Atualize seu main
git checkout main
git pull upstream main

# Crie uma branch para sua feature/fix
git checkout -b feature/minha-feature
# ou
git checkout -b fix/meu-fix
```

### 3. Faça suas Alterações

- Siga os [padrões de código](#padrões-de-código)
- Escreva testes quando aplicável
- Atualize a documentação se necessário

### 4. Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Formatos válidos:
git commit -m "feat: adiciona endpoint de busca avançada"
git commit -m "fix: corrige validação de ISBN"
git commit -m "docs: atualiza README com exemplos"
git commit -m "test: adiciona testes para AutorController"
git commit -m "refactor: melhora estrutura do middleware de paginação"
```

### 5. Push e Pull Request

```bash
git push origin feature/minha-feature
```

Abra um Pull Request no GitHub.

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js >= 18.x
- MongoDB >= 6.x
- npm >= 9.x

### Instalação

```bash
# Instale as dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações

# Execute em desenvolvimento
npm run dev

# Execute os testes
npm test

# Execute o linter
npm run lint
```

---

## 📐 Padrões de Código

### Estilo

- **Indentação**: 2 espaços
- **Aspas**: Duplas (`"`)
- **Ponto e vírgula**: Sempre
- **ES Modules**: Use `import/export`

### Estrutura

```
src/
├── config/        # Configurações (DB, etc.)
├── controllers/   # Lógica de controle
├── erros/         # Classes de erro customizadas
├── middlewares/   # Middlewares Express
├── models/        # Schemas Mongoose
└── routes/        # Definição de rotas
```

### Nomenclatura

- **Arquivos**: camelCase (`livrosController.js`)
- **Classes**: PascalCase (`LivroController`)
- **Funções/Variáveis**: camelCase (`listarLivros`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_PAGE_SIZE`)

---

## 🔄 Processo de Pull Request

1. **Título**: Descreva claramente a mudança
2. **Descrição**: Explique o que, por que e como
3. **Testes**: Garanta que passam (`npm test`)
4. **Lint**: Sem erros (`npm run lint`)
5. **Review**: Aguarde revisão de um maintainer

### Checklist

- [ ] Código segue os padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] CHANGELOG.md atualizado (se aplicável)
- [ ] Sem breaking changes (ou documentadas)

---

## 🐛 Reportando Bugs

Use o template de issue para bugs:

1. **Título claro**: Descreva o problema
2. **Reprodução**: Passos para reproduzir
3. **Comportamento esperado**: O que deveria acontecer
4. **Comportamento atual**: O que está acontecendo
5. **Ambiente**: Node.js, SO, versão do projeto

---

## 💡 Sugerindo Melhorias

1. Verifique se já existe uma issue similar
2. Descreva a melhoria claramente
3. Explique o caso de uso
4. Considere implementar você mesmo!

---

## ❓ Dúvidas?

Abra uma issue com a tag `question` ou entre em contato com os maintainers.

**Obrigado por contribuir! 🎉**
