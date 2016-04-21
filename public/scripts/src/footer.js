require(['react'], function(React) {
	var FooterTop =  React.createClass({
		render: function() {
			return (<div className="row footer-top">
				<div className="col-sm-6 col-lg-6">
					<h4>个人小站</h4>
				</div>
				<div className="col-sm-6  col-lg-5 col-lg-offset-1">
					<div className="row">
						<div className="col-xs-4">
							<h4>关于</h4>
						</div>
						<div className="col-xs-4">
							<h4>联系我</h4>
						</div>
						<div className="col-xs-4">
							<h4>其它</h4>
						</div>
					</div>
				</div>
			</div>);
		}
	});

	var FooterBottom = React.createClass({
		render: function() {
			return (<div className="row footer-bottom">
						<ul className="list-inline text-center">
							<li>have a nice day</li>
						</ul>
					</div>);
		}
	});

	var Footer = React.createClass({
		render: function() {
			return(
					<div className="container">
						<FooterTop />
						<hr />
						<FooterBottom />
					</div>
				)
		}
	});

	React.render(<Footer />, document.getElementById('footer'));
})