// src/components/AboutUsPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between animate-fade-in">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold animate-scale-up">О нашей компании</h1>
            <p className="mt-4 text-xl">
              Shirin — узнаваемый бренд в Узбекистане, специализирующийся на
              производстве сладких кукурузных продуктов. Мы стремимся привнести
              сладость в каждый дом, используя только лучшие ингредиенты.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/images/IMG_5468.PNG"
              alt="Shirin Brand Showcase"
              className="w-2/3 animate-slide-up"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-bl from-purple-300 via-pink-300 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <img
              src="/images/our-values.PNG"
              alt="Our Values"
              className="w-2/3 animate-bounce-in"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl font-bold animate-rotate-in">Наши ценности</h2>
            <p className="text-xl mt-4">
              Мы ценим качество, инновации и наследие. Каждый продукт Shirin
              создается с душой и уважением к традициям узбекской кулинарии.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold animate-fade-in">Наш подход к бизнесу</h2>
            <p className="mt-4 text-xl animate-slide-right">
              Наша цель — не только производство, но и создание продуктов,
              которые приносят радость. Мы активно внедряем экологически чистые
              технологии и поддерживаем устойчивое развитие аграрного сектора
              Узбекистана.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/images/our-approach.PNG"
              alt="Our Approach"
              className="w-2/3 animate-slide-up"
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Certificates Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 animate-scale-up">Сертификаты</h2>
          <p className="text-gray-600 mt-2 text-lg px-6 animate-slide-up">
            Shirin сертифицирована по международным стандартам качества и
            безопасности продукции. Наши сертификаты — это гарантия высокого
            уровня каждого изделия.
          </p>
          <div className="flex flex-wrap justify-center gap-16 mt-4">
            <img
              src="/images/certificate1.jpg"
              alt="ISO Quality Certificate"
              className="w-1/4 animate-bounce-in"
            />
            <img
              src="/images/certificate2.jpg"
              alt="Safety Certificate"
              className="w-1/4 animate-bounce-in"
            />
            <img
              src="/images/certificate3.jpg"
              alt="Sustainability Certificate"
              className="w-1/4 animate-bounce-in"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
