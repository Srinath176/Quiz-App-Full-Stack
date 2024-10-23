import { createContext, useState, useEffect } from "react";

export const ApiDataContext = createContext(null);

const ApiData = (props) => {

  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchApi = async () => {
  
      try {
        const response = await fetch('https://the-trivia-api.com/v2/questions?limit=15');
        const data = await response.json();

        const questions = data.map(element => element.question.text);
        const correctAnswers = data.map(element => element.correctAnswer);
        const incorrectAnswers = data.map(({ incorrectAnswers }) => incorrectAnswers); // destructuring
        const allAnswers = correctAnswers.map((correct, index) => [correct, ...incorrectAnswers[index]]);
        const shuffledAnswers = allAnswers.map(answer => [...answer].sort(() => Math.random() - 0.5));

        console.log(data);

        setQuestions(questions);
        setCorrectAnswers(correctAnswers);
        setShuffledAnswers(shuffledAnswers);

        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ApiDataContext.Provider value={{ questions, correctAnswers, shuffledAnswers }}>
      {props.children}
    </ApiDataContext.Provider>
  );
};

export default ApiData;