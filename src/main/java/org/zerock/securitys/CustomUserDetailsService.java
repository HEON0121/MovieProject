package org.zerock.securitys;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.zerock.domain.MemberVO;
//import org.zerock.mapper.MemberMapper;
//import org.zerock.security.domain.CustomUser;

public class CustomUserDetailsService implements UserDetailsService {
	private static final Logger log = LoggerFactory.getLogger(CustomUserDetailsService.class);

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

//	@Autowired
//	private MemberMapper memberMapper;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		log.warn("Load User By UserName : " + username);
//		// userName means userid
//		MemberVO vo = memberMapper.read(username);
//		log.warn("queried by member mapper : " + vo);
//		return vo == null ? null : new CustomUser(vo);
//	}

}
