module.exports = {

    resourceNotFound(_, response){
        response.status(404).json({error: `Resource not found`});
    }

}