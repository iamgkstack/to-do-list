// check off specific todo by clicking
$("ul").on("click", "li", function(){
	// // if li is gray
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	//turn it black
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});
	// }

	// else{
	// 	// turn it to gray
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration:"line-through"
	// });
	// }

	//instead of doing all the avobe things 
	//we can do all these things in one line and also it will do same work
	// after declaring one class in css. i have declared class in css fille name is completed
	$(this).toggleClass("completed");
});
// click on x to delete to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();// it is use for stop the bubbling of other element
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});