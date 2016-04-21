require(['react','jquery'], function(React) {
	var NavBar = React.createClass({displayName: "NavBar",
		render: function() {
			return (
				React.createElement("div", {className: "navbar navbar-inverse navbar-fixed-top index-navbar"}, 
					React.createElement("div", {className: "container-fluid"}, 
						React.createElement("div", {className: "navbar-header"}, 
							React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#index-nav-bar", "aria-expanded": "false"}, 
								React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
								React.createElement("span", {className: "icon-bar"}), 
								React.createElement("span", {className: "icon-bar"}), 
								React.createElement("span", {className: "icon-bar"})
							), 
							React.createElement("a", {className: "navbar-brand", href: "#"}, "Blog")
						), 
						React.createElement("div", {className: "collapse navbar-collapse", id: "index-nav-bar"}, 
							React.createElement("ul", {className: "nav navbar-nav"}, 
								React.createElement("li", {className: "active"}, 
									React.createElement("a", {href: "#"}, "主页")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "#"}, "文章")
								), 
								React.createElement("li", null, 		
									React.createElement("a", {href: "#"}, "随笔")
								), 
								React.createElement("li", null, 		
									React.createElement("a", {href: "#"}, "照片墙")
								)
							)
						)
					)
				)
			)
		}
	});
	React.render(
		React.createElement(NavBar, null), document.getElementById('nav-bar'));
});