const GameModel = require('../models/gameModel');

module.exports = {

    async getById(request, response, next){
        try {
            const game = await GameModel.findByPk(request.params.id);

            if(!game){
                return next();
            }

            game.dataValues.test = 1;

            response.json({ data: game.dataValues });
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}