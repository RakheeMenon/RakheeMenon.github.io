(function(global){

	//Setup a namespace forour utility
	var ajaxUtil={};


	//Return a HTTP requestObject
	function getRequestObject() {
		if(Window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else
		{
			global.alert("Ajax not supported");
		}
	}

//MAkes an Ajax GET request to requestURL

ajaxUtil.sendGetrequest =
function(requestUrl,responseHandler) {
	var request=getRequestObject();
	request.onreadystatechange =
	function()
	{
		handleResponse(request,responseHandler);
	};
	request.open("GET",requestUrl,true);
	request.send(null);
}

function handleResponse(request,requestHandler){
	if((request.readyState ==4) && 
		(request.status == 200)){
		responseHandler(request);
	}
		}
		global.$ajaxUtil=ajaxUtil;
})(window);