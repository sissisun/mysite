require(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return(React.createElement("h5", {className: "item-title"}))
		}
	});

	var ArticleDescribe = React.createClass({displayName: "ArticleDescribe",
		render: function() {
			return (React.createElement("div", {class: "item-describe"}, 
						React.createElement("p", null)
					))
		}
	});

	var AticleTime = React.createClass({displayName: "AticleTime",
		render: function() {
			return (React.createElement("div", {class: "item-time"}, 
						React.createElement("span", null)
					))
		}
	});

	var ArticleList = React.createClass({displayName: "ArticleList",
		render: function() {
			return (React.createElement("a", {href: "#", class: "list-group-item"}, 
				React.createElement(ArticleTitle, null), 
				React.createElement(ArticleDescribe, null), 
				React.createElement(AticleTime, null)
			))
		}
	})
})