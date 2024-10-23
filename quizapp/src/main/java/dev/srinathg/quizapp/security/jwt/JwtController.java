package dev.srinathg.quizapp.security.jwt;

import dev.srinathg.quizapp.model.ApiLoginResponse;
import dev.srinathg.quizapp.model.QuizUser;
import dev.srinathg.quizapp.repo.QuizUserRepo;
import dev.srinathg.quizapp.service.CustomUserDetailsService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class JwtController {

    private JwtService jwtService;
    private AuthenticationManager authenticationManager;
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private QuizUserRepo repo;
    public JwtController(JwtService jwtService, AuthenticationManager authenticationManager, CustomUserDetailsService customUserDetailsService) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.customUserDetailsService = customUserDetailsService;
    }

    @PostMapping("/authenticate")
    public ApiLoginResponse register(@RequestBody QuizUser user) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
                (user.getEmail(), user.getPassword()));

        String auth_token = jwtService.generateToken(customUserDetailsService.loadUserByUsername(user.getEmail()));
        String email = jwtService.extractUserEmail(auth_token);
        QuizUser checkUser = repo.findByEmail(email);

        ApiLoginResponse response = new ApiLoginResponse();
        response.setToken(auth_token);
        response.setPremiumUser(checkUser.getPremiumUser());
        response.setUsername(checkUser.getUsername());

        if(authentication.isAuthenticated()){
            return response;
        } else {
            throw new UsernameNotFoundException("Invalid Credentials");
        }

    }
}

