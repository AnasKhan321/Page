import React, { useState } from 'react'
import logo from './img/122.jpg';
import logo2 from './img/12.jpg'
import { BiSolidUser } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Course = () => {
    const [message, setmessage] = useState(false)
    const description = (message) => {
        console.log('description is here ')
        setmessage(true)
        toast(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className="courses my-4 mx-auto w-10/12">
            {message && <ToastContainer />}


            <h1 className="font-bold text-3xl text-center " >Top Courses </h1>

            <div className="cards flex justify-center my-4 flex-wrap  md:flex-row flex-col items-center ">

                <div className="card  cursor-pointer  rounded-xl  mx-4 w-8/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4" onMouseEnter={() => { description('Description of Course Should be here ') }} onMouseLeave={() => { setmessage(false) }} >

                    <div className="img-section">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>

                    <div className="content-section px-2">
                        <div className="rating flex justify-between my-2">
                            <div className="flex item-center justify-center" >
                                <p> 12 </p>
                                <BiSolidUser className="text-md my-1 mx-1" />

                            </div>

                            <div className="flex item-center  justify-center ">
                                <p> 4.7 </p>
                                <AiFillStar className="text-md my-1 mx-1" />

                            </div>

                        </div>

                        <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
                            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt=""  className="w-4/12 rounded-full"/> */}

                            <p> Anas Khan </p>
                        </div>

                        <div className="heading  text-center font-bold text-md ">
                            Introduction to Python Programming
                        </div>

                        <div className="price flex my-4 justify-between">
                            <p className="text-sm">Begginer Friendly </p>
                            <p> ₹2,000 </p>
                        </div>


                    </div>
                </div>

                <div className="card  cursor-pointer  rounded-xl  mx-4 w-8/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4" onMouseEnter={() => { description('Description of Course Should be here ') }} onMouseLeave={() => { setmessage(false) }} >

                    <div className="img-section">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>

                    <div className="content-section px-2">
                        <div className="rating flex justify-between my-2">
                            <div className="flex item-center justify-center" >
                                <p> 12 </p>
                                <BiSolidUser className="text-md my-1 mx-1" />

                            </div>

                            <div className="flex item-center  justify-center ">
                                <p> 4.7 </p>
                                <AiFillStar className="text-md my-1 mx-1" />

                            </div>

                        </div>

                        <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
                            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt=""  className="w-4/12 rounded-full"/> */}

                            <p> Anas Khan </p>
                        </div>

                        <div className="heading  text-center font-bold text-md ">
                            Introduction to Python Programming
                        </div>

                        <div className="price flex my-4 justify-between">
                            <p className="text-sm">Begginer Friendly </p>
                            <p> ₹2,000 </p>
                        </div>


                    </div>
                </div>



                <div className="card  cursor-pointer  rounded-xl  mx-4 w-8/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4" onMouseEnter={() => { description('Description of Course Should be here ') }} onMouseLeave={() => { setmessage(false) }} >

                    <div className="img-section">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>

                    <div className="content-section px-2">
                        <div className="rating flex justify-between my-2">
                            <div className="flex item-center justify-center" >
                                <p> 12 </p>
                                <BiSolidUser className="text-md my-1 mx-1" />

                            </div>

                            <div className="flex item-center  justify-center ">
                                <p> 4.7 </p>
                                <AiFillStar className="text-md my-1 mx-1" />

                            </div>

                        </div>

                        <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
                            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt=""  className="w-4/12 rounded-full"/> */}

                            <p> Anas Khan </p>
                        </div>

                        <div className="heading  text-center font-bold text-md ">
                            Introduction to Python Programming
                        </div>

                        <div className="price flex my-4 justify-between">
                            <p className="text-sm">Begginer Friendly </p>
                            <p> ₹2,000 </p>
                        </div>


                    </div>
                </div>



                <div className="card  cursor-pointer  rounded-xl  mx-4 w-8/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4" onMouseEnter={() => { description('Description of Course Should be here ') }} onMouseLeave={() => { setmessage(false) }} >

                    <div className="img-section">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>

                    <div className="content-section px-2">
                        <div className="rating flex justify-between my-2">
                            <div className="flex item-center justify-center" >
                                <p> 12 </p>
                                <BiSolidUser className="text-md my-1 mx-1" />

                            </div>

                            <div className="flex item-center  justify-center ">
                                <p> 4.7 </p>
                                <AiFillStar className="text-md my-1 mx-1" />

                            </div>

                        </div>

                        <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
                            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt=""  className="w-4/12 rounded-full"/> */}

                            <p> Anas Khan </p>
                        </div>

                        <div className="heading  text-center font-bold text-md ">
                            Introduction to Python Programming
                        </div>

                        <div className="price flex my-4 justify-between">
                            <p className="text-sm">Begginer Friendly </p>
                            <p> ₹2,000 </p>
                        </div>


                    </div>
                </div>


                <div className="card  cursor-pointer  rounded-xl  mx-4 w-8/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4" onMouseEnter={() => { description('Description of Course Should be here ') }} onMouseLeave={() => { setmessage(false) }} >

                    <div className="img-section">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>

                    <div className="content-section px-2">
                        <div className="rating flex justify-between my-2">
                            <div className="flex item-center justify-center" >
                                <p> 12 </p>
                                <BiSolidUser className="text-md my-1 mx-1" />

                            </div>

                            <div className="flex item-center  justify-center ">
                                <p> 4.7 </p>
                                <AiFillStar className="text-md my-1 mx-1" />

                            </div>

                        </div>

                        <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
                            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt=""  className="w-4/12 rounded-full"/> */}

                            <p> Anas Khan </p>
                        </div>

                        <div className="heading  text-center font-bold text-md ">
                            Introduction to Python Programming
                        </div>

                        <div className="price flex my-4 justify-between">
                            <p className="text-sm">Begginer Friendly </p>
                            <p> ₹2,000 </p>
                        </div>


                    </div>
                </div>


                <div className="card  cursor-pointer  rounded-xl  mx-4 w-8/12 md:w-3/12   shadow-xl border-2 shadow-slate-300  hover:shadow-pink-200 p-1 font-bold my-4" onMouseEnter={() => { description('Description of Course Should be here ') }} onMouseLeave={() => { setmessage(false) }} >

                    <div className="img-section">
                        <img src={logo} alt="" className="rounded-xl" />
                    </div>

                    <div className="content-section px-2">
                        <div className="rating flex justify-between my-2">
                            <div className="flex item-center justify-center" >
                                <p> 12 </p>
                                <BiSolidUser className="text-md my-1 mx-1" />

                            </div>

                            <div className="flex item-center  justify-center ">
                                <p> 4.7 </p>
                                <AiFillStar className="text-md my-1 mx-1" />

                            </div>

                        </div>

                        <div className="teacher text-center font-bold text-xl my-2 flex  flex-col items-center justify-center ">
                            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt=""  className="w-4/12 rounded-full"/> */}

                            <p> Anas Khan </p>
                        </div>

                        <div className="heading  text-center font-bold text-md ">
                            Introduction to Python Programming
                        </div>

                        <div className="price flex my-4 justify-between">
                            <p className="text-sm">Begginer Friendly </p>
                            <p> ₹2,000 </p>
                        </div>


                    </div>
                </div>




            </div>
        </div>
    )
}

export default Course