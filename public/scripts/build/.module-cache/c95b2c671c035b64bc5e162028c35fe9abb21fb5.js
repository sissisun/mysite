require(['react', 'widget', 'articleDetail'], function(React, widget, articleDetial) {
	var Article = React.createClass({displayName: "Article",
		render: function() {
			return (React.createElement("div", {class: "container"}, 
			React.createElement("div", {class: "row"}, 
				React.createElement("div", {class: "col-md-8 main-content"}, 
					React.createElement("articleDetial", null)
				), 
				React.createElement("div", {class: "col-md-4 sidebar"}, 
					React.createElement("div", {class: "widget"}, 
						React.createElement("h4", {class: "title"}, "链接"), 
						React.createElement("div", {class: "content"})
					)
				)
			)
		))
		}
	})
})