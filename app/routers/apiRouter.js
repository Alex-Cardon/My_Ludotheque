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
     * @returns {Author} 200 - L'auteur créer
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
     * @returns {Author.model} 200 - L'auteur créer
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
     * @returns {Author} 200 - L'éditeur créer
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
     * @returns {Publisher.model} 200 - L'éditeur créer
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
     * @returns {Author[]} 200 - La liste des jeux
     * @returns {Error} 500 - Une erreur serveur
     */
    .get(controllerFactory.getAll('game'))
    /**
     * Ajouter un auteur
     * @route POST /authors
     * @param {AuthorInput.model} Author.body.required - Un objet contenant les informations d'un auteur
     * @returns {Author} 200 - L'auteur créer
     * @returns {Error} 500 - Auteur déjà présent dans la BDD
     */
    .post(controllerFactory.add('book'));





// Resource Not Found
router.use(errorController.resourceNotFound);

module.exports = router;