const CoreModel = require('./coreModel');

/**
 * @typedef Author
 * @property {number} id - Identifiant unique
 * @property {string} firstname - Prénom de l'auteur
 * @property {string} lastname - Nom de famille de l'auteur
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef AuthorInput
 * @property {string} firstname - Prénom de l'auteur
 * @property {string} lastname - Nom de famille de l'auteur
 */

class AuthorModel extends CoreModel {

    /**
     * Nom de la table dans la BDD
     */
    static tableName = 'author';

    /**
     * Listes des champs de l'entité 
     */
    static fields = [
        'firstname',
        'lastname'
    ];

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj){
        super(obj);
    }

    /**
     * Getter permettant de récupérer le nom complet d'un auteur
     */
    get fullname(){
        this.dataValues.firstname + ' ' + this.dataValues.lastname;
    }

    /**
     * Récupération d'une entité grâce à sa clé primaire
     * @param {number} id identifiant de l'entité
     * @returns {object}
     */


}

module.exports = AuthorModel;