import { useContext, useState } from "react"
import './css/Quiz.css'
import { ApiDataContext } from "../api/ApiData"
import { useNavigate } from "react-router-dom";



const Quiz = () => {

    const apiContext = useContext(ApiDataContext);

    if (!apiContext) {
        return <div style={{color:'#fff'}}>Loading...</div>;
    }

    const { questions, correctAnswers, shuffledAnswers } = apiContext

    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
    const [isRightAnswer, setIsRightAnswer] = useState(null)

    let [selectedIndex, setSelectedIndex] = useState(null)

    const navigate = useNavigate()

    
    const handleAnswerClick = (answer, index) => {

        setSelectedIndex(index)

        if (answer === correctAnswers[currentIndex]) {
            setScore(score + 10)
            setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
            setIsRightAnswer(true)

        }
        else {
            setIsRightAnswer(false)
        }
    }


    const handleSubmit = () => {

        setSelectedIndex(null)
        setIsRightAnswer(null)

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1)
            
        }

        else {
           
            navigate('/score',{
                state:{
                    score: score,
                    numberOfCorrectAnswers: numberOfCorrectAnswers,
                    totalQuestions: questions.length
                }
            })

        }
    }




    return (

        <div className="main-container">
            <h1>Quiz</h1>
            <hr />
            {currentIndex >= 0 && questions[currentIndex] && shuffledAnswers[currentIndex] && (
                <div className="wrapper">
                    <h2>{currentIndex + 1}. {questions[currentIndex]}</h2>
                    <ul>
                        {shuffledAnswers[currentIndex].map((answer, index) => (
                            <li key={index}>
                                
                                <button className={`${selectedIndex === index && isRightAnswer !== null ?
                                    answer === correctAnswers[currentIndex] ?
                                        'btn-success' : 'btn-danger' : 'btn'}`}
                                    disabled={isRightAnswer !== null}
                                    onClick={() => handleAnswerClick(answer, index)}>
                                    {answer}
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
          
                <button onClick={handleSubmit} className={`${currentIndex < questions.length-1 ? 'btn-submit' : 'btn-danger'}`} style={{maxWidth:'30%'}}>
                    {(currentIndex < questions.length-1) ? 'Next' : 'Submit'}
                </button>
            

        </div>


    )
}

export default Quiz;