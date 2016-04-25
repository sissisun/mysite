require(['react', 'widget', 'articleDetail'], function(React, Widget, ArticleDetail) {
	var Article = React.createClass({displayName: "Article",
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