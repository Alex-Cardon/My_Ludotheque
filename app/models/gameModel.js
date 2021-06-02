const client = require('../client');
const CoreModel = require('./coreModel');

class GameModel extends CoreModel {

    /**
         * Nom de la table dans la BDD
         */
    static tableName = 'game';

    /**
     * Listes des champs de l'entité 
     */
    static fields = [
        'title',
        'locale',
        'year',
        'age_min',
        'duration',
        'player_num_min',
        'player_num_max',
        'cover',
        'publisher_id'
    ];

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj) {
        super(obj);
    }


    async insert() {

        const author_id = this.dataValues.author_id;
        const mechanics_id = this.dataValues.mechanics_id;
        const theme_id = this.dataValues.theme_id;

        await super.insert();

        if (this.dataValues.id) {

            await client.query(`
                INSERT INTO "game_has_author" (game_id, author_id)
                VALUES ($1, $2)`), [this.dataValues.id, author_id]
            ;

            await client.query(`
                INSERT INTO "game_has_mechanics" (game_id, mechanics_id)
                VALUES ($1, $2)`), [this.dataValues.id, mechanics_id]
            ;

            await client.query(`
                INSERT INTO "game_has_theme" (game_id, theme_id)
                VALUES ($1, $2)`), [this.dataValues.id, theme_id]
            ;
        }
    }

}

module.exports = GameModel;