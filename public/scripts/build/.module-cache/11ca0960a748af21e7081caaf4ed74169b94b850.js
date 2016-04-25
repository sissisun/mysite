require(['react', 'widget', 'articleDetail'], function(React, Widget, ArticleDetial) {
	var Article = React.createClass({displayName: "Article",
		render: function() {
			return (React.createElement("div", {class: "container"}, 
			React.createElement("div", {class: "row"}, 
				React.createElement("div", {class: "col-md-8 main-content"}, 
					React.createElement(ArticleDetial, null)
				), 
				React.createElement("div", {class: "col-md-4 sidebar"}, 
					React.createElement(Widget, null)
				)
			)
		))
		}
	})
})