require(['react'], function(React) {
	var FooterTop =  React.createClass({displayName: "FooterTop",
		render: function() {
			return (React.createElement("div", {class: "row footer-top"}, 
				React.createElement("div", {class: "col-sm-6 col-lg-6"}, 
					React.createElement("h4", null, "个人小站")
				), 
				React.createElement("div", {class: "col-sm-6  col-lg-5 col-lg-offset-1"}, 
					React.createElement("div", {class: "row"}, 
						React.createElement("div", {class: "col-xs-4"}, 
							React.createElement("h4", null, "关于")
						), 
						React.createElement("div", {class: "col-xs-4"}, 
							React.createElement("h4", null, "联系我")
						), 
						React.createElement("div", {class: "col-xs-4"}, 
							React.createElement("h4", null, "其它")
						)
					)
				)
			));
		}
	});

	var FooterBottom = React.createClass({displayName: "FooterBottom",
		render: function() {
			return (React.createElement("div", {class: "row footer-bottom"}, 
						React.createElement("ul", {class: "list-inline text-center"}, 
							React.createElement("li", null, "have a nice day")
						)
					));
		}
	});

	var Footer = React.createClass({displayName: "Footer",
		render: function() {
			return(
					React.createElement("div", {class: "container"}, 
						React.createElement(FooterTop, null), 
						React.createElement("hr", null), 
						React.createElement(FooterBottom, null)
					)
				)
		}
	});

	React.render(React.createElement(Footer, null), document.getElementById('footer'));
})