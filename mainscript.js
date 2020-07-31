window.addEventListener('load', function(){
	
	setTimeout(myFunction, 2000)
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
	document.getElementById("myBtn_1").style.background="#ffcad4";

}
function mySecondFunction(){
	document.getElementById("fact_2").style.visibility="visible";
	document.getElementById("myBtn_2").style.background="#ffcad4";

}
function myThirdFunction(){
	document.getElementById("fact_3").style.visibility="visible";
	document.getElementById("myBtn_3").style.background="#ffcad4";

}

function myForthFunction(){
	document.getElementById("fact_4").style.visibility="visible";
	document.getElementById("myBtn_4").style.background="#ffcad4";

}

function myFifthFunction(){
	document.getElementById("fact_5").style.visibility="visible";
	document.getElementById("myBtn_5").style.background="#ffcad4";

}

function mySixthFunction(){
	document.getElementById("fact_6").style.visibility="visible";
	document.getElementById("myBtn_6").style.background="#ffcad4";

}

function mySeventhFunction(){
	document.getElementById("fact_7").style.visibility="visible";
	document.getElementById("myBtn_7").style.background="#ffcad4";

}


 window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0 )

});
