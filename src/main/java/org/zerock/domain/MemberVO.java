package org.zerock.domain;

import java.util.List;

import lombok.Data;

@Data
public class MemberVO {
	private String userid;
	private String userpw;
	private String lastname;
	private String firstname;
	private String email;
	private String phone;
	private String ssn;
	private List<AuthVO> authList;
	
}
