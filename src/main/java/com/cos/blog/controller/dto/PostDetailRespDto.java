package com.cos.blog.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// 콤포지션 하지 말기!!

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDetailRespDto {
	private int id;
	private String title;
	private String content;
	private String username;
}
