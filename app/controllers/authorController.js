const AuthorModel = require('../models/authorModel');

module.exports = {

    async getById(request, response, next){
        try {
            const author = await AuthorModel.findByPk(request.params.id);

            if(!author){
                return next();
            }

            author.dataValues.test = 1;

            response.json({ data: author.dataValues });
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}