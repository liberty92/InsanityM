$.fn.formatNumber = function() {
	return this.each(function() {
		var a = parseFloat($(this).text());
		$(this).text(accounting.formatMoney(a));
	})
};

$.fn.formatTime = function() {
	return this.each(function() {
		var a = ($(this).text());
		$(this).text(a.substring(10, 19) + " "+ a.substring(8, 10) + "/"+a.substring(5, 7)+"/"+a.substring(0, 4) );
	})
};

$.fn.formatPercent = function() {
	return this.each(function() {
		var a = parseFloat($(this).text());
		var b = Math.round(a * 100) / 100;
		$(this).text(b +"%");
	})
};

function confirmDelete() {
	var x = 2;
	bootbox.prompt("Hãy nhập OK để xác nhận xóa tài khoản", function(result) {                
		  if (result == "OK") {
			  x = 4;
			  alert(x>3);
		  }
	});
	
	return x>3;
};

accounting.settings = {
	currency : {
		symbol : " đ", // default currency symbol is '$'
		format : "%v%s", // controls output: %s = symbol, %v = value/number (can be object: see below)
		decimal : ".", // decimal point separator
		thousand : ",", // thousands separator
		precision : 0
	// decimal places
	},
	number : {
		precision : 0, // default precision on numbers is 0
		thousand : ",",
		decimal : "."
	}
}; 


$.fn.formatPercent2 = function() {
	return this.each(function() {
		var a = parseFloat($(this).text());
		var b = Math.round(a * 100) ;
		$(this).text(b +"%");
	})
};

$.fn.formatQuantity = function() {
	return this.each(function() {
		var a = parseFloat($(this).text());
		var str = accounting.formatMoney(a);
		$(this).text(str.substring(0, str.length - 2));
	})
};