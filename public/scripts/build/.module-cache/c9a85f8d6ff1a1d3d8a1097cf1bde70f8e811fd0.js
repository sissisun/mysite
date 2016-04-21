define(['react','thumbnail'], function(React, Thumbnail) {
	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function() {
			var ThumbnailNodes = this.props.data.map(function(thumbnail) {
				return (
					React.createElement(Thumbnail, {img: thumbnail.img, text: thumbnail.text})
					)
			});
			return (React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				ThumbnailNodes
				))
		}
	});
	return ThumbnailList;
});