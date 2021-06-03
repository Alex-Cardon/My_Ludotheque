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
        'publisher_id',
        'author_id',
        'mechanics_id',
        'theme_id'
    ];

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj) {
        super(obj);
    }


    async insert() {

        await super.insert();

        if (this.dataValues.id) {

            for (const author_id of this.dataValues.author_id) {
                await client.query(`INSERT INTO game_has_author (game_id, author_id) VALUES ($1, $2)`,
                    [this.dataValues.id, author_id])
            };

            for (const mechanics_id of this.dataValues.mechanics_id) {
                await client.query(`INSERT INTO game_has_mechanics (game_id, mechanics_id) VALUES ($1, $2)`,
                    [this.dataValues.id, mechanics_id])
            };

            for (const theme_id of this.dataValues.theme_id) {
                await client.query(`INSERT INTO game_has_theme (game_id, theme_id) VALUES ($1, $2)`,
                    [this.dataValues.id, theme_id])
            };
        }
    };

    async update() {
        await super.update();

        if (this.dataValues.id) {

            if (this.dataValues.mechanics_id) {

                await client.query(`DELETE FROM game_has_mechanics WHERE game_id = $1`, [this.dataValues.id]);

                for (const mechanics_id of this.dataValues.mechanics_id) {
                    await client.query(`INSERT INTO game_has_mechanics (game_id, mechanics_id) VALUES ($1, $2)`,
                        [this.dataValues.id, mechanics_id])
                };
            };

            if (this.dataValues.mechanics_id) {
                
                await client.query(`DELETE FROM game_has_author WHERE game_id = $1`, [this.dataValues.id]);

                for (const author_id of this.dataValues.author_id) {
                    await client.query(`INSERT INTO game_has_author (game_id, author_id) VALUES ($1, $2)`,
                        [this.dataValues.id, author_id]);
                };
            };

            if (this.dataValues.mechanics_id) {
                
                await client.query(`DELETE FROM game_has_theme WHERE game_id = $1`, [this.dataValues.id]);

                for (const theme_id of this.dataValues.theme_id) {
                    await client.query(`INSERT INTO game_has_theme (game_id, theme_id) VALUES ($1, $2)`,
                        [this.dataValues.id, theme_id]);
                };
            };
        };
    };

}

module.exports = GameModel;