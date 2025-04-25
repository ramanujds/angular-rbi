package com.rbi.bankapp.security;

import com.rbi.bankapp.model.UserEntity;
import com.rbi.bankapp.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepo;

    public UserDetailsServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity entity = userRepo.findByUsername(username).orElseThrow(
                ()->new UsernameNotFoundException("User with name "+username+" Not Found")
        );
        return new UserDetails() {
            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return List.of(
                        new SimpleGrantedAuthority("ROLE_"+entity.getRole().toUpperCase())
                );
            }

            @Override
            public String getPassword() {
                return entity.getPassword();
            }

            @Override
            public String getUsername() {
                return entity.getUsername();
            }
        };
    }
}
