import React from 'react';
import { useForm } from "react-hook-form";

function Form() {
    const { register,handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
     <>
       <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div className="my-5">
                            <form onSubmit={handleSubmit(onSubmit)} id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating">
                                    <input
                                    {...register("Name", { required: true, minLength: 5 })}
                                    className="form-control"
                                    id="name" type="text"
                                    placeholder="Enter your name..."
                                    data-sb-validations="required" />
                                    {errors.Name && "minLength is five"}
                                    <label >Name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating">
                                    <input
                                    {...register('Email',{
                                        pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                                    )}
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email..."
                                    data-sb-validations="required,email" />
                                     {errors.Email && "Pls enter correct email"}
                                    <label>Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating">
                                    <input
                                    {...register('Phone',{
                                        pattern :/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
                                    })}
                                    className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
                                    {errors.Phone && "Pls enter correct Phone"}
                                    <label >Phone Number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="message" placeholder="Enter your message here..." style = {{height : '12rem' }} data-sb-validations="required"></textarea>
                                    <label >Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br />
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     </>
    );
}

export default Form;