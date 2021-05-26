const validate = {

    /**
     * Cette méthode est une factory de middleware
     * Elle sert à pouvoir récéptionner le schema (injection de dépendance)
     * @param {object} schema 
     * @returns {object} une function de middleware
     */
    queryString: (schema) => {

        return async (request, response, next) => {
            try {
                await schema.validateAsync(request.query);
                next();
            } catch (error) {
                return response.status(400).json({ error: error.details[0].message });
            }
        }

    },

    body: (schema) => {

        return async (request, response, next) => {

            try {
                await schema.validateAsync(request.body);
                next();
            } catch (error) {
                return response.status(400).json({ error: error.details[0].message });
            }
        }

    },

    params: (schema) => {


        return async (request, response, next) => {
            try {
                await schema.validateAsync(request.params);
                next();
            } catch (error) {
                return response.status(400).json({ error: error.details[0].message });
            }
        }

    }

}

module.exports = validate;