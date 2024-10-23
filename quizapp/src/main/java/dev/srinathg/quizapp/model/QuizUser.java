package dev.srinathg.quizapp.model;

import jakarta.persistence.*;

@Entity(name = "quiz_users")
public class QuizUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String email;
    private String password;
    @Column(nullable = false)
    private Boolean isPremiumUser;


    public QuizUser() {
    }

    public QuizUser(int id, String username, String email, String password, Boolean isPremiumUser) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isPremiumUser = isPremiumUser;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getPremiumUser() {
        return isPremiumUser;
    }

    public void setPremiumUser(Boolean premiumUser) {
        isPremiumUser = premiumUser;
    }

    @Override
    public String toString() {
        return "QuizUser{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", isPremiumUser=" + isPremiumUser +
                '}';
    }
}
