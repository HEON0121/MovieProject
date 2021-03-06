package org.zerock.controller;




import javax.inject.Inject;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;





@RequestMapping("/user/*")
@Controller
public class UserController {
	
	//게시판 
	@RequestMapping("/about")
	public String goAbout() {
		return "/users/about";
	}
	//연락처
	@RequestMapping("/contact")
	public String goContact() {
		return "/users/contact";
	}
	
	@RequestMapping("/fast_reservation")
	public String goDestination_Details() {
		return "/users/fast_reservation";
	}
	
	@RequestMapping("/timeTable")
	public String goElements() {
		return "/users/timeTable";
	}
	
	@RequestMapping("/theater")
	public String goBlog() {
		return "/users/theater";
	}
	
	@RequestMapping("/special")
	public String goSingle_blog() {
		return "/users/special";
	}
	
	@RequestMapping("/movies")
	public String goTravel_destination() {
		return "/users/movies";
	}
	
	@RequestMapping("/movieAPI")
	public String goAPI(Model model) {
		model.addAttribute("targetDt","20200419");
		model.addAttribute("ItemPerPage","10");
		return "restService";
	}
	
	
}