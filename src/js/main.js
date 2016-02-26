$(document).ready(function(){
	$(document).foundation();
	$(".cel").click(function(){
		var id= this.id[3];

			//AJAX - GET Method
			$.get("http://localhost:81/projectSlim3/"+id, function( data ) {

				if(data !== "unvalid"){
					var dataObject = JSON.parse(data);
					for(var i=0; i<(dataObject.length); i++){
						$("#firstModalTitle").text(dataObject[i].name);
						$("#grapes").text(" - Grapes : "+dataObject[i].grapes);
						$("#country").text(" - From : "+dataObject[i].country+" - "+dataObject[i].region);
						$("#content").text(dataObject[i].description);
					}
				}
			})
	});



});