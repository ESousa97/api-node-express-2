# 🔒 Política de Segurança

## Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.x.x  | :white_check_mark: |

## Reportando uma Vulnerabilidade

A segurança deste projeto é levada a sério. Se você descobrir uma vulnerabilidade de segurança, por favor, reporte-a de forma responsável.

### Como Reportar

1. **NÃO** abra uma issue pública para vulnerabilidades de segurança
2. Envie um e-mail para os maintainers do projeto
3. Inclua as seguintes informações:
   - Descrição detalhada da vulnerabilidade
   - Passos para reproduzir
   - Impacto potencial
   - Sugestões de correção (se houver)

### O que Esperar

- **Confirmação**: Responderemos em até 48 horas
- **Avaliação**: Analisaremos a vulnerabilidade em até 7 dias
- **Correção**: Trabalharemos em uma correção prioritária
- **Divulgação**: Coordenaremos a divulgação após a correção

### Práticas de Segurança do Projeto

Este projeto implementa as seguintes práticas:

#### Dependências

- Atualizações regulares via Dependabot
- Auditoria de segurança com `npm audit`
- Verificação de vulnerabilidades conhecidas

#### Código

- Validação de entrada em todos os endpoints
- Sanitização de dados
- Tratamento de erros sem exposição de informações sensíveis
- Não há secrets hardcoded no código

#### Infraestrutura

- Variáveis de ambiente para configurações sensíveis
- Arquivo `.env` no `.gitignore`

## Boas Práticas para Usuários

### Configuração Segura

```bash
# Use variáveis de ambiente para dados sensíveis
STRING_CONEXAO_DB=mongodb://...

# Nunca commite arquivos .env
# O .gitignore já inclui .env
```

### Produção

- Use HTTPS
- Configure rate limiting
- Implemente autenticação/autorização conforme necessário
- Mantenha dependências atualizadas
- Monitore logs de acesso

## Vulnerabilidades Conhecidas

Atualmente não há vulnerabilidades conhecidas. Verifique regularmente com:

```bash
npm audit
```

## Agradecimentos

Agradecemos a todos que reportam vulnerabilidades de forma responsável, ajudando a manter este projeto seguro.
