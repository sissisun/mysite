require(['react', 'jquery'], function(React) {
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
				return (React.createElement("a", {href: "/article/detail?id=" + articleItem._id, className: "list-group-item", key: 'article' + index}, 
					React.createElement(ArticleTitle, {title: articleItem.title}), 
					React.createElement(ArticleDescribe, {describe: articleItem.describe}), 
					React.createElement(AticleTime, {time: articleItem.createTime})
				))
			});

			return (React.createElement("div", {className: "list-group"}, ArticleItemNodes));
			
		}
	});

	var ArticleList = React.createClass({displayName: "ArticleList",
		getInitialState: function() {
			return {data: []}
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
					if(data.success) {
						this.setState({data: data.body});
					}
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