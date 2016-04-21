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
	})
})