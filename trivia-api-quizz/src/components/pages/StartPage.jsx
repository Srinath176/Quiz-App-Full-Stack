

const StartPage = () => {


    return (
        <div className="container"> 
            <p>total 10 questions, think and answer</p>
            <button className="btn btn-primary" onClick={() => window.location.replace('/categoryQuiz')}>Start</button>
        </div>
    )
}

export default StartPage;