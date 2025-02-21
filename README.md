# :purple_circle: Sistema de Inscrições e Indicações para Eventos

Este é um sistema de inscrições para eventos com uma funcionalidade de indicações. O projeto foi desenvolvido utilizando Node.js com Fastify, Drizzle ORM, PostgreSQL e Redis. A validação de dados é feita com Zod, e a minificação do código é realizada com Tsup. A aplicação foi documentada com Swagger.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM leve e tipado para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Redis** - Armazenamento em cache e fila de tarefas
- **Zod** - Validação e tipagem de dados
- **Tsup** - Minificação e empacotamento do código
- **Swagger** - Documentação da API

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

```env
PORT=3333

# URLs
WEB_URL="http://localhost:3000"

# Database
POSTGRES_URL="postgresql://docker:docker@localhost:5432/connect"
REDIS_URL="redis://localhost:6379"
```

## Executando o Projeto

Para iniciar a aplicação em modo de desenvolvimento:

```sh
docker compose up -d
npm run dev
```
