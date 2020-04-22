package org.zerock.domain;

import lombok.Data;

// 생성자 지워야 root-context.xml 에서 AuthVO 클래스 인식함 

@Data
public class AuthVO {	
	private String userid;
	private String auth;
	
	/*
	 * public AuthVO(String userid, String auth) { this.userid = userid; this.auth =
	 * auth; } public String getUserid() { return userid; } public String getAuth()
	 * { return auth; }
	 */
}
