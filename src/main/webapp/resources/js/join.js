/* 공백 체크 정규식 */
	var emp = /\s/g;
	/* 아이디 공백 체크 정규식 */
	var idEmp = /^[a-z0-9][a-z0-9_\-]{4,19}$/;
	/* 비밀번호 공백 체크 정규식 */
	var pwEmp = /^[A-Za-z0-9]{4,12}$/;
	/* 이름 정규식 */
	var firstnameEmp = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
	/* 성 정규식*/
	var lastnameEmp = /^[가-힣]{1,2}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;; 
	/*  이메일 정규식*/
	var mailEmp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	/* 휴대폰 번호 정규식 */
	var phoneEmp = (/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
	// 주번 정규식
	var jumin = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/g;
	
	//주번 체크 되있을시
	$('#ssn').ready(function(){
		var jumin = $('#ssn');
		
		//아이디 중복확인
		$('#userid').blur(function(){
			if($('#userid').val()==''){
				$('#id_check').text('아이디를 입력하세요.').css('color','red');
			}
			else if(idEmp.test($('#userid').val())!=true){
				$('#id_check').text('4~12자의 영문, 숫자만 가능합니다.').css('color','red');
			}else if($('#userid').val()!=''){
				var userid = $('#userid').val();
				$.ajax({
					async : true,
					type : 'post',
					data : userid,
					url : 'idcheck.do',
					dataType : 'json',
					contentType : 'application/json; charset=UTF-8',
					success : function(data){
						if(data.cnt>0){
							$('#id_check').text('중복된 아이디입니다.').css('color','red');
							$('#usercheck').attr("disabled",true);
						}else{
							if(idEmp.test(userid)){
								$('#id_check').text('사용 가능한 아이디입니다.').css('color','blue');
								$('#usercheck').attr("disabled", false);
							}else if(userid==''){
								$('#id_check').text('아이디를 입력해주세요.').css('color','red');
								$('#usercheck').attr("disabled",true);
							}else{
								$('#id_check').text('아이디는 숫자또는 소문자 4~12자리만 가능합니다. ').css('color','red');
								$('#usercheck').attr("disabled", true);
							}
						}
					}
					
				}); //ajax
			} 
		}); //blur
		// 회원가입 요청 폼 전송되었을때
		$('form').on('submit',function(){
			var inval_Arr = new Array(6).fill(false);
			if(idEmp.test($('#userid').val())){
				inval_Arr[0] = true;
			}else {
				inval_Arr[0]=false;
				alert('아이디를 확인하세요.');
				$('#userid').focus();
				return false;
			}
			//비밀번호가 같은 경우 & 비밀번호 정규식
			if(($('#userpw').val()==($('#userpw2').val()))
				&& pwEmp.test($('#userpw').val())){
				inval_Arr[1] = true;
				
			//아니면	
			}else {
				inval_Arr[1]=false;
				alert('비밀번호를 확인하세요.');
				$('#userpw').focus();
				return false;
			}
			// 성 입력 확인 
			if(lastnameEmp.test($('#lastname').val())){
				inval_Arr[2] = true;
			}else {
				inval_Arr[2]=false;
				alert('성을 확인하세요.');
				$('#lastame').focus();
				return false;
			}
			//이름 입력 확인
			if(firstnameEmp.test($('#firstname').val())){
				inval_Arr[3] = true;
			}else {
				inval_Arr[3]=false;
				alert('이름을 확인하세요.');
				$('#firstame').focus();
				return false;
			}
			
			//Email 입력확인
			if(mailEmp.test($('#email').val())){
				inval_Arr[4] = true;
			}else{
				inval_Arr[4] = false;
				alert('이메일을 확인하세요.');
				$('#userEmail').focus();
				return false;
			}
			//폰 번호 확인
			if(phoneEmp.test($('#phone').val())){
				inval_Arr[5] = true;
			}else{
				inval_Arr[5]=false;
				alert('휴대폰 번호를 확인하세요.');
				return false;
			}
			//주민등록번호 확인
			if(jumin.val() == ''){
				inval_Arr[6] = false;
				alert('주민등록 번호를 확안하세요.');
				return false;
			}else{
				inval_Arr[6] = true;
			}
			
			//전체 유효성 검사
			
			var validAll = true;
			
			for(var i=0; i< inval_Arr.length; i++){
				if(inval_Arr[i]==false){
					validAll == false;
				}
			}
			if(validAll == true){//유효성 모두 통과
				alert('회원 가입에 성공하셨습니다.');
			}else {
				alert('정보를 다시 확인하세요.');
			}	
		});
		
		
		$('#userid').blur(function(){
			if(idEmp.test($('#userid'))) {
				$('#id_check').text('');
			}else{
				$('#id_check').text('5~20자의 영문 소문자, 숫자와 특수기호(-),(_)만 사용 가능합니다.').css('color','red');
		
			}
		});
		$('#userpw').blur(function(){
			if(pwEmp.test($('#userpw').val())){
				$('#pw_check').text('');
			}else{
				$('#pw_check').text('4~12자의 숫자, 문자로만 사용 가능합니다.').css('color', 'red');
				
			}
		});
		//pw, pw2 비밀번호 일치확인 
		$('#userpw2').blur(function(){
			if($('#userpw').val() != $(this).val()){
				$('#pw2_check').text('비밀번호가 일치하지 않습니다.').css('color', 'red');
			}else{
				$('#pw2_check').text('');
			}
		});
		//성에 특수문자 못넣게 설정
		$('#lastname').blur(function(){
			if(lastnameEmp.test($(this).val())){
				$('#lastname_check').text('');
			} else {
				$('#lastname_check').text('한글 1~2자 이내로 입력하세요.(특수기호, 공백 사용 불가)').css('color', 'red');
			
			}
		});
		//이름에 특수문자 못넣게 설정
		$('#firstname').blur(function(){
			if(firstnameEmp.test($(this).val())){
				$('#firstname_check').text('');
			} else {
				$('#firstname_check').text('한글 2~4자 이내로 입력하세요.(특수기호, 공백 사용 불가)').css('color', 'red');
			
			}
		});
		$('#email').blur(function(){
			if(mailEmp.test($(this).val())){
				$('#email_check').text('');
			}else{
				$('#email_check').text('이메일 양식을 확인해주세요').css('color', 'red');
			}
		});
		
	
		// 폰번호 유효성 검사
		$('#userPhone').blur(function(){
			if(phoneEmp.test($(this).val())){
				$('#phone_check').text('');
			}else{
				('#phone_check').text('생년월일을 확인해주세요.').css('color','red');
			}
		});
	}); 
	
	