
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/science/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          یادگیری شیرین علوم، ساده‌تر از همیشه
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
          به وبسایت آموزشی من خوش آمدید. اینجا می‌توانید به مجموعه‌ای کامل از ویدیوها، جزوات و کاربرگ‌های درس علوم برای پایه‌های هفتم تا نهم دسترسی داشته باشید.
        </p>
        <a 
          href="#grades" 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          شروع یادگیری
        </a>
      </div>
    </section>
  );
};

export default Hero;
