require(['react'], function(React) {
	var Navigation = React.createClass({
		render: function() {
			return (<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="navbar-header">
						<span className="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
                        	<span className="sr-only">Toggle navigation</span>
                        	<i className="fa fa-bars"></i>
                        </span>
					</div>
					<div className="collapse navbar-collapse menu" id="main-menu">
						<ul className="menu nav">
							<li><a href="/">首页</a></li>
							<li><a href="/article">文章</a></li>
							<li><a href="/note">随笔</a></li>
							<li><a href="/photo">照片墙</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>)
		}
	});

	React.render(<Navigation />, document.getElementById('navigation'));
})