var requireConfig = {
	baseUrl: 'public/scripts/',
	removeCombined: true,
	paths: {
		bootstrap: 'libs/public/bootstrap',
		jquery: 'libs/public/jquery-1.11.3',
		react: 'libs/public/react',

		//ReactComponent
		navBar: 'build/navBar',
		banner: 'build/banner',
		thumbnailBox: 'build/thumbnailBox',
		footer: 'build/footer',
		articleList: 'build/articleList',
		articleForm: 'build/articleForm',
		widget: 'build/widget',
		articleDetail: 'build/articleDetail',
		article: 'build/article',
		navigation: 'build/navigation',

		//component
		
		canvas_clock: 'component/private/canvas_clock',
		coverLayer: 'component/private/jquery_layer',
		dialog: 'component/private/jquery_dialog',
		photoWard: 'component/private/jquery_photo_ward',

		//lib
		jqExtend: 'libs/private/jquery_extend'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		react : {
			exports: 'React'
		},
		bootstrap: ['jquery']
	}
};

module.exports = requireConfig;