require(['react','jquery'], function(React) {
	var ArticleForm = React.creatClass({
		render: function() {
			return (React.createElement("div", null, React.createElement("div", {className: "form-header"}, 
			React.createElement("h2", null, "发表文章")
			), React.createElement("form", {className: "form-horizontal"})))
		}
	});

	React.render(React.createElement(ArticleForm, null), document.getElementById('comment-form'));
})