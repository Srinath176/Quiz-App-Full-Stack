package dev.srinathg.quizapp.payments;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import dev.srinathg.quizapp.model.QuizUser;
import dev.srinathg.quizapp.security.jwt.JwtService;
import dev.srinathg.quizapp.service.QuizUserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.spel.ast.QualifiedIdentifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class RazorpayController {

    @Autowired
    private RazorpayPaymentService razorpayPaymentService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private QuizUserService quizUserService;


    @GetMapping("/order")
    public String createOrder(@RequestParam int amount) throws RazorpayException {

        return razorpayPaymentService.createOrder(amount);

    }

    @PostMapping("/verify-payment")
    public ResponseEntity<?> verfiyUserPayment(@RequestHeader("Authorization") String token, @RequestBody Map<String, String> paymentResponse) throws RazorpayException {


        try {
            String orderId = paymentResponse.get("razorpay_order_id");
            String paymentId = paymentResponse.get("razorpay_payment_id");
            String signature = paymentResponse.get("razorpay_signature");


            boolean isSignatureValid = razorpayPaymentService.verifyPaymentSignature(orderId, paymentId, signature);
            if (isSignatureValid) {

                String jwtToken = token.substring(7);
                String email = jwtService.extractUserEmail(jwtToken);
                QuizUser user = quizUserService.upgradeToPremium(email);
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.badRequest().build();
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }


    }
}
