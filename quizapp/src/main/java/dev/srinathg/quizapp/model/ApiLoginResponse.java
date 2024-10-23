package dev.srinathg.quizapp.model;

public class ApiLoginResponse {

    private String token;
    private Boolean isPremiumUser;
    private String username;

    public ApiLoginResponse() {
    }

    public ApiLoginResponse(String token, Boolean isPremiumUser, String username) {
        this.token = token;
        this.isPremiumUser = isPremiumUser;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Boolean getPremiumUser() {
        return isPremiumUser;
    }

    public void setPremiumUser(Boolean premiumUser) {
        isPremiumUser = premiumUser;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
