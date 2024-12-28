import React from 'react';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800 animate-scale-up">
          Свяжитесь с нами
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
          У вас возникла техническая проблема? Хотите оставить отзыв о новой функции? Нужны
          подробности о нашем бизнес-плане? Сообщите нам.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ваш email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="name@пример.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Тема
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Расскажите, чем мы можем помочь"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ваше сообщение
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="Оставьте комментарий..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-orange-light"
          >
            Отправить сообщение
          </button>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default ContactUsPage;
