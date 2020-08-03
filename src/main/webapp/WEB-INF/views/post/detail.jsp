<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@include file="../layout/header.jsp" %>

<div class="container">     
  <table class="table table-striped">
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
      </tr>
    </thead>
    <tbody>
     <tr>
     	<td><input id="id" type="text" value="${postDetailRespDto.id}" readonly /></td>
     	<td><input id="title" type="text" value="${postDetailRespDto.title}" readonly /></td>
     	<td><input id="content" type="text" value="${postDetailRespDto.content}" readonly /></td>
     	<td><input id="username" type="text" value="${postDetailRespDto.username}" readonly /></td>
   	</tr>
    </tbody>
  </table>
  <button id="btn-update" class="btn btn-primary">수정하기</button>
  <button id="btn-update-mode" class="btn btn-warning">수정</button>
  <button id="btn-delete" class="btn btn-danger">삭제</button>
</div>

<script src="/js/post.js"></script>
<%@include file="../layout/footer.jsp" %>