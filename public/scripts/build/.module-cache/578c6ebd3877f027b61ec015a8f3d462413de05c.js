require(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return (React.createElement("h1", {class: "article-title"}, "文章一"));
		}
	});

/*	var ArticleAuthor = React.createClass({
		render: function() {
			return (<span>作者：</span>
								<span class="author">sissi</span>)
		}
	});*/

/*	var ArticleTime = React.createClass({
		render: function() {
			return (<span>时间</span>
								<span class="time">2016-4-23</span>)
		}
	});*/

	var ArticleHead = React.createClass({displayName: "ArticleHead",
		render: function() {
			
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
			
		}
	})
})