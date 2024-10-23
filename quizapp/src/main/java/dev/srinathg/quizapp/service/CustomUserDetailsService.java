package dev.srinathg.quizapp.service;

import dev.srinathg.quizapp.model.CustomUserDetails;
import dev.srinathg.quizapp.model.QuizUser;
import dev.srinathg.quizapp.repo.QuizUserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService  implements UserDetailsService {

    private QuizUserRepo repo;


    public CustomUserDetailsService(QuizUserRepo repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        QuizUser user = repo.findByEmail(email);
        if(user == null) {
            throw new UsernameNotFoundException("User Not Found");
        }
        return new CustomUserDetails(user);
    }


}
