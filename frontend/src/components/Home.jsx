import React from 'react'

const Home = () => {
    return (
        <div className='container my-5'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="jumbotron">
                            <h1 className="display-4">Welcome to My Django React Authentication Website</h1>
                            <p className="lead">This is a simple home page created with React and Django for backend using JWT .</p>
                            <hr className="my-4" />
                            <p>Feel free to explore and enjoy the dummy content!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            profile section #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>My name is Suman, and I am currently pursuing a Bachelor's degree in Computer Science Engineering. I am in my third year of studies. I am passionate about software engineering and aspire to build a successful career in this field..</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            education #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Bachelor of Technology (B.Tech) in Computer Science Engineering
  - Year: Pursuing 3rd Year
  - Institution: Hyderabad institute of technology and management</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           aspiration #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>My aspiration is to become a successful software engineer. I am dedicated to honing my skills and knowledge in software development to contribute meaningfully to the field and achieve excellence in my career..</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} className="d-block w-100" alt="..."/>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home;