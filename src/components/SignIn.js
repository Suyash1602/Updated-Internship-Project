import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { userLoginLifeCycle } from '../store/userLoginSlice';
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import { NavLink } from 'react-router-dom';


// react icons
import { FaSignInAlt } from "react-icons/fa";

function SignIn() {

    let dispatch = useDispatch();

    let { register, handleSubmit, formState: { errors } } = useForm()
    let { userObj, isSuccess, isError, errMessage } = useSelector(state => state.userLogin);

    let formSubmit = (userCredObj) => {
        let actionObj = userLoginLifeCycle(userCredObj)
        dispatch(actionObj);
    }
    let navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            // navigate(`/productList/${userObj.username}`)
            navigate(`/addProduct/${userObj.username}`)
        }
    }, [isSuccess, isError])



    return (
        <>
            <div className="conatiner shadow my-5 mx-5">
                <div className='row' style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form p-5">
                        <h1 className="display-4 fw-bolder">Welcome Back!</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/signup" className="btn btn-outline-light rounded-pill pb-2 w-50">Sign Up</NavLink>
                    </div>

                    

                    <div className="container w-50 m-auto mt-5 col-md-6 " >
                        <div className='Signup pb-5'>
                        <div className="text-center display-3 text-white mb-3">Sign In</div>
                            <div className='container  shadow-lg rounded p-3 form-wrapper mb-5'  >

                                {/* invalid username and password msg */}
                                {isError === true && <Alert className='text-center' variant="danger" >{errMessage}</Alert>}

                                {/* form */}
                                <form className='form text-left' onSubmit={handleSubmit(formSubmit)}>
                                    {/* username */}

                                    <div class="form-floating mb-3">
                                        <input type="text" className="form-control bg-transparent text-white border border-dark" id="floatingInput" placeholder="name@example.com" {...register("username", { required: true, minLength: 4 })} />
                                        <label for="floatingInput" className='text-white'>Username</label>

                                        {/* validation error message */}
                                        {errors.username?.type === 'required' && <p className='text-danger mt-1'>Username is required</p>}
                                        {errors.username?.type === 'minLength' && <p className='text-danger mt-1'>Minimum length should be 4</p>}
                                    </div>

                                    {/* password */}

                                    <div class="form-floating">
                                        <input type="password" className="form-control bg-transparent text-white border border-dark border-end" id="floatingPassword" placeholder="Password" {...register("password", { required: true })} />
                                        <label for="floatingPassword" className='text-white'>Password</label>
                                        {/* validation error message */}
                                        {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password is required</p>}
                                    </div>

                                    {/* submit button */}
                                    <div className='container text-center'>
                                        <button type='submit' className='btn btn-pill btn-info  text-center mt-4'>Sign In <FaSignInAlt /> </button>
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