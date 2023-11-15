import React, { useState } from 'react';
import bgImg from "../../../assets/login/118131.jpg"
import leafImg from "../../../assets/login/leaf.png"
import leaf2Img from "../../../assets/login/leaf2.png"
import leaf3Img from "../../../assets/login/leaf3.png"
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState(false);
    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
    }




    const keyframes = `
        @keyframes animateBg {
            100% {
                filter: hue-rotate(360deg);
            }
        }
    `;
    const keyframes2 = `
    @keyframes animate {
        0% {
            opacity: 0;
            top: -10%;
            transform: translateX(20px) rotate(0deg);
        }
        10% {
            opacity: 1;
        }
        20% {
            transform: translateX(-20px) rotate(45deg);
        }
        40% {
            transform: translateX(-20px) rotate(90deg);
        }
        60% {
            transform: translateX(20px) rotate(180deg);
        }
        80% {
            transform: translateX(-20px) rotate(45deg);
        }
        100% {
            top: 110%;
            transform: translateX(20px) rotate(225deg);
        }
    }
`;
    return (

        <div className='relative  py-12'>
            <style>{keyframes}</style>
            <div style={{ backgroundImage: `url(${bgImg})`, animation: 'animateBg 10s linear infinite' }} className='relative overflow-hidden bg-cover bg-center min-h-screen animateBg z-10'>

                <style>{keyframes2}</style>
                <div className="leaves">
                    <img src={leafImg} alt="" className="w-10 absolute z-20" style={{ left: '20%', animation: 'animate 20s linear infinite' }} />
                    <img src={leaf2Img} alt="" className="w-10 absolute z-20" style={{ left: '40%', animation: 'animate 14s linear infinite' }} />
                    <img src={leaf3Img} alt="" className="w-10 absolute z-20" style={{ left: '65%', animation: 'animate 16s linear infinite' }} />
                    <img src={leaf2Img} alt="" className="w-10 absolute z-20" style={{ left: '80%', animation: 'animate 15s linear infinite' }} />
                    <img src={leafImg} alt="" className="w-10 absolute z-20" style={{ left: '5%', animation: 'animate 18s linear infinite' }} />
                </div>




                <div className='w-full md:w-2/3 lg:w-1/2 card shadow-2xl bg-slate-500 p-2 sm:p-10 bg-opacity-60 mx-auto my-6'>
                    <h1 className="text-5xl text-white font-bold">Sign Up now!</h1>
                    <form onSubmit={handelSignUp} className="card-body ">

                        <div className="mb-4 ">
                            <label className="text-3xl text-white my-2" htmlFor="name">Type Your Name</label>
                            <input id='name' className="w-full p-2 text-white bg-transparent border-b-4 border-black outline-none text-3xl" type="text" required name="name" placeholder='Your Name' />
                        </div>
                        <div className="mb-4 ">
                            <label className="text-3xl text-white my-2" htmlFor="photo">Photo Url</label>
                            <input id='photo' className="w-full p-2 text-white bg-transparent border-b-4 border-black outline-none text-3xl" type="text" required name="photo" placeholder='Photo Url' />
                        </div>
                        <div className="mb-4 ">
                            <label className="text-3xl text-white my-2" htmlFor="email">Type Your Email</label>
                            <input id='email' className="w-full p-2 text-white bg-transparent border-b-4 border-black outline-none text-3xl" type="email" required name="email" placeholder='email' />
                        </div>
                        <div className="mb-4 ">
                            <label className="text-3xl text-white my-2" htmlFor="email">Enter Your Password</label>
                            <input id='password' className="w-full p-2 text-white bg-transparent border-b-4 border-black outline-none text-3xl" type="Password" required name="password" placeholder='Password' />
                        </div>

                        <label className="label">
                            {error && <p>Error:is</p>}
                        </label>


                        <div className="form-control mt-3">
                            <input className="btn btn-primary bg-opacity-60" type="submit" value="Login" />
                        </div>
                    </form>
                    <h1 className='text-center text-white'>Already Have Account Please <Link to={'/login'}> <span className='font-extrabold ml-2 text-xl'>Sign In</span></Link></h1>

                </div>
            </div>





        </div>

    );
};

export default SignUp;