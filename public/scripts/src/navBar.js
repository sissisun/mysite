require(['react'], function(React) {
	var NavBar = React.createClass({
		render: function() {
			return (
				<div className="navbar navbar-inverse navbar-fixed-top index-navbar">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#index-nav-bar" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Blog</a>
						</div>
						<div className="collapse navbar-collapse" id="index-nav-bar">
							<ul className="nav navbar-nav header-nav">
								<li>
									<a href="/">主页</a>
								</li>
								<li>
									<a href="/article">文章</a>
								</li>
								<li>		
									<a href="/note">随笔</a>
								</li>
								<li>		
									<a href="/photo">照片墙</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)
		}
	});
	React.render(
		<NavBar />, document.getElementById('nav-bar'));
});