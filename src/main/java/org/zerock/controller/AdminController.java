package org.zerock.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@RequestMapping("/admin/*")
@Controller
public class AdminController {
//	<li><a class="active" href="/" >Home</a></li>
//    <li><a class="" href="/movies_admin">�쁺�솕 寃��깋 諛� �벑濡�</a></li>
//    <li><a href="#">�긽�쁺愿�<i class="ti-angle-down"></i></a>
//        <ul class="submenu">
//                <li><a href="/auditorium">�긽�쁺愿� 異붽� 諛� 愿�由�</a></li>
//                <li><a href="/timeTable_admin">�긽�쁺�떆媛꾪몴 愿�由�</a></li>
//        </ul>
//    </li>
//    <li><a href="#">怨좉컼 <i class="ti-angle-down"></i></a>
//        <ul class="submenu">
//            <li><a href="/customer_admin">怨좉컼 愿�由�</a></li>
//        </ul>
//    </li>
//    <li><a href="/about_admin">寃뚯떆�뙋</a></li>
//  
	
    @RequestMapping("/movies_admin")
    public String adminM() {
    	return "/admin/movies_admin";
    }
    
    @RequestMapping("/auditorium")
    public String auditorium() {
    	return "/admin/auditorium";
    }
    
    @RequestMapping("/timeTable_admin")
    public String timeT() {
    	return "/admin/timeTable_admin";
    }
    
    @RequestMapping("/customer_admin")
    public String cusT() {
    	return "/admin/customer_admin";
    }
    
    @RequestMapping("/about_admin")
    public String abAd() {
    	return "/admin/about_admin";
    }
    
}
