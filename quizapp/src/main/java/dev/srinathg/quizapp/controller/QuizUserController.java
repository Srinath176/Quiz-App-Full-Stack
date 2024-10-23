package dev.srinathg.quizapp.controller;

import dev.srinathg.quizapp.model.QuizUser;
import dev.srinathg.quizapp.service.QuizUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class QuizUserController {

    private final QuizUserService service;
    public QuizUserController(QuizUserService service) {
        this.service = service;
    }

    @GetMapping("/welcome")
    public Principal hello(Principal user){
        return user;
    }

    @GetMapping("users")
    public List<QuizUser> getAllUsers(){
        return service.getAllUsers();
    }

    @PostMapping("/register")
    public ResponseEntity<QuizUser> createUser(@RequestBody QuizUser user){

        service.create(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<QuizUser> deleteBYId(@PathVariable int id){
        service.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
