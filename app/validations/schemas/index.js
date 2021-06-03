const {
    insertSchema: authorInsertSchema,
    updateSchema: authorUpdateSchema,
} = require('./authorSchema');

const {
    insertSchema: publisherInsertSchema,
    updateSchema: publisherUpdateSchema,
} = require('./publisherSchema');

const {
    insertSchema: gameInsertSchema,
    updateSchema: gameUpdateSchema,
} = require('./gameSchema');

const {
    insertSchema: mechanicsInsertSchema,
    updateSchema: mechanicsUpdateSchema,
} = require('./mechanicsSchema');

const {
    insertSchema: themeInsertSchema,
    updateSchema: themeUpdateSchema,
} = require('./themeSchema');

module.exports = {
    authorInsertSchema,
    authorUpdateSchema,
    publisherInsertSchema,
    publisherUpdateSchema,
    gameInsertSchema,
    gameUpdateSchema,
    mechanicsInsertSchema,
    mechanicsUpdateSchema,
    themeInsertSchema,
    themeUpdateSchema
};