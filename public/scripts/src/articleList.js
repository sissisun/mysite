require(['react'], function(React) {
	var ArticleTitle = React.createClass({
		render: function() {
			return(<h5 classNameName="item-title">{this.props.title}</h5>)
		}
	});

	var ArticleDescribe = React.createClass({
		render: function() {
			return (<div className="item-describe">
						<p>{this.props.describe}</p>
					</div>)
		}
	});

	var AticleTime = React.createClass({
		render: function() {
			return (<div className="item-time">
						<span>{this.props.time}</span>
					</div>)
		}
	});

	var ArticleItem = React.createClass({
		render: function() {
			var ArticleItemNodes = this.props.data.map(function(articleItem, index) {
				return (<a href="#" className="list-group-item" key={'article' + index}>
					<ArticleTitle title={articleItem.title}></ArticleTitle>
					<ArticleDescribe describe={articleItem.describe}></ArticleDescribe>
					<AticleTime time={articleItem.time}></AticleTime>
				</a>)
			});

			return (<div className="list-group">{ArticleItemNodes}</div>);
			
		}
	});

	var ArticleList = React.createClass({
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
			return (<div className="container">
			
				<ArticleItem data={this.state.data} />
			
		</div>)
		}
	});

	React.render(<ArticleList /> ,document.getElementById('article-content'));
})