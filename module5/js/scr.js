document.addEventListener("DOMContentLoaded",
	function(event){

	document.querySelector("button")
		.addEventListener("click",function(){

			$ajaxUtil
				.sendGetRequest("/data/name.txt",
					function(request) {
						var name = request.responseText;

				document.querySelector("#content")
				.innerHTML ="<h2>Hello"+self.name + "!";

			});	


		});

	}
);