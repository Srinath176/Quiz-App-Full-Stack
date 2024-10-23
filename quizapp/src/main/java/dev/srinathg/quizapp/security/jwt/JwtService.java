package dev.srinathg.quizapp.security.jwt;

import dev.srinathg.quizapp.model.CustomUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class JwtService {

    String secretKey = "";
    public JwtService() throws NoSuchAlgorithmException {

        KeyGenerator key = KeyGenerator.getInstance("HmacSHA256");
        SecretKey sk = key.generateKey();
        secretKey = Base64.getEncoder().encodeToString(sk.getEncoded());
        System.out.println(secretKey);
    }

    public String generateToken(UserDetails userDetails){
        Map<String,String> claims = new HashMap<>();
        claims.put("iss","DevOps");
        return Jwts.builder()
                .claims(claims)
                .subject(userDetails.getUsername()) //username is email
                .issuedAt(Date.from(Instant.now()))
                .expiration(Date.from(Instant.now().plusMillis(TimeUnit.MINUTES.toMillis(60))))
                .signWith(getKey())
                .compact();
    }

    private SecretKey getKey(){
        byte[] decodedKey = Base64.getDecoder().decode(secretKey);
        return Keys.hmacShaKeyFor(decodedKey);
    }

    public String extractUserEmail(String jwt) {
        Claims claims = getClaims(jwt);
        return claims.getSubject();
    }

    private Claims getClaims(String jwt) {
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(jwt)
                .getPayload();
    }

    public Boolean isTokenValid(String jwt) {
        Claims claims = getClaims(jwt);
        return claims.getExpiration().after(Date.from(Instant.now()));
    }

}
