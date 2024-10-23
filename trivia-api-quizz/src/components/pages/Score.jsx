import './css/Score.css'
import { useLocation } from "react-router-dom";



const Score = () => {

    const location = useLocation()
    const { score, numberOfCorrectAnswers, totalQuestions } = location.state

    return (

        <div className="score-container">
            <h1>Your score</h1>
            <hr />
            <div className="score-circle">
                <h2 className="score-text">{score}<hr />{totalQuestions * 10}</h2>
            </div>
            <p>You answered {numberOfCorrectAnswers} out of {totalQuestions} correctly</p>
            
            <button className="btn" onClick={() => window.location.replace('/')}>Home</button>

        </div>
    )

}

export default Score;