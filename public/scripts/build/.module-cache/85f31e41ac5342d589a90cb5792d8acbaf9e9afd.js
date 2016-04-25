require(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return(React.createElement("h5", {classNameName: "item-title"}, this.props.title))
		}
	});

	var ArticleDescribe = React.createClass({displayName: "ArticleDescribe",
		render: function() {
			return (React.createElement("div", {className: "item-describe"}, 
						React.createElement("p", null, this.props.describe)
					))
		}
	});

	var AticleTime = React.createClass({displayName: "AticleTime",
		render: function() {
			return (React.createElement("div", {className: "item-time"}, 
						React.createElement("span", null, this.props.time)
					))
		}
	});

	var ArticleItem = React.createClass({displayName: "ArticleItem",
		render: function() {
			var ArticleItemNodes = this.props.data.map(function(articleItem, index) {
				return (React.createElement("a", {href: "#", className: "list-group-item", key: 'article' + index}, 
					React.createElement(ArticleTitle, {title: articleItem.title}), 
					React.createElement(ArticleDescribe, {describe: articleItem.describe}), 
					React.createElement(AticleTime, {time: articleItem.time})
				))
			});

			return (React.createElement("div", {className: "list-group"}, ArticleItemNodes));
			
		}
	});

	var ArticleList = React.createClass({displayName: "ArticleList",
		getInitialState: function() {
			return {data: [
					{'title': '第一篇文章', describe: '这是第一篇文章的描述', time: '2016-4-15 13:10:11'},
					{'title': '第二篇文章', describe: '这是第二篇文章的描述', time: '2016-4-15 13:10:11'},
					{'title': '第三篇文章', describe: '这是第三篇文章的描述', time: '2016-4-15 13:10:11'},
					{'title': '第四篇文章', describe: '这是第四篇文章的描述', time: '2016-4-15 13:10:11'},
					{'title': '第五篇文章', describe: '这是第五篇文章的描述', time: '2016-4-15 13:10:11'},
					{'title': '第六篇文章', describe: '这是第六篇文章的描述', time: '2016-4-15 13:10:11'},
					{'title': '第七篇文章', describe: '这是第七篇文章的描述', time: '2016-4-15 13:10:11'},
				]}
		},
		componentDidMount: function() {
			this.loadArticlesFromServer();
		},
		loadArticlesFromServer: function() {
			$.ajax({
				url: '/article/getArticles',
				type: 'GET',
				dataType: 'json',
				cache: true,
				success: function(data) {
					this.setState(data, data);
				}.bind(this),
				error: function() {

				}.bind(this)
			}) 
		},
		render: function() {
			return (React.createElement("div", {className: "container"}, 
			
				React.createElement(ArticleItem, {data: this.state.data})
			
		))
		}
	});

	React.render(React.createElement(ArticleList, null) ,document.getElementById('article-content'));
})