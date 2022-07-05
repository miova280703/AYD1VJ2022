const SchemaObject = require('schema-object');

var Error = new SchemaObject({
    errorCode: Number,
    errorType: String,
    code: String,
    description: String
});
module.exports = Error;
