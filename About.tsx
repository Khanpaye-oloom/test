
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src="https://picsum.photos/seed/teacher/400/400" 
              alt="عکس معلم"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-xl border-4 border-white"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">درباره من</h2>
            <p className="text-gray-600 leading-loose mb-4">
              سلام! من یک معلم علوم با اشتیاق فراوان برای ساده‌سازی مفاهیم علمی هستم. هدف من از ایجاد این وبسایت، فراهم کردن یک منبع آموزشی جامع و در دسترس برای تمام دانش‌آموزان عزیز است تا بتوانند با علاقه و به آسانی درس علوم را بیاموزند و از آن لذت ببرند.
            </p>
            <p className="text-gray-600 leading-loose">
              امیدوارم محتوای این سایت برای شما مفید باشد و به پیشرفت تحصیلی شما کمک کند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
