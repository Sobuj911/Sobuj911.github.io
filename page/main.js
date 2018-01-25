var myImage = document.querySelector('img');
myImage.onclick = function(){
	
	var mySrc = myImage.getAttribute('src');
	if(mySrc==='images/sobuj.jpg'){
		myImage.setAttribute('src','images/sobuj2.jpg');
	}
	else{
		myImage.setAttribute ('src','images/sobuj.jpg');
	}
	
}
