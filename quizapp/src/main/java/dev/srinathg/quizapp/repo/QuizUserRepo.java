package dev.srinathg.quizapp.repo;

import dev.srinathg.quizapp.model.QuizUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizUserRepo extends JpaRepository<QuizUser,Integer> {

    QuizUser findByEmail(String email);
}
