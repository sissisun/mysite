require(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return (React.createElement("h1", {class: "article-title"}, "文章一"));
		}
	});
	var ArticleContent = React.createClass({displayName: "ArticleContent",
		render: function() {

		}
	})
})