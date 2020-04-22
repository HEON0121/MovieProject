<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">


    <!-- Bootstrap Core CSS -->
    <link href="/resources/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="/resources/vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/resources/dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="/resources/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<!-- daum 도로명 주소 찾기 api -->
	<!-- <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script> -->
	
	
</head>
<body>

    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign Up</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" method='post' action="/join" id="usercheck" name="member">
                        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                            <fieldset>
                                <div class="form-group">
                                	<label for="id">아이디</label>
                                    <input class="form-control" placeholder="ID" id="userid" name="userid" type="text" autofocus>
                                	<div class="check_font" id="id_check"></div>
                                </div>
                                <div class="form-group">
                                	<label for="pw">비밀번호</label>
                                    <input class="form-control" placeholder="Password" id="userpw" name="userpw" type="password" value="">
                               		<div class="check_font" id="pw_check"></div>
                                </div>
                                 <div class="form-group">
                                	<label for="pw2">비밀번호 확인</label>
                                    <input class="form-control" placeholder="Check Password" id="userpw2" name="userpw2" type="password" value="">
                                	<div class="check_font" id="pw2_check"></div>
                                </div>
                                <div class="form-group">
                                	<label for="name">성</label>
                                    <input class="form-control" placeholder="Last Name" id="lastname" name="lastname" type="text" value="">
                                	<div class="check_font" id="lastname_check"></div>
                                </div>
                                <div class="form-group">
                                	<label for="name">이름</label>
                                    <input class="form-control" placeholder="First Name" id="firstname" name="firstname" type="text" value="">
                                	<div class="check_font" id="firstname_check"></div>
                                </div>
                         
                                <div class="form-group">
                                	<label for="email">Email</label>
                                    <input class="form-control" placeholder="Email" id="email" name="email" type="E-mail" value="">
                                	<div class="check_font" id="email_check"></div>
                                </div>
                                <div class="form-group">
                                	<label for="phone">핸드폰 번호</label>
                                    <input class="form-control" placeholder="phone number(-없이 숫자만)" id="phone" name="phone" type="text" value="">
                                	<div class="check_font" id="phone_check"></div>
                                </div>                               
                                <div class="form-group">
                                	<label for="phone">주민등록번호</label>
                                    <input class="form-control" placeholder="주민등록번호(-없이 숫자만)" id="ssn" name="ssn" type="password" value="">
                                	<div class="check_font" id="ssn_check"></div>
                                </div>
                                <div class="form-group text-center">
                                	<button type="submit" class="btn btn-primary">회원가입</button>
                                </div>    
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="/resources/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/resources/vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="/resources/vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="/resources/dist/js/sb-admin-2.js"></script>
    <script src= "/resources/js/join.js"></script>
    <script>
    	$(".btn-primary").on("click",function(e){
    		e.preventDefault();
    		$("form").submit();
    	});
    </script>
</body>
</html>