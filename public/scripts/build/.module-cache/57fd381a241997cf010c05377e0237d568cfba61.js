require(['react'], function(React) {
	var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function() {
			return (React.createElement("div", {className: "thumbnail"}, 
				React.createElement("div", {className: "img-wrapper"}, 
					React.createElement("img", {src: this.props.img, alt: "image"})
				), 
				React.createElement("div", {className: "caption"}, 
					React.createElement("h3", null, this.props.text)
				)
			))
		}
	});

	var ThumbnailSize = React.createClass({displayName: "ThumbnailSize",
		render: function() {
			return (React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				React.createElement(Thumbnail, {img: this.props.img, text: this.props.text})
				))
		}
	});

	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function() {
			var ThumbnailNodes = this.props.data.map(function(thumbnail) {
				return (
					React.createElement(ThumbnailSize, {img: thumbnail.img, text: thumbnail.text})
					)
			});
			return (React.createElement("div", {className: "row pic-container"}, 
				ThumbnailNodes
				))
		}
	});

	var ThumbnailBox = React.createClass({displayName: "ThumbnailBox",
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
			return (React.createElement(ThumbnailList, {data: this.state.data}))
		}
	});

	React.render(React.createElement(ThumbnailBox, null), document.getElementById('content'));
})