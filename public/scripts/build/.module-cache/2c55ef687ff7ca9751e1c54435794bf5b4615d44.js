define(['react','thumbnailSize'], function(React, ThumbnailSize) {
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
	return ThumbnailList;
});