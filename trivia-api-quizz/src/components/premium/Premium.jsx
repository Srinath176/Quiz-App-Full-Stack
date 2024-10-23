import './Premium.css'


const Premium = () => {

    const categories = [
        "General Knowledge",
        "Arts & Literature",
        "Film & TV",
        "History",
        "Food & Drink",
        "Geography",
        "Science",
        "Sports & Leisure",
        "Music",
        "Society & Culture",
    ];

   

    return(

        <div className='premium-container'>  
        <div className="container my-5">  
            <div className="row justify-content-center">  
                <div className="col-lg-4 col-md-5 col-sm-8 free-plan text-center">  
                    <span className="h4">Free</span>  
                    <hr className='mx-auto w-75'></hr>  
                    <ul className="list-unstyled">  
                        {categories.map((category, index) => (  
                            <li key={index} className={index === 0 ? '' : 'disabled'}>{category}</li>  
                        ))}  
                    </ul>  
                    <button className="btn btn-secondary mt-3 w-50 p-2 rounded-3">Current Plan</button>  
                </div>  
                <div className="col-lg-4 col-md-5 col-sm-8 premium-plan text-center">  
                    <span className="h4">Premium</span>  
                    <hr className='mx-auto w-75'></hr>  
                    <ul className="list-unstyled">  
                        {categories.map((category, index) => (  
                            <li key={index}>{category}</li>  
                        ))}
                        & more..  
                    </ul>  
                    <button className="btn btn-warning mt-3 w-50 p-2 rounded-3 fw-bold" onClick={() => window.location.replace('/checkout')}>Buy Premium @199/-</button>  
                </div>  
            </div>  
        </div>  
    </div>
    )

}

export default Premium