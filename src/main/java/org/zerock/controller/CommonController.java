package org.zerock.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommonController {
	//join
	//아이디 중복체크
	//login
	//logout
	@RequestMapping(value="/join")
	public String login() {
		return"redirect:/users/index";
	}
}
