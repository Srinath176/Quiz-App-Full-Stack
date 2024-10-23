import './css/Logout.css'

const Logout = () => {

    return(
        <div className="score-container">
            <h1>Thanks for using Quiz App</h1>
            <h2>Comeback and login to Participate in quiz!</h2>
            <button onClick={()=>window.location.replace('/')}>Home</button>
        </div>
    )
}

export default Logout