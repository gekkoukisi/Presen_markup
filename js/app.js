(function(){
	console.log("welcome backbone.");
	var obj = new Backbone.Model();

	obj.set({name: "Murata"});
	obj.set({age: 20}:q

	console.log("obj: " + JSON.stringify(obj));
	console.log("obj.name: " + obj.get("name"));

}());
