# WazirX Portfolio Tracker
This is a cryptocurrency portfolio tracking web app built using MERN stack. It uses Google OAuth2.0 for authentication and WazirX price list API for fetching latest price of cryptocurrencies.

## Setting up local development
- Setup a MongoDB server, either on your localhost or at [MongoDB](https://www.mongodb.com/)
- Google OAuth
  - [Enable APIs](https://developers.google.com/identity/protocols/oauth2/web-server#enable-apis)
  - [Create credentials](https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred)
    - Under redirect URIs, you want to add `http://localhost:5000/auth/google/callback`
- Backend
  - run ```npm i```
  - create a `.env` file
  - Add the ID and Secret you got from OAuth in the `.env` file
  - ```
    PORT=5000
    DATABASE=<Mongo URL>
    SECRET=<Your Secret>
    NODE_GOOGLE_CLIENT_ID=<Your Client ID>
    NODE_GOOGLE_CLIENT_SECRET=<Your Client Secret>
    ```
  - run ```node server.js```
- Client
  - run ```npm i```
  - run ```npm start```