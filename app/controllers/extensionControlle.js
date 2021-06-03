const ExtensionModel = require('../models/extensionModel');

module.exports = {

    async getById(request, response, next){
        try {
            const extension = await ExtensionModel.findByPk(request.params.id);

            if(!extension){
                return next();
            }

            extension.dataValues.test = 1;

            response.json({ data: extension.dataValues });
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}