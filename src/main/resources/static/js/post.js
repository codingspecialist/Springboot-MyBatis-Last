let index = {
		init: function(){
			// 1. 리스너
			$("#btn-save").on("click", ()=>{
				// 콜백 스택
				this.save();
			});
			$("#btn-delete").on("click", ()=>{
				this.deleteById();
			});
			$("#btn-update-mode").on("click", ()=>{
				this.updateMode();
			});	
			$("#btn-update").on("click", ()=>{
				this.update();
			});	
			$("#btn-update").hide();
		},
		
		update: function(){
			console.log('update 수정');
			let data = {
					id: $("#id").val(),
					title: $("#title").val(),
					content: $("#content").val()
			};
			
			$.ajax({
				type: "PUT",
				url: "/post/"+data.id,
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){	
				console.log(resp);
				alert("수정 성공");
				location.href="/post/"+data.id;
			}).fail(function(error){
				alert("수정 실패");
				console.log(error);
			})
		},
		
		updateMode: function(){
			$("#btn-update-mode").hide();
			$("#btn-update").show();
			
			$("#title").attr("readOnly", false);
			$("#content").attr("readOnly", false);
		},
		
		deleteById: function(){
			let data = {
					id: $("#id").val()
			};
			
			$.ajax({
				type: "DELETE",
				url: "/post/"+data.id,
				dataType: "json",
			}).done(function(resp){	
				console.log(resp);
				alert("삭제 성공");	
			}).fail(function(error){
				alert("삭제 실패 : 권한이 없습니다.");
				console.log(error);
			})
		},

		save: function(){
			let data = {
					title: $("#title").val(),
					content: $("#content").val(),
					userId: $("#userId").val()
			};
			
			$.ajax({
				type: "POST",
				url: "/post",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){	
				console.log(resp);
				alert("글쓰기 성공");
				location.href="/";
			}).fail(function(error){
				alert("글쓰기 실패");
				console.log(error);
			})
		},
}

index.init();