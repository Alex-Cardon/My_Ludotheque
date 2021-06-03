const client = require('../client');
const CoreModel = require('./coreModel');

class ExtensionModel extends CoreModel {

    /**
     * Nom de la table dans la BDD
     */
    static tableName = 'extension';

    /**
     * Listes des champs de l'entité 
     */
    static fields = [
        'title',
        'year',
        'game_id'
    ];

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj) {
        super(obj);
    }
}

module.exports = ExtensionModel;