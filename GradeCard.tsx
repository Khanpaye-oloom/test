
import React from 'react';

interface GradeCardProps {
  grade: string;
  description: string;
  imageUrl: string;
}

const GradeCard: React.FC<GradeCardProps> = ({ grade, description, imageUrl }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img src={imageUrl} alt={`علوم پایه ${grade}`} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 right-0 p-6">
          <h3 className="text-white text-3xl font-bold">پایه {grade}</h3>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="font-semibold text-teal-600 hover:text-teal-700 transition-colors duration-300">
          مشاهده مطالب ←
        </a>
      </div>
    </div>
  );
};

export default GradeCard;
