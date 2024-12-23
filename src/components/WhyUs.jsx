// src/components/WhyUs.jsx
import React from 'react';
import './WhyUs.css';

const reasons = [
  {
    id: 1,
    title: 'Высокое качество',
    description:
      'Наша продукция проходит строгий контроль, чтобы каждый кусочек был свежим и вкусным.',
    image:
      '/images/whyuscard1.png',
  },
  {
    id: 2,
    title: 'Натуральные ингредиенты',
    description:
      'Мы используем лишь натуральные компоненты без искусственных добавок.',
    image:
      '/images/whyuscard2.png',
  },
  {
    id: 3,
    title: 'Необычные вкусы',
    description:
      'Мы работаем над уникальными вкусами, которых нет у других производителей.',
    image:
      '/images/whyuscard3.png',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="whyus-section">
      <h2 className="whyus-heading">Почему выбирают нас</h2>
      <div className="whyus-container">
        {reasons.map((reason) => (
          <div className="card" key={reason.id}>
            <img src={reason.image} alt={`reason-${reason.id}`} />
            <div className="card-content">
              <h2>{reason.title}</h2>
              <p>{reason.description}</p>
              <a href="#learn-more" className="button">
                Подробнее
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
