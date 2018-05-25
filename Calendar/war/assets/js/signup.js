
	function validate()
	{
		let Email 				= document.getElementById("email").value.trim();
		let Password 			= document.getElementById("password").value.trim();
		let ConfirmPassword		= document.getElementById("confirmPassword").value.trim();
		let Name 				= document.getElementById("name").value.trim();
		
		if((Password!="") && (validateEmail()) && (ConfirmPassword!="") && (Name!=""))
		{
			return true;
		}
		else
		{
			if(  (Email=="") && ( (ConfirmPassword=="") || (Password=="") ) )
			{
				document.getElementById('voice-box').style.display	=	"inline";
				document.getElementById('voice-box').innerHTML	=	'Fields cannot be empty';
				$('#email').focus();
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
			}
			else if((!validateEmail()))
			{
				document.getElementById('voice-box').style.display	=	"inline";
				document.getElementById('voice-box').innerHTML	=	'Invalid Email Address';
				$('#email').focus();
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
				
			}else if(Password=='')
			{
				document.getElementById('voice-box').style.display	="inline";
				document.getElementById('voice-box').innerHTML	='Password is required';
				document.getElementById('password').innerHTML="";
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
			}
			
			else if(Name=='')
			{
				document.getElementById('voice-box').style.display	="inline";
				document.getElementById('voice-box').innerHTML	='Name is required';
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
			}
			else if(ConfirmPassword=='')
			{
				document.getElementById('voice-box').style.display	="inline";
				document.getElementById('voice-box').innerHTML	='Confirm the password';
				document.getElementById('confirmPassword').innerHTML="";
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
			}
			
		return false;
		}
	}
	
	function validateEmail()
	{
	 
	  var regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	  var emailAddress = document.getElementById('email').value;
	  if(regexp.test(emailAddress) == false) 
	  {
	      return false;
	  }
	  else
	  {
		  return true;
	  }
	}
	
	
	document.getElementById("backToIndex").onclick = function(){	
		window.location="/"
	}