(function() {
	function APP(app,id) {
	app.view = new view(id);
		app.model = new model(id);
		app.controller = new controller(app.view, app.model);


	}
	window.slide1 = window.slide1 || {};


	APP(window.slide1,'news-slide1');


})();


