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
		this._(key).ctx = this._(key).Canvas.getContext("2d");
		
		document.body.appendChild(this._(key).Canvas);
		
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
	
	Terminal.prototype.setBackgroundColor = function(color) {
		if (typeof color === "Number") {
			var r = (color >> 16) & 0xFF;
			var g = (color >> 8) & 0xFF;
			var b = color & 0xFF;
			
			this._(key).ctx.fillStyle = "rgb(" + [ r, g, b ].join(", ") + ")";
		} else {
			if (typeof color === "Object") {
				this._(key).ctx.fillStyle = "rgb(" + [ color.r, color.g, color.b ].join(", ") + ")";
			} else {
				console.log("Wrong color: use HexadecimalInteger (0xFF00FF) or Vec3 (255, 255, 255)");
			}
		}
		
		this._(key).ctx.fillRect(0, 0, this.width, this.height);
	};
	
	return Terminal;
})();
