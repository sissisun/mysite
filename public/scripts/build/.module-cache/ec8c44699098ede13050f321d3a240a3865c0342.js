define(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return (React.createElement("h1", {class: "article-title"}, this.props.title));
		}
	});

	var ArticleAuthor = React.createClass({displayName: "ArticleAuthor",
		render: function() {
			return (React.createElement("span", null, "作者：", React.createElement("span", {className: "author"}, this.props.author)))
		}
	});

	var ArticleTime = React.createClass({displayName: "ArticleTime",
		render: function() {
			return (React.createElement("span", null, "时间：", React.createElement("span", {className: "time"}, this.props.time)))
		}
	});

	var ArticleMeta = React.createClass({displayName: "ArticleMeta",
		render: function() {
			return (React.createElement("div", {className: "article-meta"}, 
				React.createElement(ArticleAuthor, {author: this.props.data.author}), 
				React.createElement(ArticleTime, {time: this.props.data.createTime})
			))
		}
	});

	var ArticleHead = React.createClass({displayName: "ArticleHead",
		render: function() {
			return (React.createElement("div", {className: "article-head"}, 
				React.createElement(ArticleTitle, {title: this.props.data.title}), 
				React.createElement(ArticleMeta, {data: this.props.data})
			))
		}
	});
	
	var ArticleContent = React.createClass({displayName: "ArticleContent",
		getInitialState: function() {
			return ({content: ''})
		},
		componentWillReceiveProps: function(nextProps) {
			var str = nextProps.content.replace(/\n/g, '<br/>');
			console.log(str)
			this.setState({
				content: str
			})
		},
		createContent: function() {
			return ({_html: this.props.content})
		},
		componentDidMount: function() {
			
		},
		render: function() {
			return (React.createElement("div", {className: "article-content", dangerouslySetInnerHTML: this.createContent()}
							
						))
		}
	});

	var ArticleDetail = React.createClass({displayName: "ArticleDetail",
		render: function() {
			return (React.createElement("div", {className: "article"}, 
				React.createElement(ArticleHead, {data: this.props.data}), 
				React.createElement(ArticleContent, {content: this.props.data.content})
			))
		}
	});

	return ArticleDetail;
})