require(['react','thumbnailList'], function(React) {
	var ThumbnailBox = React.createClass({displayName: "ThumbnailBox",
		render: function() {
			return (React.createElement("div", {className: "row pic-container"}, 
				React.createElement("thumbnailList", {data: "this.state.data"})
				))
		}
	})
})