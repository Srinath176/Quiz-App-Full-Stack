import './Hero.css'


const Hero = () => {

    function checkAuthentication(){

        if(localStorage.getItem('auth-token')){
            window.location.replace('/quiz')
        } else {
            alert('login to take quiz')
            
        }
    }

    return (
        <div className="hero mb-2">
            <h1>“Hi there, Step right in! Test your expertise in different fields and see how much you really know.” </h1>
            <h4>Participate in Quiz, Test Your Knowledge, Elevate your game.</h4>
            <button type='button' className='btn btn-dark btn-lg' onClick={checkAuthentication}>Take Quiz</button>
        </div>
    )
}

export default Hero