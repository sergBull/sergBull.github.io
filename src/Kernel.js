var Terminal = (function() {
	var key = {};
	
	var private = function() {
		var obj = {};
		
		return function(testkey) {
			if (key === testkey) return obj;
			return undefined;
		}
	};
	
	function Terminal() {
		this._ = private();
		this._(key).Canvas = document.createElement("canvas");
		this._(key).ctx = Canvas.getContext("2d");
		
		this.bgColor = 0;
		this.fgColor = 0;
		this.font = "monospace";
		this.height = 0;
		this.width = 0;
	}
	
	Terminal.prototype.init = function(w, h) {
		this.height = h;
		this.width = w;
		
		var canvas = this._(key).Canvas;
		var ctx = this._(key).ctx;
		
		canvas.height = this.height;
		canvas.width = this.width;
		
		ctx.fillRect(0, 0, this.width, this.height);
	};
	
	return Terminal;
})();
