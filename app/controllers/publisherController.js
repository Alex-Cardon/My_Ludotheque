const PublisherModel = require('../models/publisherModel');

module.exports = {

    async getById(request, response, next){
        try {
            const publisher = await PublisherModel.findByPk(request.params.id);

            if(!publisher){
                return next();
            }

            publisher.dataValues.test = 1;

            response.json({ data: publisher.dataValues });
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}