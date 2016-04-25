require(['react','jqExtend','jquery'], function(React) {
	var FormSubmitMixin = {
		beforeSubmit: function() {
			
		},
		submitForm: function() {

		},
		getFormValue: function() {
 
		}
	};
	var ArticleForm = React.createClass({
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
				params = $articleForm.getFormValue(true);

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
			return (<div className="container"><div className="form-header">
			<h2>发表文章</h2>
		</div>
		<form id="article-form" className="form-horizontal">
			<div className="form-group">
				<label htmlFor="name-input" className="col-sm-2 control-label">标题</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" id="title" name="title" ref="title" data-null="false" placeholder="标题"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="article-type" className="col-sm-2 control-label">需要代码</label>
				<div className="col-sm-10">
					<select className="form-control" name="needCode" ref="needCode" defaultValue={this.state.need_code} onChange={this.handleCodeSelectChange}>
						<option value="0">否</option>
						<option value="1">是</option>
					</select>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="describe-input" className="col-sm-2 control-label">描述</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" id="describe" name="describe" ref="describe" data-null="false" placeholder="描述"/> 
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="author" className="col-sm-2 control-label">作者</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" id="author" name="author" ref="author" data-null="false" placeholder="作者"/> 
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="content" className="col-sm-2 control-label">内容</label>
				<div className="col-sm-10">
					<textarea className="form-control" id="content" name="content" ref="content" data-null="false" placeholder="请填写内容。。。" rows="7"></textarea>
				</div>
			</div>
			<div className="form-group hide code-wrapper">
				<label htmlFor="code" className="col-sm-2 control-label">代码</label>
				<div className="col-sm-10">
					<textarea className="form-control" id="code" name="code" ref="code" data-null="false" placeholder="请输入代码。。。" rows="7"></textarea>
				</div>
			</div>
			<div className="form-group">
				<div className="col-sm-10 col-sm-offset-2">
					<button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>提交</button>
				</div>
			</div>
			</form></div>)
		}
	});

	React.render(<ArticleForm />, document.getElementById('comment-form'));
})