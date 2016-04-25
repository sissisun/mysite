define(['react'], function(React) {
	var ArticleTitle = React.createClass({
		render: function() {
			return (<h1 class="article-title">{this.props.title}</h1>);
		}
	});

	var ArticleAuthor = React.createClass({
		render: function() {
			return (<span>作者：<span className="author">{this.props.author}</span></span>)
		}
	});

	var ArticleTime = React.createClass({
		render: function() {
			return (<span>时间：<span className="time">{this.props.time}</span></span>)
		}
	});

	var ArticleMeta = React.createClass({
		render: function() {
			return (<div className="article-meta">
				<ArticleAuthor author={this.props.data.author}/>
				<ArticleTime time={this.props.data.createTime}/>
			</div>)
		}
	});

	var ArticleHead = React.createClass({
		render: function() {
			return (<div className="article-head">
				<ArticleTitle title={this.props.data.title}/>
				<ArticleMeta data={this.props.data}/>
			</div>)
		}
	});
	
	var ArticleContent = React.createClass({
		getInitialState: function() {
			return ({content: ''})
		},
		componentWillReceiveProps: function(nextProps) {
			var str = nextProps.content.replace(/\n/g, '<br/>');

			this.setState({
				content: str
			});
		},
		createContent: function(content) {

			return ({__html: this.state.content});
		},
		componentDidMount: function() {
			
		},
		render: function() {
			return (<div className="article-content" dangerouslySetInnerHTML={this.createContent()}>
							
						</div>)
		}
	});

	var ArticleDetail = React.createClass({
		render: function() {
			return (<div className="article">
				<ArticleHead data = {this.props.data}/>
				<ArticleContent content={this.props.data.content}/>
			</div>)
		}
	});

	return ArticleDetail;
})