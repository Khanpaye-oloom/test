
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <h3 className="text-2xl font-bold mb-2">خانه علوم</h3>
        <p className="mb-4">یادگیری لذت‌بخش علم را با ما تجربه کنید.</p>
        <div className="border-t border-gray-700 mt-6 pt-6">
          <p className="text-gray-400 text-sm">
            © {currentYear} تمامی حقوق برای خانه علوم محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
