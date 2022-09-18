<h4 align="center">
  <img src="./web/src/assets/logo-nlw-esports.svg" alt="NLW eSports"/>
</h4>
<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />

  <img alt="React Native" src="https://img.shields.io/badge/react_native-%23563D7C.svg?style=for-the-badge&logo=react&logoColor=white" />

  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-03684f?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

Plataforma para conectar pessoas para jogarem juntas.

- [Stack](#stack)
- [Documentação](#documentação)
- [Setup](#setup)
- [API](#api)
## Stack

**Front-end:** [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org), [TailwindCSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/).

**Back-end:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Typescript](https://www.typescriptlang.org), [Prisma](https://www.prisma.io/).

**Mobile:** [React Native](https://reactnative.dev/), [Expo](https://expo.dev/), [Typescript](https://www.typescriptlang.org).

## Documentação
Protótipos do projeto: [Figma](https://www.figma.com/community/file/1150897317533332617)

Outras informações: [Notion](https://efficient-sloth-d85.notion.site/Ignite-18c1174738e54f1d8e742f794e210cd2)

## Setup

**Backend**

Crie um arquivo ``.env`` na pasta server com o seguinte conteúdo:

```bash
  DATABASE_URL="file:../src/database/db.sqlite"
```

No terminal, entre na pasta server e rode o seguinte comando:

```bash
  npm i && npm start
```
Esse comando ira instalar as dependências, iniciar o banco local já com dados e iniciar o servidor.

<br>

**Frontend**

Entre na pasta web e rode o seguinte comando:

```bash
  npm i && npm run dev
```

Esse comando ira instalar as dependências e iniciar o frontend.

<br>

**Mobile**

Entre na pasta mobile e rode o seguinte comando:

```bash
  npm i && npm start
```

Depois disso é só iniciar o seu emulador, ou entao baixar o app Expo GO em um device físico e escanear o QRCode gerado no terminal.

## API

#### Retorna todos os games

```http
  GET /games
```
#### Retorna todos os anúncios cadastrados em um game

```http
  GET /games/${id}/ads
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do game que você quer |

#### Retorna o discord de um anúncio

```http
  GET /ads/${id}/discord
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do game que você quer |

#### Cadastra um anúncio

```http
  POST /games/${id}/ads
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do game que você quer |

**request body:**
```JSON
{
  "name": "name",
  "yearsPlaying": 1,
  "discord": "My Discord #3422",
  "weekDays": [0, 5, 6],
  "hourStart": "18:00",
  "hourEnd": "22:00",
  "useVoiceChannel": true
}
```