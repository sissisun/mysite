require(['react', 'widget', 'articleDetail'], function(React, Widget, ArticleDetail) {
	var UrlMixin = {
		getParmasFormUrl: function() {
			var search = location.search.split('?')[1],
				paramArray = search.split(),
				resultObj = {};
console.log(search)
			for(var i=0; i<paramArray.length; i++) {
				var params = paramArray[i].split('=');
				console.log(params)
				if(resultObj[params[0]]) {
					var temp = result[params[0]]; 
						result[params[0]] = [].push(temp); 

				}
				resultObj[params[0]] = params[1];
			}
console.log(resultObj)
			return resultObj;

		}
	}
	var Article = React.createClass({displayName: "Article",
		mixins: [UrlMixin],
		getInitialState: function() {
			return ({articleData: {},
					 widgetDate: []})
		},
		componentDidMount: function() {
			var id = this.getParmasFormUrl('id'),
				params = {id: id};
				console.log(id);
			$.ajax({
				url: '/article/detil',
				type: 'GET',
				dataType: 'json',
				data: params,
				success: function(data) {
					console.log(data)
				}.bind(this),
				error: function() {

				}.bind(this)

			})
		},
		render: function() {
			return (React.createElement("div", {className: "container"}, 
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "col-md-8 main-content"}, 
					React.createElement(ArticleDetail, null)
				), 
				React.createElement("div", {className: "col-md-4 sidebar"}, 
					React.createElement(Widget, null)
				)
			)
		))
		}
	});

	React.render(React.createElement(Article, null), document.getElementById('detail-content'));
})