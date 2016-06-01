require(['react'], function(React) {
	var Navigation = React.createClass({displayName: "Navigation",
		render: function() {
			return (React.createElement("div", {className: "container"}, 
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "col-sm-12"}, 
					React.createElement("div", {className: "navbar-header"}, 
						React.createElement("span", {className: "nav-toggle-button collapsed", "data-toggle": "collapse", "data-target": "#main-menu"}, 
                        	React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                        	React.createElement("i", {className: "fa fa-bars icon-align-justify"})
                        )
					), 
					React.createElement("div", {className: "collapse navbar-collapse menu", id: "main-menu"}, 
						React.createElement("ul", {className: "menu nav"}, 
							React.createElement("li", null, React.createElement("a", {href: "/"}, "首页")), 
							React.createElement("li", null, React.createElement("a", {href: "/article"}, "文章")), 
							React.createElement("li", null, React.createElement("a", {href: "/note"}, "随笔")), 
							React.createElement("li", null, React.createElement("a", {href: "/photo"}, "照片墙"))
						)
					)
				)
			)
		))
		}
	});

	React.render(React.createElement(Navigation, null), document.getElementById('navigation'));
})