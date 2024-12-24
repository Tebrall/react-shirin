import React from 'react';
import './Products.scss'; // Ensure this matches your file location

const ProductsPage = () => {
  return (
    <div className="products-page">

      <h2><strong>All Products<span>( 12 )</span></strong></h2>

      <div class="cards">
        <figure class="card">
          <img src="/images/product1.JPG" alt="Sweet Corn Classic" />
          <figcaption>Sweet Corn Classis</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product2.JPG" alt="Sweet Corn Premium" />
          <figcaption>Sweet Corn Premiums</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product3.JPG" alt="Sweet Corn Deluxe" />
          <figcaption>Sweet Corn Deluxe</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product4.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product5.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product6.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product7.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product4.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product5.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product6.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product7.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

        <figure class="card">
          <img src="/images/product8.JPG" alt="Sweet Corn Special" />
          <figcaption>Sweet Corn Special</figcaption>
        </figure>

      </div>

      <h2><strong>CERTIFICATES</strong></h2>

      <div class="news">
        <figure class="article">
          <img src="/images/about.JPG" alt="New Recipe" />
          <figcaption>
            <h3>New Recipe</h3>
            <p>
              Discover our all-new sweet corn recipes for a delightful cooking
              experience!
            </p>
          </figcaption>
        </figure>

        <figure class="article">
          <img src="/images/about.JPG" alt="Limited Offer" />
          <figcaption>
            <h3>Limited Offer</h3>
            <p>
              Get a special discount on our premium sweet corn products for a
              limited time.
            </p>
          </figcaption>
        </figure>

        <figure class="article">
          <img src="/images/about.JPG" alt="Limited Offer" />
          <figcaption>
            <h3>Limited Offer</h3>
            <p>
              Get a special discount on our premium sweet corn products for a
              limited time.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>

  );
};

export default ProductsPage;
