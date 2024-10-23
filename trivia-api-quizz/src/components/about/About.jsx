import './About.css'

const About = () => {

    return (

        <div className="about my-5">
            <div className="card w-100 about-card" style={{border:'none'}} >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src='src\assets\creative-man.avif' className="img-fluid rounded-start" alt="Quiz" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body my-3">
                            <h5 className="card-title my-3 about-title">About</h5>
                            <hr className='mx-auto'></hr>
                            <p className="card-text about-text">
                                Welcome to our Quiz Application! Here, you can challenge your knowledge across various topics
                                including sports, science, movies, and music. Our goal is to make learning enjoyable and interactive.
                            </p>
                            
                            <p className="card-text about-text">
                                Join our community of quiz enthusiasts and embark on a journey of knowledge and fun today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default About