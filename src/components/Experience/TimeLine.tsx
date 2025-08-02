"use client";
import React from "react";

const timelineData = [
    {
        date: "2023",
        title: "Bắt đầu học lập trình",
        description: "Tìm hiểu HTML, CSS, JavaScript cơ bản.",
    },
    {
        date: "2024",
        title: "Tham gia thực tập Front-end",
        description: "Làm việc với React.js, Tailwind CSS, UIkit.",
    },
    {
        date: "2025",
        title: "Tốt nghiệp Cao đẳng FPT",
        description: "Hoàn thành đồ án tốt nghiệp và chuẩn bị đi làm.",
    },
];

const TimeLine = () => {
    return (
        <nav className="mt-10 uk-flex gap-7">
            <ul className="uk-nav gap-5 uk-width-1-1 grid grid-cols-2">
                <li className="!text-white p-5 bg-black rounded-lg relative after:absolute after:w-0.5 after:h-13 after:bg-[#3452ff] after:top-1/2 after:left-0 after:translate-y-[-50%]">
                    <time className="text-[#3452ff] !text-lg" dateTime="08/2023 - 09/2023">8/2024 - 9/2024</time>
                    <h4 className="!text-white !m-0 !mt-3 !text-2xl !font-medium">Thực tập FE</h4>
                    <p className="!m-0 !mt-2 text-zinc-400">Công ty TNHH công nghệ Optech</p>
                </li>
                <li className="!text-white p-5 bg-black rounded-lg relative after:absolute after:w-0.5 after:h-13 after:bg-[#3452ff] after:top-1/2 after:left-0 after:translate-y-[-50%]">
                    <time className="text-[#3452ff] !text-lg" dateTime="2022 - 2025 ">2022 - 2025</time>
                    <h4 className="!text-white !m-0 !mt-3 !text-2xl !font-medium">Công nghệ thông tin</h4>
                    <p className="!m-0 !mt-2 text-zinc-400">CĐ FPT Polytechnic - Tp Hồ Chí Minh</p>
                </li>
            </ul>
        </nav>
    );
};

export default TimeLine;
