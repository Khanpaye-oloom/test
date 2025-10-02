
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import GradeCard from './components/GradeCard';
import About from './components/About';
import Footer from './components/Footer';
import { VideoCameraIcon } from './components/icons/VideoCameraIcon';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { ClipboardListIcon } from './components/icons/ClipboardListIcon';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">منابع آموزشی کامل</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-12">
              هر آنچه برای یادگیری و تسلط بر درس علوم نیاز دارید، در اینجا گردآوری شده است.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<VideoCameraIcon />}
                title="ویدیوهای آموزشی"
                description="تدریس مفهومی و جذاب مباحث درسی با مثال‌های کاربردی برای درک عمیق‌تر مطالب."
              />
              <FeatureCard
                icon={<BookOpenIcon />}
                title="جزوات و خلاصه‌نویسی‌ها"
                description="جزوات کامل و طبقه‌بندی شده برای مرور سریع و آمادگی برای امتحانات."
              />
              <FeatureCard
                icon={<ClipboardListIcon />}
                title="کاربرگ و نمونه سوال"
                description="مجموعه‌ای از کاربرگ‌های تمرینی و نمونه سوالات امتحانی برای سنجش و تثبیت یادگیری."
              />
            </div>
          </div>
        </section>

        <section id="grades" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">انتخاب پایه تحصیلی</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <GradeCard
                grade="هفتم"
                description="ورود به دنیای شگفت‌انگیز علوم با مباحث پایه‌ای و جذاب."
                imageUrl="https://picsum.photos/seed/science7/600/400"
              />
              <GradeCard
                grade="هشتم"
                description="عمیق‌تر شدن در مفاهیم زیست‌شناسی، شیمی، فیزیک و زمین‌شناسی."
                imageUrl="https://picsum.photos/seed/science8/600/400"
              />
              <GradeCard
                grade="نهم"
                description="آمادگی برای ورود به دوره دوم متوسطه با مطالب تکمیلی و پیشرفته‌تر."
                imageUrl="https://picsum.photos/seed/science9/600/400"
              />
            </div>
          </div>
        </section>

        <About />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
