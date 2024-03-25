import React from 'react'

const HomePage = () => {
    return (
        <div className='container mt-5 mb-5'>
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

            <div className="card" style={{ width: "18rem" }}>
                {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default HomePage;