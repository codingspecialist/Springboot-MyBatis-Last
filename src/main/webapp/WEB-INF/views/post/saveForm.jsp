<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../layout/header.jsp" %> 

<div class="container">
	<form class="was-validated" >
	  
	  <input id="userId" type="hidden" value="${sessionScope.principal.id}" />
	  <div class="form-group">
	    <label for="title">Title:</label>
	    <input id="title"  type="text" class="form-control" placeholder="Enter username" required>
	  </div>
	  
	  <div class="form-group">
	    <label for="content">Content:</label>
	    <textarea id="content" rows="10" cols="50" class="form-control"></textarea>
	  </div>

	  <button id="btn-save" type="button" class="btn btn-primary">글쓰기완료</button>
	</form>
</div>

<script src="/js/post.js"></script>
<%@ include file="../layout/footer.jsp" %>

