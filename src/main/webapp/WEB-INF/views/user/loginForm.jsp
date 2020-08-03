<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../layout/header.jsp" %> 

<div class="container">
	<form class="was-validated" >
	  
	  <div class="form-group">
	    <label for="username">Username:</label>
	    <input id="username"  type="text" class="form-control" placeholder="Enter username" required>
	    <div class="valid-feedback">Valid.</div>
	    <div class="invalid-feedback">Please fill out this field.</div>
	  </div>
	  
	  <div class="form-group">
	    <label for="pwd">Password:</label>
	    <input id="password" type="password" class="form-control" placeholder="Enter password" required>
	    <div class="valid-feedback">Valid.</div>
	    <div class="invalid-feedback">Please fill out this field.</div>
	  </div>

	  <button id="btn-login" type="button" class="btn btn-primary">로그인</button>
	</form>
</div>

<script src="/js/user.js"></script>
<%@ include file="../layout/footer.jsp" %>

