import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaInstagramSquare, FaLinkedin, FaMagic, FaPencilAlt, FaShareAlt, FaTwitter } from "react-icons/fa";

const Form = () => {
    return (
        <>
            <div className=" flex justify-center items-center w-full ">
                {/*//! <!-- COMPONENT CODE --> */}
                <div className="flex gap-5 items-stretch justify-between container  my-4 px-4 lg:px-20">

                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        {/*//! عنوان فرم */}
                        <div className="flex">
                            <h1 className="font-bold uppercase text-3xl md:text-5xl">میخوای دقیقا چه محتوایی بسازی؟</h1>
                        </div>

                        {/*//! فیلدهای ورودی */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input className="input-Form" type="text" placeholder="عنوان بلاگ" />
                            <input className="input-Form" type="text" placeholder="موضوع اصلی بلاگ" />
                            <input className="input-Form" type="text" placeholder="کلمات کلیدی (با کاما جدا کنید)" />
                            <input className="input-Form" type="text" placeholder="مخاطب هدف" />
                        </div>

                        {/*//! انتخاب لحن و سبک */}
                        <div className="my-4">
                            <label className="block font-bold text-gray-700">لحن محتوا رو انتخاب کنید</label>
                            <select className="input-Form mt-2">
                                <option>رسمی</option>
                                <option>دوستانه</option>
                                <option>آموزشی</option>
                                <option>طنز</option>
                            </select>
                        </div>

                        {/* //! انتخاب طول محتوا */}
                        <div className="my-4">
                            <label className="block font-bold text-gray-700">طول محتوا:</label>
                            <div className="flex space-x-4 mt-2">
                                <label className="flex items-center">
                                    <input type="radio" name="length" value="short" className="mx-2" />
                                    <span>کوتاه</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="length" value="medium" className="mx-2" />
                                    <span>متوسط</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="length" value="long" className="mx-2" />
                                    <span>بلند</span>
                                </label>
                            </div>
                        </div>

                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                ایجاد بلاگ
                            </button>
                        </div>
                    </div>


                    <div className="w-full lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            {/* عنوان اصلی */}
                            <h1 className="font-bold uppercase text-4xl my-4">مغز هوشمند</h1>

                            {/* توضیحات ابزار */}
                            <p className="text-gray-400">
                                به راحتی و با چند کلیک، محتوای بلاگ حرفه‌ای تولید کنید!
                                ابزار ما به شما کمک می‌کند تا بلاگ‌های جذاب و متناسب با نیاز کسب‌وکارتان بسازید.
                            </p>

                            {/* ویژگی‌های ابزار */}
                            <div className="flex items-start gap-3 my-4">
                                <div className="flex flex-col">
                                    <FaMagic className="size-8 mt-3" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">تولید سریع محتوا</h2>
                                    <p className="text-gray-400">
                                        فقط موضوع، کلمات کلیدی و سبک مورد نظر را وارد کنید و بلاگ خود را دریافت کنید!
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 my-4">
                                <div className="flex flex-col">
                                    <FaPencilAlt className="size-8 mt-3" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">سبک‌های متنوع</h2>
                                    <p className="text-gray-400">
                                        از رسمی تا دوستانه، سبک محتوای خود را انتخاب کنید.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 my-4">
                                <div className="flex flex-col">
                                    <FaShareAlt className="size-8 mt-3" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl ">انتشار آسان</h2>
                                    <p className="text-gray-400">
                                        محتوای نهایی را دانلود کنید یا مستقیماً در سایت خود منتشر کنید.
                                    </p>
                                </div>
                            </div>

                            {/* لینک‌های شبکه‌های اجتماعی */}
                            <div className="flex my-4">
                                <Link href="#" target="_blank" rel="noreferrer" className="rounded-full flex items-center justify-center bg-white h-8 w-8  mx-1 text-center pt-1">
                                    <FaTwitter className='text-blue-900 size-6' />
                                </Link>
                                <Link href="#" target="_blank" rel="noreferrer" className="rounded-full flex items-center justify-center bg-white h-8 w-8  mx-1 text-center pt-1">
                                    <FaInstagramSquare className='text-red-900 size-6' />
                                </Link>
                                <Link href="#" target="_blank" rel="noreferrer" className="rounded-full flex items-center justify-center bg-white h-8 w-8  mx-1 text-center pt-1">
                                    <FaLinkedin className='text-blue-900 size-6' />
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Form
