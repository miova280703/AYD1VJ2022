const SchemaObject = require('schema-object');

var Student = new SchemaObject({
    carnet: Number,
    name: String
});
module.exports = Student;