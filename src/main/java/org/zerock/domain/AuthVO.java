package org.zerock.domain;

import lombok.Data;

// ������ ������ root-context.xml ���� AuthVO Ŭ���� �ν��� 

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
