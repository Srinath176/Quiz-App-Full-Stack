package dev.srinathg.quizapp.service;

import dev.srinathg.quizapp.model.QuizUser;
import dev.srinathg.quizapp.repo.QuizUserRepo;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizUserService {

    private QuizUserRepo repo;
    public QuizUserService(QuizUserRepo repo) {
        this.repo = repo;
    }

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public List<QuizUser> getAllUsers(){
        return repo.findAll();
    }

    public void create(QuizUser user){
        user.setPassword(encoder.encode(user.getPassword()));
        user.setPremiumUser(false);
        repo.save(user);
    }

    public void findUserById(int id) {
        repo.findById(id);
    }

    public void updateUser(QuizUser user) {
        repo.save(user);
    }

    public void deleteUserById(int id){
        repo.deleteById(id);
    }

    public QuizUser upgradeToPremium(String email) {
        QuizUser user = repo.findByEmail(email);
        if(user == null) {
            throw new UsernameNotFoundException("User Not Found");
        }
        user.setPremiumUser(true);
        repo.save(user);
        return user;

    }

}
