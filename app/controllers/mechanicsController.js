const MechanicsModel = require('../models/mechanicsModel');

module.exports = {

    async getById(request, response, next){
        try {
            const mechanics = await MechanicsModel.findByPk(request.params.id);

            if(!mechanics){
                return next();
            }

            mechanics.dataValues.test = 1;

            response.json({ data: mechanics.dataValues });
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}