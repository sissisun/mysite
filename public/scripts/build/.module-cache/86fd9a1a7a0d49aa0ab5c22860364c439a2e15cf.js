require(['react'], function(React) {
	var ArticleTitle = React.createClass({displayName: "ArticleTitle",
		render: function() {
			return(React.createElement("h5", {className: "item-title"}))
		}
	});

	var ArticleDescribe = React.createClass({displayName: "ArticleDescribe",
		render: function() {
			return (React.createElement("div", {class: "item-describe"}, 
						React.createElement("p", null)
					))
		}
	});

	var AticleTime = React.createClass({displayName: "AticleTime",
		render: function() {
			return (React.createElement("div", {class: "item-time"}, 
						React.createElement("span", null)
					))
		}
	});

	var ArticleItem = React.createClass({displayName: "ArticleItem",
		render: function() {
			var ArticleItemNodes = this.props.data.map(function(articleItem) {
				return (React.createElement("a", {href: "#", class: "list-group-item"}, 
					React.createElement(ArticleTitle, null, articleItem.title), 
					React.createElement(ArticleDescribe, null, articleItem.describe), 
					React.createElement(AticleTime, null, articleItem.time)
				))
			});

			return {ArticleItemNodes};
			
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
		render: function() {
			return (React.createElement("div", {class: "container"}, 
			React.createElement("div", {class: "list-group"}, 
				React.createElement(ArticleItem, {data: this.state.data})
			)
		))
		}
	});

	React.render(React.createElement(ArticleList, null) ,document.getElementById('article-content'));
})