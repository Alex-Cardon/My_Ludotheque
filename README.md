# MyLudotheque

Ceci est une API de gestion de ludothèque ouverte à tous.

## Auteurs

- [@Alex-Cardon](https://github.com/Alex-Cardon)

## Stack

- [PostgreSQL](https://www.postgresql.org/)
- [Node.js](http://nodejs.org/)
- [Sqitch](https://sqitch.org/)
- [Express](http://expressjs.com/)
- [node-postgres](https://node-postgres.com/)
- [Joi](http://joi.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-redis-cache](https://github.com/rv-kip/express-redis-cache#readme)
- [express-swagger-generator](https://github.com/pgroot/express-swagger-generator)

## Run Locally

Clonez le projet

```bash
  git clone https://github.com/Alex-Cardon/My_Ludotheque.git
```

Rendez-vous dans le répertoire racine du projet

```bash
  cd my-project
```

Installez la base de données PostgreSQL

```bash
createdb my_ludotheque
```

Afin de déployer la BDD, indqiuer les informations de connexion nécessaire dans un fichier `./sqitch.conf` à l'image du `./sqitch.example.conf`.

Puis :

```bash
sqitch deploy
```

Installation de dépendences

```bash
  npm install
```

Démarrage du serveur

```bash
  npm run start
```

## Variables d'environment

…
