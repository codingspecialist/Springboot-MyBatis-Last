package com.cos.blog.repository;

import com.cos.blog.model.User;

public interface UserRepository {
	public void save(User user);
	public User login(User user);
}
