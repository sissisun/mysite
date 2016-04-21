require(['react'], function(React) {
	var ThumbnailBox = React.createClass({
		getInitialState: function() {
			return {data: [
							{img: '/styles/images/1.jpg', text: '第一张图'},
							{img: '/styles/images/2.jpg', text: '第二张图'},
							{img: '/styles/images/3.jpg', text: '第三张图'},
							{img: '/styles/images/4.jpg', text: '第四张图'},
							{img: '/styles/images/5.jpg', text: '第五张图'},
							{img: '/styles/images/6.jpg', text: '第六张图'}]};
		},

		render: function() {
			return (<ThumbnailList data={this.state.data} />)
		}
	});

	var ThumbnailList = React.createClass({
		render: function() {
			var ThumbnailNodes = this.props.data.map(function(thumbnail, index) {
				return (
					<ThumbnailSize key={'img' + index} img = {thumbnail.img} text = {thumbnail.text} />
					)
			});
			return (<div className="row pic-container">
				{ThumbnailNodes}
				</div>)
		}
	});

	var ThumbnailSize = React.createClass({
		render: function() {
			return (<div className="col-sm-6 col-md-4">
				<Thumbnail img = {this.props.img} text = {this.props.text}/>
				</div>)
		}
	});

	var Thumbnail = React.createClass({
		render: function() {
			return (<div className="thumbnail">
				<div className="img-wrapper">
					<img src={this.props.img} alt="image"/>
				</div>
				<div className="caption">
					<h3>{this.props.text}</h3>
				</div>
			</div>)
		}
	});

	React.render(<ThumbnailBox />, document.getElementById('content'));
})