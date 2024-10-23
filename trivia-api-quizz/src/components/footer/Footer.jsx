import './Footer.css'


const Footer = () => {

    return (

        <div className='footer'>
            <h5>Reach Out To Us</h5>
            <hr />
            <div className='container d-flex justify-content-center '>
                <div className='social-icons mx-5'>
                    <img src='\src\assets\icons8-whatsapp-24.png' alt='whatsapp_icon' />
                    <img src='src\assets\icons8-instagram-24.png' alt='instagram_icon' />
                    <img src='src\assets\icons8-telegram-app-24.png' alt='telegram_icon' />
                    <img src='src\assets\icons8-reddit-24.png' alt='reddit_icon' />
                    <img src='src\assets\icons8-twitterx-24.png' alt='twitter_icon' />

                </div>
                <div className='contact my-1 mx-5'>
                    <span><img src='src\assets\icons8-call-24.png' alt='mobile'/>+91 9876543210</span>
                    <span><img src='src\assets\icons8-email-24.png' alt='e-mail'/>srinathsri176@gmail.com</span>

                </div>
            </div>
            <hr className='bottom-hr'></hr>
            <p className='copyright'>Copyright @2024 - All rights reserved.</p>
        </div>
    )

}

export default Footer