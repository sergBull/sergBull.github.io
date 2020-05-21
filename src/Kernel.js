var Terminal = (function() {
	var Canvas = document.createElement("canvas");
	var ctx = Canvas.getContext("2d");
	
	document.body.appendChild(Canvas);
	
	function Terminal() {
		this.bgColor = 0;
		this.fgColor = 0;
		this.font = "monospace";
		this.height = 0;
		this.width = 0;
	}
	
	Terminal.prototype.init = function(w, h) {
		alert(w * h);
	};
	
	return Terminal;
});
