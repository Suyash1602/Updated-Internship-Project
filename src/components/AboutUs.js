import React from 'react'
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { FaTwitter, FaInstagram, FaFacebook, } from 'react-icons/fa'

function AboutUs() {
    return (
        <>
            <div className="container mt-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                <h1 className="display-4 fw-bolder text-white p-3">Who Are WE.?</h1>
                <div className='d-flex justify-content-between ml-3 '>
                    <div>
                        <img src="http://jeevanrekha.kerala.gov.in/images/aboutus.jpg" alt="Admin" className='img-fluid mb-3' height="320px" width="570px" />
                    </div>
                    <div className='ms-3'>
                        <span class="overlay-text"><p className="text-secondary text-white mr-3" >We Are, <br /> <b>The Premium Products Pvt Ltd. </b><br /> A Company which gives you the best deal in all types of electronic products including home appliances, etc <br />
                            The main motive behind this startup is to provide variety of items at one stop.<br />
                            You can <b>Add Products</b> in this page but for that first make sure you have signed up with us. <br />
                            You can visit the Products List section which contains the list of products which you added.<br />
                            We ensure customer satisfaction as well as smooth FREE* home delivery. <br />
                            To know more about us or for any querries/suggestions,<br /> you can write us at : <a href="#" class="text-decoration-none">thepremiumproducts@gmail.com</a><br />
                            You can also follow us on various social handles for more updates.</p>

                            <ul className="list-unstyled d-flex mx-5">
                                <li className="ms-4">
                                    <a to="#" className="link-primary">
                                        <FaFacebook /><i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>
                                <li className="ms-4">
                                    <a to="#" className="link-danger">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li className="ms-4">
                                    <a to="#" className="link-info">
                                        <FaTwitter />
                                    </a>
                                </li>
                            </ul>

                        </span>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="container my-5 ">
                <div className="row ">
                    <div className="col-lg-4 text-center my-2">

                        <div className="card mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGKgnejGlf23w/profile-displayphoto-shrink_800_800/0/1658205643961?e=1670457600&v=beta&t=pQHuaxCIjETPIw1-BAjxu0z0esUZX-31kMXveGhu4yY" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4 className='text-white'>Suyash Khandalkar</h4>
                                        <p className="text-secondary mb-1">MERN Stack Developer</p>
                                        <p className="text-muted font-size-sm">Nagpur</p>
                                        <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/suyash-khandalkar/" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 text-center my-2">

                        <div className="card mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://media-exp1.licdn.com/dms/image/D4D03AQG4OQ5AbbpvFQ/profile-displayphoto-shrink_800_800/0/1665607275345?e=1671062400&v=beta&t=1rsc8iu1jDAiGY393-LUW1bpnXJfEgAiV_tkYV0VZHc" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4 className='text-white'>Kuldeep Pawar</h4>
                                        <p className="text-secondary mb-1">MERN Stack Developer</p>
                                        <p className="text-muted font-size-sm">Indore</p>
                                    </div>
                                    <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/kuldeep-pawar-768623112/" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 text-center my-2">

                        <div className="card mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQHNeXDPPqg0NQ/profile-displayphoto-shrink_800_800/0/1644835384438?e=1670457600&v=beta&t=G8KQe1zin6wKssVi1kqm7v1_212iNtzuiHZ5iq5fcHg" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4 className='text-white'>Shreyas Sarode</h4>
                                        <p className="text-secondary mb-1">MERN Stack Developer</p>
                                        <p className="text-muted font-size-sm">Pune</p>
                                        <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/shreyas-s-a3661017b/" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs