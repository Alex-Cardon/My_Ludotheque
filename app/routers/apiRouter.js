const express = require('express');
const cache = require('express-redis-cache')({
    auth_pass: process.env.REDIS_PASSWORD,
    prefix: process.env.REDIS_PREFIX,
    expire: 10//60
});


const schemas = require('../validations/schemas');

const validate = require('../validations/validate');
const controllerFactory = require('../controllers/controllerFactory');
const authorController = require('../controllers/authorController');
const publisherController = require('../controllers/publisherController');
const gameController = require('../controllers/gameControlle');
const mechanicsController = require('../controllers/mechanicsController');
const themeController = require('../controllers/themeController');
const extensionController = require('../controllers/extensionControlle');
const errorController = require('../controllers/errorController');

const router = express.Router();

router.route('/authors')
    /**
     * Liste des auteurs
     * @route GET /authors
     * @returns {Author[]} 200 - La liste des auteurs
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(cache.route('authors'), controllerFactory.getAll('author'))
    /**
     * Ajouter un auteur
     * @route POST /authors
     * @param {AuthorInput.model} Author.body.required - Un objet contenant les informations d'un auteur
     * @returns {Author} 200 - L'auteur créé
     * @returns {Error} 500 - Auteur déjà présent dans la BDD
     */
    .post(validate.body(schemas.authorInsertSchema), controllerFactory.add('author'));


    router.route('/authors/:id(\\d+)')
    /**
     * Un auteur
     * @route GET /authors/{id}
     * @param {number} id - Identifiant de l'auteur
     * @returns {Author.model} 200 - L'auteur
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(authorController.getById)
    /**
     * Mise à jour d'un auteur
     * @route PATCH /authors/{id}
     * @param {number} id - Identifiant de l'auteur
     * @param {AuthorInput.model} Author.body.required - Un objet  contenant les informations partiels d'un auteur
     * @returns {Author.model} 200 - L'auteur créé
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(validate.body(schemas.authorUpdateSchema), controllerFactory.update('author'))
    /**
     * Un auteur
     * @route DELETE /authors/{id}
     * @param {number} id - Identifiant de l'auteur
     * @returns {Author} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(controllerFactory.delete('author'));


    router.route('/publishers')
    /**
     * Liste des éditeurs
     * @route GET /publishers
     * @returns {Publisher[]} 200 - La liste des éditeurs
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(controllerFactory.getAll('publisher'))
    /**
     * Ajouter un éditeur
     * @route POST /publishers
     * @param {PublisherInput.model} Publisher.body.required - Un objet contenant les informations d'un éditeur
     * @returns {Author} 200 - L'éditeur créé
     * @returns {Error} 500 - Éditeur déjà présent dans la BDD
     */
    .post(validate.body(schemas.publisherInsertSchema), controllerFactory.add('publisher'));

    router.route('/publishers/:id(\\d+)')
    /**
     * Un éditeur
     * @route GET /publishers/{id}
     * @param {number} id - Identifiant de l'éditeur
     * @returns {Publisher.model} 200 - L'éditeur
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(publisherController.getById)
    /**
     * Mise à jour d'un éditeur
     * @route PATCH /publishers/{id}
     * @param {number} id - Identifiant de l'éditeur
     * @param {PublisherInput.model} Publisher.body.required - Un objet  contenant les informations partiels d'un éditeur
     * @returns {Publisher.model} 200 - L'éditeur créé
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(validate.body(schemas.publisherUpdateSchema), controllerFactory.update('publisher'))

    /**
     * Un éditeur
     * @route DELETE /publishers/{id}
     * @param {number} id - Identifiant de l'éditeur
     * @returns {Publisher} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(controllerFactory.delete('publisher'));



    router.route('/games')
    /**
     * Liste des jeux
     * @route GET /games
     * @returns {Game[]} 200 - La liste des jeux
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(controllerFactory.getAll('game'))


    /**
     * Ajouter un jeu
     * @route POST /games
     * @param {GameInput.model} Game.body.required - Un objet contenant les informations d'un jeu
     * @returns {Game} 200 - Le jeu créé
     * @returns {Error} 500 - Jeu déjà présent dans la BDD
     */
    .post(validate.body(schemas.gameInsertSchema), controllerFactory.add('game'));

    router.route('/games/:id(\\d+)')
    /**
     * Un jeu
     * @route GET /games/{id}
     * @param {number} id - Identifiant du jeu
     * @returns {Game.model} 200 - Le jeu
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(gameController.getById)
    /**
     * Mise à jour d'un jeu
     * @route PATCH /games/{id}
     * @param {number} id - Identifiant du jeu
     * @param {GameInput.model} Game.body.required - Un objet  contenant les informations partiels d'un jeu
     * @returns {Game.model} 200 - Le jeu créé
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(validate.body(schemas.gameUpdateSchema), controllerFactory.update('game'))

    /**
     * Un jeu
     * @route DELETE /games/{id}
     * @param {number} id - Identifiant du jeu
     * @returns {Game} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(controllerFactory.delete('game'));







    router.route('/mechanics')
    /**
     * Liste des thèmes
     * @route GET /mechanics
     * @returns {Mechanics[]} 200 - La liste des thèmes
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(cache.route('mechanics'), controllerFactory.getAll('mechanics'))
    /**
     * Ajouter une mécanique
     * @route POST /mechanics
     * @param {MechanicsInput.model} Mechanics.body.required - Un objet contenant les informations une mécanique
     * @returns {Mechanics} 200 - La mécanique créée
     * @returns {Error} 500 - Mécanique déjà présente dans la BDD
     */
    .post(validate.body(schemas.mechanicsInsertSchema), controllerFactory.add('mechanics'));


    router.route('/mechanics/:id(\\d+)')
    /**
     * Une mécanique
     * @route GET /mechanics/{id}
     * @param {number} id - Identifiant de la mécanique
     * @returns {Mechanics.model} 200 - La mécanique
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(mechanicsController.getById)
    /**
     * Mise à jour d'une mécanique
     * @route PATCH /mechanics/{id}
     * @param {number} id - Identifiant de la mécanique
     * @param {MechanicsInput.model} Mechanics.body.required - Un objet  contenant les informations partiels d'une mécanique
     * @returns {Mechanics.model} 200 - La mécanique créé
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(validate.body(schemas.mechanicsUpdateSchema), controllerFactory.update('mechanics'))
    /**
     * Une mécanique
     * @route DELETE /mechanics/{id}
     * @param {number} id - Identifiant de la mécanique
     * @returns {Mechanics} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(controllerFactory.delete('mechanics'));




    router.route('/themes')
    /**
     * Liste des thèmes
     * @route GET /theme
     * @returns {Theme[]} 200 - La liste des thèmes
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(cache.route('theme'), controllerFactory.getAll('theme'))
    /**
     * Ajouter un thème
     * @route POST /theme
     * @param {ThemeInput.model} Theme.body.required - Un objet contenant les informations d'un thème
     * @returns {Theme} 200 - Le thème créée
     * @returns {Error} 500 - Thème déjà présent dans la BDD
     */
    .post(validate.body(schemas.themeInsertSchema), controllerFactory.add('theme'));


    router.route('/themes/:id(\\d+)')
    /**
     * Un thème
     * @route GET /theme/{id}
     * @param {number} id - Identifiant du thème
     * @returns {Theme.model} 200 - Le thème
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(themeController.getById)
    /**
     * Mise à jour d'un thème
     * @route PATCH /theme/{id}
     * @param {number} id - Identifiant du thème
     * @param {ThemeInput.model} Theme.body.required - Un objet  contenant les informations partiels d'un thème
     * @returns {Theme.model} 200 - Le thème créé
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(validate.body(schemas.themeUpdateSchema), controllerFactory.update('theme'))
    /**
     * Un thème
     * @route DELETE /theme/{id}
     * @param {number} id - Identifiant du thème
     * @returns {Theme} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(controllerFactory.delete('theme'));




    router.route('/extensions')
    /**
     * Liste des extensions
     * @route GET /theme
     * @returns {Extension[]} 200 - La liste des extensions
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(cache.route('extension'), controllerFactory.getAll('extension'))
    /**
     * Ajouter une extension
     * @route POST /extension
     * @param {ExtensionInput.model} Extension.body.required - Un objet contenant les informations d'une extension
     * @returns {Extension} 200 - L'extension' créée
     * @returns {Error} 500 - Extension déjà présente dans la BDD
     */
    .post(validate.body(schemas.extensionInsertSchema), controllerFactory.add('extension'));


    router.route('/extensions/:id(\\d+)')
    /**
     * Une extension
     * @route GET /extension/{id}
     * @param {number} id - Identifiant de l'extension
     * @returns {Extension.model} 200 - L'extension'
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(extensionController.getById)
    /**
     * Mise à jour d'une extension
     * @route PATCH /extension/{id}
     * @param {number} id - Identifiant de l'extension
     * @param {ExtensionInput.model} Extension.body.required - Un objet  contenant les informations partiels d'une extension
     * @returns {Extension.model} 200 - L'extension créée
     * @returns {Error} 500 - Une erreur serveur
     */
    .patch(validate.body(schemas.extensionUpdateSchema), controllerFactory.update('extension'))
    /**
     * Une extension
     * @route DELETE /extension/{id}
     * @param {number} id - Identifiant de l'extension
     * @returns {Extension} 204 - <empty content>
     * @returns {Error} 500 - Une erreur serveur
     */
    .delete(controllerFactory.delete('extension'));


// Resource Not Found
router.use(errorController.resourceNotFound);

module.exports = router;