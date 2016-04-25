require(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return (React.createElement("h1", {class: "article-title"}, "文章一"));
		}
	});

	var ArticleAuthor = React.createClass({displayName: "ArticleAuthor",
		render: function() {
			return (React.createElement("span", null, "作者：", React.createElement("span", {class: "author"}, "sissi"))
								)
		}
	});

	var ArticleTime = React.createClass({displayName: "ArticleTime",
		render: function() {
			return (React.createElement("span", null, "时间:", React.createElement("span", {class: "time"}, "2016-4-23"))
								)
		}
	});

	var ArticleMeta = React.createClass({displayName: "ArticleMeta",
		render: function() {
			return (React.createElement("div", {class: "article-meta"}, 
				React.createElement(ArticleAuthor, null), 
				React.createElement(ArticleTime, null)
			))
		}
	});
	
	var ArticleContent = React.createClass({displayName: "ArticleContent",
		render: function() {
			return (React.createElement("div", {class: "article-content"}, 
							"sudsufh"
						))
		}
	});

	var ArticleDetail = React.createClass({displayName: "ArticleDetail",
		render: function() {
			return (React.createElement("div", {class: "article"}
			))
		}
	})
})