import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';



function Home() {
    return (
        <>
            <div>
                <section id="product">
                    <div className="container my-5 py-5">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="display-6 text-center mb-4"> <b>The Premium Products</b> </h1>
                                <h3 className="fs-5 text-center mb-0">Your Home Store</h3>

                                <hr className='w-25 mx-auto' />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card p-3 mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                                    <div className="card-body text-center text-white">
                                        <img src="https://ocdn.eu/images/pulscms/MDU7MDA_/b76501c2e383f8d84c319f5e47a96752.jpeg" className="img-fluid " width="270px" height="200px"  ></img>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Iphone 14</h5>
                                        <p className="card-text lead">Mobile Phones <br /><b> Price: ₹1,40,000</b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                                    <div className="card-body text-center text-white">
                                        <img src='https://assets.mspimages.in/wp-content/uploads/2021/07/oneplus_tv_u1s_product_shots_11.jpg' className="img-fluid " width="270px" height="270px" ></img>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">One Plus</h5>
                                        <p className="card-text lead">Television<br /><b> Price: ₹1,00,000</b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                                    <div className="card-body text-center text-white">
                                        <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657834292-lg-signature-twinwash-washing-machine-1657834285.jpg' className="img-fluid " width="270px" height="270px" ></img>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Samsung</h5>
                                        <p className="card-text lead">Washing Machine<br /><b> Price: ₹80,000</b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                                    <div className="card-body text-center text-white">
                                        <img src='https://tse3.mm.bing.net/th?id=OIP.YtAUSWI9dVrpxfjxPrj59QHaHa&pid=Api&P=0' className="img-fluid" width="270px" height="200px" ></img>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Hitachi</h5>
                                        <p className="card-text lead">Grinders<br /><b> Price: ₹12,000</b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                                    <div className="card-body text-center text-white">
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYs8nxVxVzMx0xUsDHHg4mcThMbd39givxGtnpVOfSIsjfIW-sWQKLHd4yT3UdcuFIKU&usqp=CAU' className="img-fluid" width="270px" height="200px" ></img>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Haier</h5>
                                        <p className="card-text lead">Refrigerator<br /><b> Price: ₹1,70,000</b> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3 mb-5" style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                                    <div className="card-body text-center text-white mt-4 mb-4">
                                        <img src="https://blog.pricekart.com/2018/06/01-5-Best-Home-Appliance-Brands-to-Choose-from-in-2018.jpg" className="img-fluid" width="270px" height="200px" ></img>
                                        <h5 className="card-title mb-3 fs-4 fw-bold text-white">For more such Electronic Appliances</h5>
                                        <NavLink to="/productList" className="btn btn-light text-primary mb-4">Click Here</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home