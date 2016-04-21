var NavBar = React.creatClass({
	render: function() {
		return (
			React.createElement("div", {class: "navbar navbar-inverse navbar-fixed-top index-navbar"}, 
				React.createElement("div", {class: "container-fluid"}, 
					React.createElement("div", {class: "navbar-header"}, 
						React.createElement("button", {type: "button", class: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#index-nav-bar", "aria-expanded": "false"}, 
							React.createElement("span", {class: "sr-only"}, "Toggle navigation"), 
							React.createElement("span", {class: "icon-bar"}), 
							React.createElement("span", {class: "icon-bar"}), 
							React.createElement("span", {class: "icon-bar"})
						), 
						React.createElement("a", {class: "navbar-brand", href: "#"}, "Blog")
					), 
					React.createElement("div", {class: "collapse navbar-collapse", id: "index-nav-bar"}, 
						React.createElement("ul", {class: "nav navbar-nav"}, 
							React.createElement("li", {class: "active"}, 
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
})