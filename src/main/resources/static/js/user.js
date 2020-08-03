let index = {
		init: function(){
			// 1. 리스너
			$("#btn-save").on("click", ()=>{
				// 콜백 스택
				this.save();
			});
			// 2. 리스너
			$("#btn-login").on("click", ()=>{
				// 콜백 스택
				this.login();
			});
		},

		save: function(){
			let data = {
					username: $("#username").val(),
					password: $("#password").val(),
					email: $("#email").val()
			};
			
			$.ajax({
				type: "POST",
				url: "/auth/joinProc",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){	
				alert("회원가입 성공");
				location.href="/";	
			}).fail(function(error){
				alert("회원가입 실패");
				console.log(error);
			})
		},

		login: function(){
			let data = {
					username: $("#username").val(),
					password: $("#password").val()
			};
			
			$.ajax({
				type: "POST",
				url: "/auth/loginProc",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json"
			}).done(function(resp){
				if(resp.statusCode == 1){
					alert("로그인 성공");
					location.href="/";
				}else{
					alert("아이디와 패스워드를 다시 입력하세요");
					console.log(resp);
				}
			}).fail(function(error){
				alert("로그인 실패");
				console.log(error);
			})
		},
}

index.init();