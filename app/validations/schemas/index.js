const { 
    insertSchema: authorInsertSchema, 
    updateSchema: authorUpdateSchema,
}  = require('./authorSchema');

const { 
    insertSchema: publisherInsertSchema, 
    updateSchema: publisherUpdateSchema,
}  = require('./publisherSchema');

module.exports = { authorInsertSchema, authorUpdateSchema, publisherInsertSchema, publisherUpdateSchema };