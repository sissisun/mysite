var db = require('./modelCore');
var noteSchema = require('../schemas/noteSchema');

var noteModel = db && db.model('noteModel', noteSchema);

module.exports = noteModel;
