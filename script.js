window.addEventListener('load', function(){
	
	setTimeout(myFunction, 3000)
 })
 
function myFunction() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

document.getElementById("myBtn_1").addEventListener('click', myFirstFunction);
document.getElementById("myBtn_2").addEventListener('click', mySecondFunction);
document.getElementById("myBtn_3").addEventListener('click', myThirdFunction);
document.getElementById("myBtn_4").addEventListener('click', myForthFunction);
document.getElementById("myBtn_5").addEventListener('click', myFifthFunction);
document.getElementById("myBtn_6").addEventListener('click', mySixthFunction);
document.getElementById("myBtn_7").addEventListener('click', mySeventhFunction);


function myFirstFunction(){
	document.getElementById("fact_1").style.visibility="visible";

}
function mySecondFunction(){
	document.getElementById("fact_2").style.visibility="visible";

}
function myThirdFunction(){
	document.getElementById("fact_3").style.visibility="visible";

}

function myForthFunction(){
	document.getElementById("fact_4").style.visibility="visible";

}

function myFifthFunction(){
	document.getElementById("fact_5").style.visibility="visible";

}

function mySixthFunction(){
	document.getElementById("fact_6").style.visibility="visible";

}

function mySeventhFunction(){
	document.getElementById("fact_7").style.visibility="visible";

}


 window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0 )

});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
