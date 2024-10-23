import { useContext } from 'react';
import './Categories.css'
import { useNavigate } from 'react-router-dom';
import { categoryApiConext } from '../api/CategoryContext';


const Categories = () => {

    const { setC_Questions, setC_CorrectAnswers, setC_ShuffledAnswers } = useContext(categoryApiConext)

    const navigate = useNavigate()

    const categories = [
        "Arts & Literature",
        "Film & TV",
        "General Knowledge",
        "History",
        "Food & Drink",
        "Geography",
        "Science",
        "Sports & Leisure",
        "Music",
        "Society & Culture",
        "More Coming Soon..."
    ];

    const categoryMapping = {
        "Arts & Literature": "arts_and_literature",
        "Film & TV": "film_and_tv",
        "General Knowledge": "general_knowledge",
        "History": "history",
        "Food & Drink": "food_and_drink",
        "Geography": "geography",
        "Science": "science",
        "Sports & Leisure": "sport_and_leisure",
        "Music": "music",
        "Society & Culture": "society_and_culture",
        
    };


    const isPremiumUser = localStorage.getItem("premium-user") === 'true';

    const fetchCategoryData = async (category) => {

        const urlFriendlyCategory = categoryMapping[category];

        if (!isPremiumUser) {
            alert('Buy Premium for Category Quiz')
            return;
        }

        try {
            const response = await fetch(`https://the-trivia-api.com/api/questions?categories=${urlFriendlyCategory}&limit=10&difficulty=medium`)
            const data = await response.json()
            console.log(data)
            const questions = data.map(element => element.question);
            const correctAnswers = data.map(element => element.correctAnswer);
            const incorrectAnswers = data.map(({ incorrectAnswers }) => incorrectAnswers); // destructuring
            const allAnswers = correctAnswers.map((correct, index) => [correct, ...incorrectAnswers[index]]);
            const shuffledAnswers = allAnswers.map(answer => [...answer].sort(() => Math.random() - 0.5));

            setC_Questions(questions);
            setC_CorrectAnswers(correctAnswers);
            setC_ShuffledAnswers(shuffledAnswers);


            navigate('/categoryQuiz')

        } catch (error) {
            console.log('Error cateogory' + error)
        }
    }






    return (


        <div className="my-5 category">
            <h2 className="text-center mb-4 fw-bold">Quiz Categories (Premium)</h2>
            <div className="row">
                {categories.map((category, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card rounded-4 shadow-sm cat-card">
                            <div className="card-body text-center">
                                <h5 className="card-title" onClick={() => fetchCategoryData(category)}>{category}</h5>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Categories