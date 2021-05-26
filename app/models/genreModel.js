const CoreModel = require('./coreModel');

class GenreModel extends CoreModel {

    static tableName = 'genre';

    constructor(){
        super();
    }

}

module.exports = GenreModel;