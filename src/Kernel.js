var Terminal = (function() {
	var Canvas = document.createElement("canvas");
	var ctx = Canvas.getContext("2d");
	
	function Terminal() {
		this.bgColor = 0;
		this.fgColor = 0;
		this.font = "monospace";
		this.height = 0;
		this.width = 0;
	}
	
	Terminal.prototype.init = function(w, h) {
		Canvas.height = h;
		Canvas.width = w;
		
		ctx.fillRect(0, 0, w, h);
	};
	
	return Terminal;
});
