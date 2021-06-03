const ThemeModel = require('../models/themeModel');

module.exports = {

    async getById(request, response, next){
        try {
            const theme = await ThemeModel.findByPk(request.params.id);

            if(!theme){
                return next();
            }

            theme.dataValues.test = 1;

            response.json({ data: theme.dataValues });
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}