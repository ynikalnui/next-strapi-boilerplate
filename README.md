# Next.js Boilerplate with Strapi CMS and GraphQL

This project is divided into two sections:

1. **Frontend**: A web application built to provide users with an interactive and user-friendly interface.
2. **Backend**: A [Strapi](https://strapi.io/) instance for content management and API integration.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ynikalnui/next-strapi-boilerplate.git

2. Install Dependencies for the Frontend
   
     ```bash
     cd frontend
     pnpm install
     # or
     npm install
     # or
     yarn install

3. Install Dependencies for the Backend

     ```bash
     cd ../backend
     pnpm install
     # or
     npm install
     # or
     yarn install

## Configuration

Ensure you create a .env file in the backend directory with the following values before starting the Strapi instance:

      ```bash
      HOST=0.0.0.0
      PORT=1337
      APP_KEYS="toBeModified1,toBeModified2"
      API_TOKEN_SALT=tobemodified
      ADMIN_JWT_SECRET=tobemodified
      TRANSFER_TOKEN_SALT=tobemodified
      JWT_SECRET=tobemodified

## Useful Links
- **GraphQL Playground**: [http://localhost:1337/graphql](http://localhost:1337/graphql)
