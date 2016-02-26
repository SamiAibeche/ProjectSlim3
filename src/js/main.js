$(document).ready(function(){
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

	$('.next').click(function(){
		var locName = window.location.pathname;
		var name = locName[(locName.length-1)];
		console.log(name);

		switch(name) {
		    case "/":
		    	window.location.href = 'http://localhost:81/ProjectSlim3/page2';
		    	break;
		    case "2":
		    	window.location.href = 'http://localhost:81/ProjectSlim3/page3';
		        break;
			case "3":
		      	return false;
		        break;
		    default:
		        return false;
		}
	});
	$('.previous').click(function(){
		var locName = window.location.pathname;
		var name = locName[(locName.length-1)];

		switch(name) {
		    case "/":
		        return false;
		        break;
		    case "2":
		        window.location.href = 'http://localhost:81/ProjectSlim3/';
		        break;
			case "3":
		      window.location.href = 'http://localhost:81/ProjectSlim3/page2';
		        break;
		    default:
		        return false;
		}
	});

});