require(['react', 'jquery'], function(React) {
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
				return (<a href={"/article/detail?id=" + articleItem._id} className="list-group-item" key={'article' + index}>
					<ArticleTitle title={articleItem.title}></ArticleTitle>
					<ArticleDescribe describe={articleItem.describe}></ArticleDescribe>
					<AticleTime time={articleItem.createTime}></AticleTime>
				</a>)
			});

			return (<div className="list-group">{ArticleItemNodes}</div>);
			
		}
	});

	var ArticleList = React.createClass({
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
			return (<div className="container">
			
				<ArticleItem data={this.state.data} />
			
		</div>)
		}
	});

	React.render(<ArticleList /> ,document.getElementById('article-content'));
})