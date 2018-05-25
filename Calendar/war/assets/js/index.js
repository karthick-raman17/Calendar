function googleAuth(){
	
		let OAuthURL;
		let clientID;
		let redirectURL;
		let errorURL;
		let host = 'http://' + window.location.host;
		let scope;
		let approval_prompt;

		if(host.indexOf('1-dot-live-calendar-application') != -1)
		{
			OAuthURL = 'https://accounts.google.com/o/oauth2/auth';
			clientID = '1010962435834-4qg0910ud5r2hfbhqr9g3005ese3qcbc.apps.googleusercontent.com';
			redirectURL = 'http://1-dot-live-calendar-application.appspot.com/oauth2callback';
			errorURL ='http://1-dot-live-calendar-application.appspot.com/oauth2callbackError';
			}
		else{
			OAuthURL = 'https://accounts.google.com/o/oauth2/auth';
			clientID = '1010962435834-4qg0910ud5r2hfbhqr9g3005ese3qcbc.apps.googleusercontent.com';
			redirectURL = host+'/oauth2callback';
			errorURL = host+'/oauth2callbackError';
		}
	
		let signInWithGoogle = OAuthURL+'?scope=email&redirect_uri='+redirectURL+'&response_type=code&client_id='+clientID+'&approval_prompt=force';
		window.location = signInWithGoogle;
		
//		window.location="https://accounts.google.com/o/oauth2/auth?scope=email&redirect_uri=http://1-dot-live-calendar-application.appspot.com/oauth2callback&response_type=code&client_id=1010962435834-4qg0910ud5r2hfbhqr9g3005ese3qcbc.apps.googleusercontent.com&approval_prompt=force"
	}
	
	
	function check()
	{
		let loginEmail 		= document.getElementById("username").value.trim();
		let loginPassword = document.getElementById("password").value.trim();
		console.log(loginEmail);
		if((loginEmail!="Email Address")&&(loginPassword!="") &&(validateEmail()))
		{
			return true;
		}
		else
		{
			if( ( (loginEmail=="Email Address") || (loginEmail=="") )&& ( (loginPassword=="") ||(loginPassword=="") ) )
			{
				document.getElementById('voice-box').style.display	=	"inline";
				document.getElementById('voice-box').innerHTML	=	'Fields cannot be empty';
				$('#username').focus();
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
			}
			else if((!validateEmail()))
			{
				document.getElementById('voice-box').style.display	=	"inline";
				document.getElementById('voice-box').innerHTML	=	'Invalid Email Address';
				$('#username').focus();
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
				
			}else if(loginPassword=='')
			{
				document.getElementById('voice-box').style.display	="inline";
				document.getElementById('voice-box').innerHTML	='Password is required';
				document.getElementById('password').value="";
				setTimeout(function(){  document.getElementById('voice-box').style.display	=	"none"; },3000);
			}
		 
		return false;
		}
	}
	
	function validateEmail()
	{
	 
	  var regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	  var address = document.getElementById('username').value;
	  if(regexp.test(address) == false) 
	  {
	      return false;
	  }
	  else
	  {
		  return true;
	  }
	}
	
	document.getElementById("signupButton").onclick = function(){
		window.location = "/signup_page"
	}
	