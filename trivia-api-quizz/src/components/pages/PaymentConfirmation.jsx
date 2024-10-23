import Razorpay from 'react-razorpay/dist/razorpay';
import './css/PaymentConfirmation.css';
import { useState } from 'react';
import { useRazorpay } from 'react-razorpay';
import { useNavigate } from 'react-router-dom';



const PaymentConfirmation = () => {

    const Razorpay = useRazorpay()
    const defaultAmount = 199
    const token = localStorage.getItem('auth-token')



    const handleSubmit = async () => {

        try {
            const response = await fetch(`http://localhost:8080/api/payment/order?amount=${defaultAmount}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    
                }
            })

            const data = await response.json()

            const options = {
                key: 'rzp_test_D3JoGk4GvV22eS',
                amount: data.amount,
                currency: data.currency,
                name: 'individual',
                description: 'Test payments for quiz application',
                order_id: data.id,
                handler: async(response) => {
                    
                   const verifyResponse = await fetch('http://localhost:8080/api/payment/verify-payment',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body:JSON.stringify(response)
                   })
                   if(verifyResponse.ok){
                    const data  = await verifyResponse.json()
                    localStorage.setItem('user-name',data.username)
                    localStorage.setItem('premium-user',data.premiumUser)
                    window.location.replace('/')
                   }
                },
                prefill: {
                    name: 'Devops',
                    email: 'devops@gmail.com',
                    contact: '9987654321',
                },
                notes: {
                    address: 'Corporate Office',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const razorpayInstance = new window.Razorpay(options)
            razorpayInstance.open()


        } catch (error) {
            console.log(error + ' payment fetch failed ')
        }

    };

    return (
        <div className=" checkout">
            <h1 className='fw-bolder'>Payment Confirmation!</h1>
            <ul>
                <li>
                    <span className='fw-bold'>Amount: {defaultAmount}</span>
                </li>
                <li>
                    <span className='fw-bold'>Acoount Type: Premium</span>
                </li>
            </ul>
            <button type="submit" className="btn-proceed rounded-pill mt-3  " onClick={handleSubmit}>
                Proceed to Checkout
            </button>

        </div>
    )
}

export default PaymentConfirmation