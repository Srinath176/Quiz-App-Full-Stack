import { useNavigate } from 'react-router-dom'
import './css/CategoryQuiz.css'
import { useContext, useLayoutEffect, useState } from 'react'
import { categoryApiConext } from '../api/CategoryContext'



const CategoryQuiz = () => {


    const {c_questions,c_correctAnswers,c_shuffledAnswers} = useContext(categoryApiConext)
   

    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
    const [isRightAnswer, setIsRightAnswer] = useState(null)

    let [selectedIndex, setSelectedIndex] = useState(null)


    const navigate = useNavigate()

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    
    const handleAnswerClick = (answer, index) => {

        setSelectedIndex(index)

        if (answer === c_correctAnswers[currentIndex]) {
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

        if (currentIndex < c_questions.length - 1) {
            setCurrentIndex(currentIndex + 1)
            
        }

        else {
           
            navigate('/score',{
                state:{
                    score: score,
                    numberOfCorrectAnswers: numberOfCorrectAnswers,
                    totalQuestions: c_questions.length
                }
            })

        }
    }




    return (

        <div className="quiz-container">
            <h1>Quiz</h1>
            <hr />
            {currentIndex >= 0 && c_questions[currentIndex] && c_shuffledAnswers[currentIndex] && (
                <div className="wrapper">
                    <h2>{currentIndex + 1}. {c_questions[currentIndex]}</h2>
                    <ul>
                        {c_shuffledAnswers[currentIndex].map((answer, index) => (
                            <li key={index}>
                                
                                <button className={`${selectedIndex === index && isRightAnswer !== null ?
                                    answer === c_correctAnswers[currentIndex] ?
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
          
                <button onClick={handleSubmit} className={`${currentIndex < c_questions.length-1 ? 'btn-submit' : 'btn-danger'}`} style={{maxWidth:'30%'}}>
                    {(currentIndex < c_questions.length-1) ? 'Next' : 'Submit'}
                </button>
            

        </div>


    )
}

export default CategoryQuiz