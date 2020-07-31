window.addEventListener('load', function(){
	
	setTimeout(myFunction, 3000)
 })
 
function myFunction() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

 window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0 )

});

