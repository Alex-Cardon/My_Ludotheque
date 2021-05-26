const CoreModel = require('./coreModel');

/**
 * @typedef Author
 * @property {number} id - Identifiant unique
 * @property {string} firstname - Prénom de l'auteur
 * @property {string} lastname - Nom de famille de l'auteur
 * @property {string} country_iso_2 - Pays d'origine de l'auteur (ISO 3166 Alpha-2)
 * @property {string} birthdate - Date de naissance de l'auteur (YYYY-MM-DD)
 * @property {string} deathdate - Date de mort de l'auteur (YYYY-MM-DD)
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef AuthorInput
 * @property {string} firstname - Prénom de l'auteur
 * @property {string} lastname - Nom de famille de l'auteur
 * @property {string} country_iso_2 - Pays d'origine de l'auteur (ISO 3166 Alpha-2)
 * @property {string} birthdate - Date de naissance de l'auteur (YYYY-MM-DD)
 * @property {string} deathdate - Date de mort de l'auteur (YYYY-MM-DD)
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
        'lastname',
        'country_iso_2',
        'birthdate',
        'deathdate'
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
    //Dans le cas d'un API REST mais pas RESTful, on peut si on le veut surcharger les méthodes du coreModel afin d'y ajouter des jointures.
    //On peut même rendre les méthodes du coreModel configurable pour faire elle-même les joitures. On enverrai les table de jointure en options de la méthode.
    // On pourrait ici décider de transformer notre entité book en vue qui inclurait les données des auteurs sou forme de tableau (oui on avoir des tableaux dans des champs en postgres)
    /*
     static async findByPk(id) {
        const result = await client.query(`
        SELECT * FROM ${this.tableName} 
        JOIN book_as_author ON book_as_author.author_id = author.id
        JOIN book ON book_as_author.book_id = book.id
        WHERE ${this.tableName}.id = $1 AND deleted_at IS NULL`, [id]);

        if (!result.rows[0]) {
            return null;
        }
        return new this(result.rows[0]);
    };
    */

}

module.exports = AuthorModel;