package com.rbi.mytaskmanager.api;

import com.rbi.mytaskmanager.dto.AuthResponse;
import com.rbi.mytaskmanager.dto.UserCredentialsDto;
import com.rbi.mytaskmanager.dto.UserDto;
import com.rbi.mytaskmanager.model.UserEntity;
import com.rbi.mytaskmanager.repository.UserRepository;
import com.rbi.mytaskmanager.security.JwtUtil;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepo;

    private JwtUtil jwtUtil;

    public UserController(PasswordEncoder passwordEncoder, UserRepository userRepo, JwtUtil jwtUtil) {
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping
    public UserDto signUp(@RequestBody UserDto user){
        String encodedPassword = passwordEncoder.encode(user.password());
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(user.username());
        userEntity.setPassword(encodedPassword);
        userEntity.setRole(user.role());
        userEntity =  userRepo.save(userEntity);

        return new UserDto(userEntity.getUsername(),"*****",user.role());
    }

    @PostMapping("/login")
    public AuthResponse authenticate(@RequestBody UserCredentialsDto userCredentials) {

        UserEntity user = userRepo.findByUsername(userCredentials.username()).orElseThrow(()->new UsernameNotFoundException("User not found"));
        if(!passwordEncoder.matches(userCredentials.password(),user.getPassword())){
            throw new RuntimeException("Invalid Credentials");
        }
        String token = jwtUtil.generateToken(user.getUsername());
        return new AuthResponse(token);

    }




}
