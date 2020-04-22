/*$(document).ready(function(){
	function googleSignIn(googleUser){
		 // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
	}
});*/

$(document).ready(function(){
	  //페이스북 로그인 버튼 이벤트 -> 로그인 대화 상자 호출
	  $('#facebook').on('click',function(){
		  function statusChangeCallback(response){ // Called with the results from FB.getLoginStatus().
			  console.log('statusChangeCallback');
			  console.log('response : ' + response);
			  if(response.status === 'connected'){ // Logged into your webpage and Facebook.
				  testAPI();
			  } else {
				  document.getElementById('status').innerHTML = '어서오세요';
			  }
		  }
	  });
	
	  
	  // sdk 로드, initialize it
	  window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '{918527135234800}',
	      cookie     : true,
	      xfbml      : true,
	      version    : '{v6.0}'
	    });
	    // 로그인 상태 확인
		  FB.getLoginStatus(function(response) {
		      if(response.status === 'connected'){
		    	  // Logged into webpage & facebook
		    	  getUserData();
		      }else{
		    	  //user is not authorized
		      }
		  });
	  };
//javascript용 facebook sdk 설정
	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "https://connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));
	  
 
	function testAPI(){
		console.log('testAPI worked, welcome!');
		FB.api('/me', function(response){
			console.log(response.name + '으로 페이스북 로그인');
			document.getElementById('login-status').innerHTML = response.name +'님, 안녕하세요.'
			 //window.location.replace("http://" + window.location.hostname 
					 //+ ( (location.port==""||location.port==undefined)?"":":" + location.port) 
					 //+ "/users/index?facebookname="+facebookname);
		});
	}
}); 
	
//	  {
//	      status: 'connected',
//	      authResponse: {
//	          accessToken: '...',
//	          expiresIn:'...',
//	          signedRequest:'...',
//	          userID:'...'
//	      }
//	  }
	 
