import { createContext, useState } from "react"

export const categoryApiConext = createContext(null)

const CategoryContext = ({ children }) => {


    const [c_questions, setC_Questions] = useState([])
    const [c_correctAnswers, setC_CorrectAnswers] = useState([])
    const [c_shuffledAnswers, setC_ShuffledAnswers] = useState([])

    console.log('context: '+c_questions)

    return (
        <categoryApiConext.Provider value={{ c_questions,setC_Questions, c_correctAnswers, setC_CorrectAnswers, c_shuffledAnswers, setC_ShuffledAnswers }}>
            {children}
        </categoryApiConext.Provider>
    )
}

export default CategoryContext