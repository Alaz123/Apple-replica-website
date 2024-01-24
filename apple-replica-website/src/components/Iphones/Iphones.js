import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Iphones() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./Iphone.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log('Error: unable to fetch!!'));
  }, []);

  let flip = true;
  return (
    <div>
      <br /><br /><br />
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">
                <h2>iPhones</h2>
              </div>
              <div className="brief-description">The best for the brightest.</div>
            </div>
          </div>
          {products?.map((product) => {
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
              flip = !flip;
            }

            let productDiv = (
              <div key={product.product_url} className={`row justify-content-center text-center product-holder h-100`}>
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">{product.product_brief_description}</div>
                  <div className="starting-price">Starting at ${product.starting_price}</div>
                  <div className="monthly-price">${product.price_range}</div>
                  <div className="links-wrapper collecterAPI">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_url}`}>learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={product.product_img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
      <br />
    </div>
   
  );
}

export default Iphones;