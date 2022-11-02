import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from "react-router-dom";

import { HiOutlineViewGridAdd } from "react-icons/hi";


function AddProduct() {
    let { register, handleSubmit, formState: { errors } } = useForm()

    let [errMsg, setErrMsg] = useState("")
    let navigate = useNavigate();


    let addProduct = async (productObj) => {
        let res = await axios.post("/product/createProduct", productObj)
        if (res.data.message === "Product created") {
            window.alert("Product added successfully.")
            navigate("/productList")
        } else {
            setErrMsg(res.data.message)
        }
    }
    return (
        <>
            <div className="conatiner shadow my-5 mx-5">
                <div className='row' style={{ background: "rgb(0, 0, 0, 0.6)" }}>
                    <div className="text-center display-3 text-white mb-3">Add Products</div>

                    <div className="container w-50 mt-5">
                        <div className='Signup pb-5'>
                            <div className='container  shadow-lg rounded p-3 form-wrapper mb-5' >

                                {/* Duplicate user message */}
                                {errMsg !== "" && <Alert className='text-center' variant="danger" >Product already exist.</Alert>}

                                {/* form */}
                                <form className='form text-left' onSubmit={handleSubmit(addProduct)}>

                                    {/* ProductName */}
                                    <div class="form-floating mb-3">
                                        <input type="text" className="form-control bg-transparent text-white border border-dark" id="floatingInput" placeholder='Product Name'  {...register("productname", { required: true })} ></input>
                                        <label for="floatingInput" className='text-white'>Products Name</label>


                                        {/* validation error message */}
                                        {errors.productname?.type === 'required' && <p className='text-danger mt-1'>Product Name is required</p>}
                                    </div>

                                    {/* ProductCategory */}
                                    <div className="form-floating mb-3">
                                        <input type="text" id="floatingProductCategory" placeholder='Product Category' className="form-control bg-transparent text-white border border-dark border-end" {...register("productcategory", { required: true })} ></input>
                                        <label htmlFor="productCategory" className="form-label text-white">Product Category</label>

                                        {/* validation error message */}
                                        {errors.productname?.type === 'required' && <p className='text-danger mt-1'>Product Category is required</p>}
                                    </div>


                                    {/* date of Creation */}
                                    <div className="form">
                                        <label htmlFor="creation" className="form-label text-white">Creation Date</label>
                                        <input type="date" id="creation" className="form-control bg-transparent text-white border border-dark border-end" {...register("creation", { required: true })}></input>
                                        {/*validation error message  */}
                                        {errors.creation?.type === 'required' && <p className='text-danger mt-1'>Creation Date is required</p>}
                                    </div>

                                    {/* date of Expiry */}
                                    <div className="form">
                                        <label htmlFor="expiry" className="form-label text-white">Expiry Date</label>
                                        <input type="date" id="expiry" className="form-control bg-transparent text-white border border-dark border-end" {...register("expiry", { required: true })}></input>
                                        {/*validation error message  */}
                                        {errors.expiry?.type === 'required' && <p className='text-danger mt-1'>Expiry Date is required</p>}
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            id="floatingmmrp"
                                            className="form-control bg-transparent text-white border border-dark border-end"
                                            placeholder='Product MRP'
                                            {...register("mrp", { required: true })}></input>
                                        <label htmlFor="floatingmrp" className='form-label  text-white' >MRP</label>

                                        {/*validation error message  */}
                                        {errors.mrp?.type === 'required' && <p className='text-danger mt-1'>MRP  is required</p>}
                                    </div>

                                    {/* submit button */}
                                    <div className='container text-center'>
                                        <button type='submit' className='btn btn-pill btn-info my-4 text-center'>Add Product <HiOutlineViewGridAdd /> </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default AddProduct