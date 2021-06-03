const CoreModel = require('./coreModel');

/**
 * @typedef Theme
 * @property {number} id - Identifiant unique
 * @property {string} label - Libellé du thème
 * @property {string} created_at - Date de création de l'éditeur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'éditeur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'éditeur (date ISO 8601)
 */

/**
 * @typedef ThemeInput
 * @property {string} label - Libellé du thème
 */

class ThemeModel extends CoreModel {

    /**
     * Nom de la table dans la BDD
     */
    static tableName = 'theme';

    /**
     * Listes des champs de l'entité 
     */
    static fields = [
        'label'
    ];

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj){
        super(obj);
    }

}

module.exports = ThemeModel;