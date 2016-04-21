require(['react','jquery'], function(React) {
	var ArticleForm = React.createClass({displayName: "ArticleForm",
		getInitialState: function() {

		},
		render: function() {
			return (React.createElement("div", {className: "container"}, React.createElement("div", {className: "form-header"}, 
			React.createElement("h2", null, "发表文章")
		), 
		React.createElement("form", {className: "form-horizontal"}, 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "name-input", className: "col-sm-2 control-label"}, "标题"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("input", {type: "input", className: "form-control", id: "name-input", placeholder: "标题"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "article-type", className: "col-sm-2 control-label"}, "需要代码"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("select", {className: "form-control", defaultValue: "0"}, 
						React.createElement("option", {value: "0"}, "否"), 
						React.createElement("option", {value: "1"}, "是")
					)
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "describe-input", className: "col-sm-2 control-label"}, "描述"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("input", {type: "input", className: "form-control", id: "describe-input", placeholder: "描述"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "author", className: "col-sm-2 control-label"}, "作者"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("input", {type: "input", className: "form-control", id: "author", placeholder: "作者"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "content", className: "col-sm-2 control-label"}, "内容"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("textarea", {className: "form-control", id: "content", placeholder: "请填写内容。。。", rows: "7"})
				)
			), 
			React.createElement("div", {className: "form-group hide"}, 
				React.createElement("label", {htmlFor: "code", className: "col-sm-2 control-label"}, "代码"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("textarea", {className: "form-control", id: "code", placeholder: "请输入代码。。。", rows: "7"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("div", {className: "col-sm-10 col-sm-offset-2"}, 
					React.createElement("button", {type: "button", className: "btn btn-primary btn-lg btn-block"}, "提交")
				)
				
			)
			)))
		}
	});

	React.render(React.createElement(ArticleForm, null), document.getElementById('comment-form'));
})