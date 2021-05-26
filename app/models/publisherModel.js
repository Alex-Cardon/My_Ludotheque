const CoreModel = require('./coreModel');

/**
 * @typedef Publisher
 * @property {number} id - Identifiant unique
 * @property {string} name - Nom de l'éditeur
 * @property {string} country_iso_2 - Pays d'origine de l'éditeur(YYYY-MM-DD)
 * @property {string} created_at - Date de création de l'éditeur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'éditeur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'éditeur (date ISO 8601)
 */

/**
 * @typedef PublisherInput
 * @property {string} name - Nom de l'éditeur
 * @property {string} country_iso_2 - Pays d'origine de l'éditeur 
 */

class PublisherModel extends CoreModel {

    /**
     * Nom de la table dans la BDD
     */
    static tableName = 'publisher';

    /**
     * Listes des champs de l'entité 
     */
    static fields = [
        'name',
        'country_iso_2'
    ];

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj){
        super(obj);
    }

}

module.exports = PublisherModel;