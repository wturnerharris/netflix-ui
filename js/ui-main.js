var PS3 = {
	netflix: {
		key: "q92pfbhg9smrx435p2rdj6ab"
	},
	move: {
		enter: function (){
			$('.sidebar-ext').toggleClass('on');
		}
	},
	ajax: {
		type: "GET",
		url: "http://api-public.netflix.com/resource_path?parameter1=value&parameter2=value&  … &parameterN=value&oauth_consumer_key=your_key&oauth_nonce=nonce&oauth_signature_method=HMAC-SHA1&oauth_timestamp=timestamp&oauth_version=1.0&oauth_signature=signature"
	}
}

$( function (){
	// DOM READY
	
	$('.ui-main').css({
		height: $(window).height()
	});
	
	$(document).bind( 'keydown', function (e){
		e.preventDefault();
		var i="";
		switch(e.keyCode){
			case 39:
				i="left";
			break;
			case 37:
				i="right";
			break;
			case 38:
				i="up";
			break;
			case 40:
				i="down";
			break;
			case 13:
				i="enter";
			break;
			default: console.log(e.keyCode);
		}
		console.log(i);
		if (i!="") PS3.move[i]();
	});
	
});