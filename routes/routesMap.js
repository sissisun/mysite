var initRoutesMap = function(router) {
	router.mapRoute('/', {
		controller: 'home',
		action: 'index'
	});

	router.mapRoute('/:controller/:action?/:id?');

};

module.exports = initRoutesMap;