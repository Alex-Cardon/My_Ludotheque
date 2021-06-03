const CoreModel = require('./coreModel');

/**
 * @typedef Mechanics
 * @property {number} id - Identifiant unique
 * @property {string} label - Libéllé de la mécanique
 * @property {string} created_at - Date de création de l'éditeur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'éditeur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'éditeur (date ISO 8601)
 */

/**
 * @typedef MechanicsInput
 * @property {string} label - Libéllé de la mécanique
 */

class MechanicsModel extends CoreModel {

    /**
     * Nom de la table dans la BDD
     */
    static tableName = 'mechanics';

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

module.exports = MechanicsModel;