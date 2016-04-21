define(['react'], function(React) {
	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
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
	return Thumbnail;
});