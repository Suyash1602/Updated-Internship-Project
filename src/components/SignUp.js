import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import { NavLink } from 'react-router-dom';


// react icons
import { MdPersonAddAlt } from "react-icons/md";

function SignIn() {
    let [errMsg, setErrMsg] = useState("")
    let { register, handleSubmit, formState: { errors } } = useForm()
    let navigate = useNavigate();

    let gender = ['Male', 'Female', 'Other']


    let formSubmit = async (userObj) => {
        // http post request
        let res = await axios.post("/user/createUser", userObj)
        if (res.data.message === "User created") {
            // navigate to sign in
            // window.alert("User Created")
            navigate('/signin')
        }
        else {
            setErrMsg(res.data.message)
        }

    }

    return (
        <>
            <div className="conatiner contact-frm  my-5 mx-5">
                <div className='row' style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form p-5">
                        <h1 className="display-4 fw-bolder">Hi, Welcome! </h1>
                        <p className="lead text-center">Enter Your Credentials To Sign Up</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/signin" className="btn btn-outline-light rounded-pill pb-2 w-50">Sign In</NavLink>
                    </div>





                    <div className="container w-50 m-auto mt-5 col-md-6">
                        <div className='Signup pb-5'>
                            <div className='container  rounded p-3 form-wrapper mb-5' >
                                <div className="text-center display-3 text-light mb-3">Sign Up</div>


                                {/* Duplicate user message */}
                                {errMsg !== "" && <Alert className='text-center' variant="danger" >User already exist chose another username.</Alert>}

                                {/* form */}
                                <form className='form text-left' onSubmit={handleSubmit(formSubmit)}>
                                    {/* username */}
                                    <div class="form-floating mb-3">
                                        <input type="text" className="form-control bg-transparent text-white border border-bottom border-dark" id="floatingInput" placeholder="name@example.com" {...register("username", { required: true, minLength: 4, maxLength: 6 })} />
                                        <label for="floatingInput" className='text-white'>Username</label>

                                        {/* validation error message */}
                                        {errors.username?.type === 'required' && <p className='text-danger mt-1'>Username is required</p>}
                                        {errors.username?.type === 'minLength' && <p className='text-danger mt-1'>Minimum length should be 4</p>}
                                        {errors.username?.type === 'maxLength' && <p className='text-danger mt-1'>Maximun length should be 6</p>}
                                    </div>


                                    {/* password */}
                                    <div class="form-floating mb-4">
                                        <input type="password" className="form-control bg-transparent text-white border border-dark border-end" id="floatingPassword" placeholder="Password" {...register("password", { required: true })} />
                                        <label for="floatingPassword" className='text-white'>Password</label>
                                        {/* validation error message */}
                                        {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password is required</p>}
                                    </div>

                                    {/* Email */}
                                    <div class="form-floating mb-4">
                                        <input type="email" className="form-control bg-transparent text-white border border-dark" id="floatingInput" placeholder="name@example.com" {...register("email", { required: true })} />
                                        <label for="floatingInput" className='text-white'>Email</label>

                                        {/* validation error message */}
                                        {errors.email?.type === 'required' && <p className='text-danger mt-1'>Email is required</p>}
                                    </div>

                                    {/* date of birth */}
                                    <div class="form-floating mb-3">
                                        <input type="date" className="form-control bg-transparent text-white border border-dark" id="floatingInput" placeholder="name@example.com" {...register("dob", { required: true })} />
                                        <label for="floatingInput" className='text-white'>DOB</label>

                                        {/* validation error message */}
                                        {errors.dob?.type === 'required' && <p className='text-danger mt-1'>Date is required</p>}
                                    </div>


                                    {/* gender */}
                                    <div className='mb-3'>
                                        <label htmlFor="gen" className="form-label fw-semibold text-white">Gender</label>
                                        {
                                            gender.map((gen, index) => {
                                                return (
                                                    <div className='form-check' key={index}>
                                                        <input type='radio'
                                                            id={gen}
                                                            className='form-check-input'
                                                            value={gen}
                                                            {...register('gender', { required: true })}>
                                                        </input>
                                                        <label htmlFor={gen} className="form-check-label fw-semibold text-white">{gen}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                        {errors.gender?.type === 'required' && <p className='text-danger mt-1'>Gender is required</p>}
                                    </div>


                                    {/* submit button */}
                                    <div className='container text-center'>
                                        <button type='submit' className='btn btn-pill btn-info my-4 text-center'>Sign Up <MdPersonAddAlt /> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn