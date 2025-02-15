"use client"
import React, { useEffect, useState } from 'react'
import EditorDemo from '../editor/Editor'
const Form = () => {

    const [generatedContent, setGeneratedContent] = useState("")
    const [formData, setFormData] = useState({
        title: "",
        topic: "",
        keywords: "",
        audience: "",
        tone: "رسمی",
        length: "long"
    })

    //! مدیریت ورودی اینپون ها
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData);
    };

    // !مدیریت رادیو باتن طول محتوا
    const handleLengthChange = (e) => {
        setFormData((prev) => ({ ...prev, length: e.target.value }));
        console.log(formData);

    };

    const handleToneChange = (e) => {
        setFormData((prev) => ({ ...prev, tone: e.target.value }));
        console.log(formData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = "https://api.metisai.ir/api/v1/wrapper/openai_chat_completion/chat/completions";
        const apiKey = process.env.NEXT_PUBLIC_APIKEY; // API Key از .env.local خوانده شود

        if (!apiKey) {
            alert("کلید API تنظیم نشده است!");
            return;
        }

        //! تبدیل داده‌های فرم به فرمت API
        const requestData = {
            model: "gpt-3.5-turbo-0125",
            messages: [
                {
                    role: "system",
                    content: `You are a helpful assistant bot. You are a blog generator that is popular and smart. You can generate high-quality blogs based on the parameters provided. Pay close attention to the tone of the content, length of the blog, and all other parameters (title, topic, keywords, audience, etc.). Make sure the content aligns with the tone requested, follows the user's input accurately, and adjusts the length of the blog according to the specified length (short, medium, long).`
                },
                {
                    role: "user",
                    content: `عنوان: ${formData.title}\nموضوع: ${formData.topic}\nکلمات کلیدی: ${formData.keywords}\nمخاطب: ${formData.audience}\nلحن: ${formData.tone}\nطول محتوا: ${formData.length}`
                }
            ]
        };

        console.log("در حال ارسال درخواست...");
        console.log("داده‌های ارسال شده:", requestData);

        try {

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`خطا در API: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();

            //! استخراج پاسخ مدل و نمایش آن
            const generatedText = result.choices?.[0]?.message?.content || "محتوایی دریافت نشد.";
            await setGeneratedContent(generatedText);
            console.log(generatedText);

            localStorage.setItem("generatedContent", generatedText);
            setFormData({
                title: "",
                topic: "",
                keywords: "",
                audience: "",
                tone: "رسمی",
                length: "long"
            });

        } catch (error) {
            console.error("خطا در درخواست:", error);
            alert("مشکلی در ارسال درخواست رخ داد.");
        }
    };

    //! بارگذاری محتوای ذخیره‌شده از LocalStorage در ابتدای صفحه
    useEffect(() => {
        const savedContent = localStorage.getItem("generatedContent");
        if (savedContent) {
            setGeneratedContent(savedContent);
        }
    }, []);



    return (
        <>
            <div className=" flex justify-center items-center w-full ">
                <div className="flex flex-col md:flex-row gap-5 items-stretch justify-between container  my-4">

                    <div className="w-full px-8 my-4  lg:w-8/12 rounded-2xl shadow-2xl">
                        {/*//! عنوان فرم */}
                        <div className="flex">
                            <h1 className="font-bold text-black dark:text-white uppercase text-2xl md:text-3xl">میخوای دقیقا چه محتوایی بسازی؟</h1>
                        </div>
                        <form action="">
                            {/*//! فیلدهای ورودی */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input
                                    className="input-Form"
                                    type="text"
                                    placeholder="عنوان " name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                <input className="input-Form"
                                    type="text"
                                    placeholder="موضوع اصلی "
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange} />
                                <input className="input-Form"
                                    type="text"
                                    placeholder="کلمات کلیدی (با کاما جدا کنید)"
                                    name="keywords"
                                    value={formData.keywords}
                                    onChange={handleChange} />
                                <input className="input-Form"
                                    type="text" placeholder="مخاطب هدف"
                                    name="audience"
                                    value={formData.audience}
                                    onChange={handleChange} />
                            </div>

                            {/*//! انتخاب لحن و سبک */}
                            <div className="my-4">
                                <label className="block font-bold text-white/85">لحن محتوا رو انتخاب کنید</label>
                                <select
                                    className="input-Form mt-2"
                                    name="tone"
                                    value={formData.tone}
                                    onChange={handleToneChange}
                                >
                                    <option value="رسمی">رسمی</option>
                                    <option value="دوستانه">دوستانه</option>
                                    <option value="آموزشی">آموزشی</option>
                                    <option value="طنز">طنز</option>
                                </select>
                            </div>

                            {/* //! انتخاب طول محتوا */}
                            <div className="my-4">
                                <label className="block font-bold">طول محتوا:</label>
                                <div className="flex space-x-4 mt-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="length" value="short" className="mx-2" checked={formData.length === 'short'} onChange={handleLengthChange} />
                                        <span className='text-black dark:text-white'>کوتاه</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="length" value="medium" className="mx-2" checked={formData.length === 'medium'} onChange={handleLengthChange} />
                                        <span className='text-black dark:text-white'>متوسط</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="length" value="long" className="mx-2" checked={formData.length === 'long'} onChange={handleLengthChange} />
                                        <span className='text-black dark:text-white'>بلند</span>
                                    </label>
                                </div>
                            </div>

                            <div className="my-2">
                                <button type='submit' onClick={handleSubmit} className="uppercase text-sm font-bold tracking-wide bg-[#182237] hover:bg-white  hover:text-black duration-150 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    ایجاد بلاگ
                                </button>
                            </div>
                        </form>


                    </div>


                    <div className="w-full lg:w-2/6 px-8 py-12 ml-auto bg-[#182237] rounded-2xl">

                        <h2 className="text-white font-bold text-xl">محتوای تولید شده:</h2>
                        {/* <p className="text-white/50 text-base mt-4">{generatedContent || "هنوز محتوایی تولید نشده است."}</p> */}
                        <EditorDemo content={generatedContent} />
                    </div>

                </div >
            </div >
        </>

    )
}

export default Form
