define(['react'], function(React) {
	var Widget = React.createClass({
		render: function() {
			return (<div className="widget">
						<h4 className="title">链接</h4>
						<div className="content"></div>
					</div>)
		}
	});

	return Widget;
})