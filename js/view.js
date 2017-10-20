(function(){

	function view(id){
		var _t = this;
		this.cnt_id = id;
		this.cnt_id.innerHTML = "";
		this.cnt = document.getElementById(id);
		this.elements = {
			BTNLEFT : _t.cnt.querySelector(".c-left"),
			BTNRIGHT : _t.cnt.querySelector(".c-right")
		};
	}		
	view.prototype.bind = function(event,callback) {
		var _t=this;
		switch(event) {
			case "left":
				this.elements.BTNLEFT.addEventListener('click', function(event) {
					_t=this;
					callback(event); 
				});
			break;
			case "right":
				this.elements.BTNRIGHT.addEventListener('click', function(event) {
					_t=this;
					callback(event); 
				});
			break; 
		}
	};
	
	view.prototype.UpdateLeft = function(count){
		console.log(count);
		var _t=this;
		$("#"+this.cnt_id+" ul").css('left', count+'px');
	}
	view.prototype.getId = function(){
		var _t=this;
		return _t.cnt_id;
	}
	view.prototype.writeHtml = function(htmlcnt){
		var _t=this;
		$("#"+ this.cnt_id).find("ul").html(htmlcnt);
	}

window.view = view;

})();