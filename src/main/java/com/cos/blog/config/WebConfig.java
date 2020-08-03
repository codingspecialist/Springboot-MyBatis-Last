package com.cos.blog.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cos.blog.config.aop.RoleIntercepter;
import com.cos.blog.config.aop.SessionIntercepter;

// 필터링
@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new SessionIntercepter())
			.addPathPatterns("/user/**")
			.addPathPatterns("/post/**")
			.addPathPatterns("/post**");
		
		registry.addInterceptor(new RoleIntercepter())
			.addPathPatterns("/admin/**");
	}
}
