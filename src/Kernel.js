var Terminal = function() {
	var key = {};
	
	var private = function() {
		var obj = {};
		
		return function(testkey) {
			if (key === testkey) return obj;
			return undefined;
		}
	};
	
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
};
