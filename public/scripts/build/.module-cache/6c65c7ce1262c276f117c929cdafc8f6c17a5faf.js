require(['react','jqExtend','jquery'], function(React) {
	var FormSubmitMixin = {
		beforeSubmit: function() {
			
		},
		submitForm: function() {

		},
		getFormValue: function() {
 


		},
		htmlEncode : function(s) {
			var div = document.createElement('div');
			div.appendChild(document.createTextNode(s));
			return div.innerHTML;
		}
	};
	var ArticleForm = React.createClass({displayName: "ArticleForm",
		mixins: [FormSubmitMixin],
		getInitialState: function() {
			return {need_code: "0"};
		},
		handleCodeSelectChange: function(event) {
			if(event.target.value == "0") {
				$('.code-wrapper').addClass('hide');
			} else {
				$('.code-wrapper').removeClass('hide');
			}
		},
		handleSubmit: function() {
			var $articleForm = $('#article-form'),
				params = $articleForm.getFormValue();
console.log(htmlEncode($('#content').get(0).value))
console.log($('#content').val())
			if(!$articleForm.checkNullInput()) {
				alert('请填写未完成的！');
				return;
			}
			$.ajax({
				url: '/note/submit',
				type: 'POST',
				dataType: 'json',
				data: params,
				success: function(data) {
					if(data.success) {
						alert('提交成功！');
					}
				}.bind(this),
				error: function() {
					alert('提交错误');
				}.bind(this),
				complete: function() {
					this.resetForm();
				}.bind(this)
			})

		},
		resetForm: function() {
			var $articleForm = $('#article-form');
			$articleForm.get(0).reset();
			this.setState({need_code: "0"});
		},
		render: function() {
			return (React.createElement("div", {className: "container"}, React.createElement("div", {className: "form-header"}, 
			React.createElement("h2", null, "发表文章")
		), 
		React.createElement("form", {id: "article-form", className: "form-horizontal"}, 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "name-input", className: "col-sm-2 control-label"}, "标题"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("input", {type: "text", className: "form-control", id: "title", name: "title", ref: "title", "data-null": "false", placeholder: "标题"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "article-type", className: "col-sm-2 control-label"}, "需要代码"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("select", {className: "form-control", name: "needCode", ref: "needCode", defaultValue: this.state.need_code, onChange: this.handleCodeSelectChange}, 
						React.createElement("option", {value: "0"}, "否"), 
						React.createElement("option", {value: "1"}, "是")
					)
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "describe-input", className: "col-sm-2 control-label"}, "描述"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("input", {type: "text", className: "form-control", id: "describe", name: "describe", ref: "describe", "data-null": "false", placeholder: "描述"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "author", className: "col-sm-2 control-label"}, "作者"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("input", {type: "text", className: "form-control", id: "author", name: "author", ref: "author", "data-null": "false", placeholder: "作者"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "content", className: "col-sm-2 control-label"}, "内容"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("textarea", {className: "form-control", id: "content", name: "content", ref: "content", "data-null": "false", placeholder: "请填写内容。。。", rows: "7"})
				)
			), 
			React.createElement("div", {className: "form-group hide code-wrapper"}, 
				React.createElement("label", {htmlFor: "code", className: "col-sm-2 control-label"}, "代码"), 
				React.createElement("div", {className: "col-sm-10"}, 
					React.createElement("textarea", {className: "form-control", id: "code", name: "code", ref: "code", "data-null": "false", placeholder: "请输入代码。。。", rows: "7"})
				)
			), 
			React.createElement("div", {className: "form-group"}, 
				React.createElement("div", {className: "col-sm-10 col-sm-offset-2"}, 
					React.createElement("button", {type: "button", className: "btn btn-primary btn-lg btn-block", onClick: this.handleSubmit}, "提交")
				)
			)
			)))
		}
	});

	React.render(React.createElement(ArticleForm, null), document.getElementById('comment-form'));
})