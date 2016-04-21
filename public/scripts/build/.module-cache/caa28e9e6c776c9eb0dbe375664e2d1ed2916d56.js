require(['react','thumbnailList'], function(React, ThumbnailList) {
	var ThumbnailBox = React.createClass({displayName: "ThumbnailBox",
		getInitialState: function() {
			return {data: [
							{img: '/styles/images/1.jpg', text: '第一张图'},
							{img: '/styles/images/2.jpg', text: '第二张图'},
							{img: '/styles/images/3.jpg', text: '第三张图'},
							{img: '/styles/images/4.jpg', text: '第四张图'},
							{img: '/styles/images/5.jpg', text: '第五张图'},
							{img: '/styles/images/5.jpg', text: '第六张图'}]};
		},

		render: function() {
			return (React.createElement(ThumbnailList, {data: this.state.data}))
		}
	});

	React.render(React.createElement(ThumbnailBox, null), document.getElementById('content'));
})