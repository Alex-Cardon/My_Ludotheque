const client = require('../client');

class CoreModel {

    /**
     * Nom de la table dans la BDD
     */
    static tableName = null;

    /**
     * Listes des champs de l'entité 
     */
    static fields = null;

    /**
     * Conteneur pour les valeurs des différentes propriété de l'entité
     */
    dataValues = {};

    /**
     * Initialisation/instanciation de la classe
     * @param {object} obj 
     */
    constructor(obj) {
        for (const prop in obj) {
            this.dataValues[prop] = obj[prop];
        }
    };

    /**
     * Setter pour les données de l'entité
     */
    set data(values) {
        for (const field of this.constructor.fields) {
            if (values[field]) {
                this.dataValues[field] = values[field];
            }
        }
    }

    /**
     * Récupération de plusieurs entités
     * @param {object} options objet contenant des parmaètres de filtrage
     * @returns {object[]} Liste d'es 'instances
     */
    static async find(options) {
        const result = await client.query(`SELECT * FROM ${this.tableName} WHERE deleted_at IS NULL`);

        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }

        return instanceList;
    };

    /**
     * Récupération d'une entité grâce à sa clé primaire
     * @param {number} id identifiant de l'entité
     * @returns {object}
     */
    static async findByPk(id) {
        const result = await client.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);// AND deleted_at IS NULL

        if (!result.rows[0]) {
            return null;
        }
        return new this(result.rows[0]);
    };

    /**
     * Ajout d'une entité
     */
    async insert() {

        const preparedQuery = {

            text: `
                SELECT * FROM add_${this.constructor.tableName}($1)
            `,
            values: [this.dataValues]
        };

        const result = await client.query(preparedQuery);
        this.dataValues = {...this.dataValues, ...result.rows[0]};
    };

    /**
     * Mise à jour d'une entité
     */
    async update() {

        const preparedQuery = {

            text: `
                SELECT * FROM update_${this.constructor.tableName}($1)
            `,
            values: [this.dataValues]
        };

        const result = await client.query(preparedQuery);
        this.dataValues = {...this.dataValues, ...result.rows[0]};

    };

    /**
     * Suppression d'une entité
     */
    async delete() {

        const preparedQuery = {

            text: `DELETE FROM "${this.constructor.tableName}" WHERE id = $1`,
            values: [this.dataValues.id]
        };

        await client.query(preparedQuery);

    }

}

module.exports = CoreModel;