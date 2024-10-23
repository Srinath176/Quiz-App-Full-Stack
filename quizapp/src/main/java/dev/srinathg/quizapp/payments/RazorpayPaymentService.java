package dev.srinathg.quizapp.payments;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RazorpayPaymentService {

    @Value("${razorpay.key.id}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret}")
    private String getRazorpayKeySecret;

    public String createOrder(int amount) throws RazorpayException {

        System.out.println("razor-id"+razorpayKeyId + "razor-secret"+getRazorpayKeySecret);
        RazorpayClient razorpayClient = new RazorpayClient(razorpayKeyId,getRazorpayKeySecret);

        JSONObject orderDetails = new JSONObject();
        orderDetails.put("amount",amount * 100);
        orderDetails.put("currency","INR");
        orderDetails.put("receipt","receipt#1");

        Order order = razorpayClient.orders.create(orderDetails);
        return order.toString();
    }

    public boolean verifyPaymentSignature(String orderId, String paymentId, String signature) throws RazorpayException {

        String payload = orderId + "|" + paymentId;
        return Utils.verifySignature(payload,signature,getRazorpayKeySecret);
    }
}
