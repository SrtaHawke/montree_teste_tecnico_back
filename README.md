# Teste Técnico Backend - Lista de Compras Aleatórias com Catálogo

## Desenvolvedora

**Nayara da Cruz**

---

# Descrição

Este projeto foi desenvolvido como solução para o teste técnico de Backend.

A aplicação consiste em uma API REST construída com **AdonisJS**, responsável por gerenciar um catálogo de itens e registrar compras.

Ao criar uma compra, a aplicação:

- valida a existência do item;
- verifica disponibilidade em estoque;
- consulta a API pública do GitHub;
- seleciona um usuário aleatoriamente;
- registra a compra relacionando o usuário do GitHub ao item adquirido;
- decrementa automaticamente o estoque do item.

O banco de dados utilizado é **SQLite** e toda a estrutura foi criada através de **migrations**.

---

# Postman Colection

https://.postman.co/workspace/Personal-Workspace~970e04f8-b26a-44f3-9e0e-b80be021ff2c/collection/32689583-dd392193-0cad-498b-9df5-38e72b61eb96?action=share&creator=32689583

---

# Tecnologias

- AdonisJS
- TypeScript
- SQLite
- Lucid ORM
- GitHub REST API

---

# Estrutura do Projeto

```
app
├── Controllers
├── Exceptions
├── Models
├── Services
└── Validators

database
├── migrations
└── seeders

start
└── routes.ts
```

---

# Instalação

Clone o projeto

```bash
git clone <url-do-repositorio>
```

Entre na pasta

```bash
cd teste_tecnico_back
```

Instale as dependências

```bash
npm install
```

Execute as migrations

```bash
node ace migration:run
```

Inicie o servidor

```bash
npm run dev
```

A API ficará disponível em

```
http://localhost:3333
```

---

# Banco de Dados

O projeto utiliza **SQLite**.

O arquivo do banco é criado automaticamente na pasta:

```
tmp/db.sqlite3
```

---

# Endpoints

## Criar Item

**POST**

```
/itens
```

Body

```json
{
  "nome": "Notebook",
  "preco": 3500,
  "qtd_atual": 5
}
```

Resposta

```json
{
  "id": 1,
  "nome": "Notebook",
  "preco": 3500,
  "qtd_atual": 5
}
```

---

## Listar Itens

**GET**

```
/itens
```

---

## Criar Compra

**POST**

```
/compras
```

Body

```json
{
  "item_id": 1
}
```

Resposta

```json
{
  "id": 1,
  "item_id": 1,
  "comprador_github_login": "octocat",
  "item": {
    "id": 1,
    "nome": "Notebook",
    "preco": 3500,
    "qtd_atual": 4
  }
}
```

---

## Listar Compras

**GET**

```
/compras
```

---

# Regras de Negócio

Ao criar uma compra:

- o item deve existir;
- o item deve possuir estoque disponível;
- o estoque é decrementado automaticamente;
- o comprador é obtido através da API pública do GitHub;
- o retorno da compra inclui os dados completos do item relacionado.

---

# Tratamento de Erros

A API trata os seguintes cenários:

- Item não encontrado;
- Item sem estoque;
- Falha ao consultar a API do GitHub;
- Requisições inválidas.

---

# Estrutura Arquitetural

O projeto foi organizado seguindo o padrão MVC.

```
Controllers
    ↓
Services
    ↓
Models
    ↓
Database
```

Além disso, foram separados:

- Services
- Validators
- Exceptions

para manter o código organizado e facilitar futuras manutenções.

---

# Testes

Foi disponibilizada uma coleção do **Postman** contendo todas as requisições utilizadas para validação da API.

---

# Observações

Durante o desenvolvimento foram adotadas boas práticas como:

- separação de responsabilidades;
- utilização de Services;
- Exceptions customizadas;
- utilização de Migrations;
- relacionamentos via Lucid ORM;
- integração com API externa (GitHub);
- uso de transações para garantir consistência na atualização do estoque.

# Diferenciais Implementados

- ✔ Arquitetura MVC
- ✔ Lucid ORM
- ✔ SQLite com Migrations
- ✔ Integração com API pública do GitHub
- ✔ Services para regras de negócio
- ✔ Exceptions customizadas
- ✔ Relacionamento Item → Compra
- ✔ Atualização automática de estoque
- ✔ Transações para garantir consistência dos dados
