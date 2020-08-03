package com.cos.blog.repository;

import java.util.List;

import com.cos.blog.controller.dto.PostDetailRespDto;
import com.cos.blog.model.Post;

public interface PostRepository {
	public void save(Post post);
	public List<Post> findAll();
	public PostDetailRespDto findById(int id);
	public Post findOne(int id);
	public void deleteById(int id);
	public void update(Post post);
}
