# Plan de création d'une API Rest

## Dans le cas d'un projet venant d'un tiers

Une étude préliminaire est nécessaire afin de bien comprendre la demande.

- Analyse de la demande
- Création des Users Stories

## Étapes

1. MCD (Modèle Conceptuel de données)
2. Mise en place de l'arborescence du dossier devant acueillir notre API (M_C, car il n'y a pas de vues)
    - app
      - routers
      - dataMappers/model
      - controllers
      - validations
      - services (modules métiers)
    - migrations (sqitch)
    - data (jsons, script import sql…)
    - docs (brief, mcd, users stories…)
3. MPD (Modèle Physique de Données)
   1. Création de la BDD
   2. sqitch pour avoir un historique des migrations
        1. sqitch init (initialisation)
        2. sqitch add (création de la 1ère étape)
        3. Création de la 1ère migration, permettant de créer la structure de la BDD
        4. sqitch deploy
        5. sqitch verify
4. Initialisation du gestionnaire de modules (npm/yarn)
5. Installation des modules nécessaires
6. Soit le projet a été créé sur github soit on initialise (git init)
7. Ajout du fichier .gitignore
8. Ajout du fichier .env et .env.example, sqitch.example.conf
9. Seeding (ajouter des données réelles ou de test)
   1. création d'un script d'import
      - Si les données proviennent d'un autre BDD relationnel et qsue l'on a les script SQL, on se contente des les exécuter.
      - Si les données proviennent de JSON, on créer un script JS qui va lire ces données et les importé au fur et à mesure dans les tables correspondante
      - Si on a pas de données
        - On créer un script SQL avec des données bidons
        - On utilise un module de mock
   2. Exécution du script d'import
10. Point d'entrée de l'application (serveur web) index.js
11. Création des dataMappers/models
12. Services (s'il y en a)
13. Controllers
14. Routers
15. Validations
16. Les test des routes
