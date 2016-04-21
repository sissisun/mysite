require(['react'], function(React) {
	var Banner = React.createClass({
		render: function() {
			return (<div className="jumbotron bg-banner"></div>)
		}
	});

	React.render(<Banner />, document.getElementById('banner'));
});