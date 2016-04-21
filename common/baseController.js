var gu = require('guthrie');
var baseController = new gu.controller.create();

baseController.on('actionExecuting', function(req,res,next) {

next();
});

module.exports = baseController;