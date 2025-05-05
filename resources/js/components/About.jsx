import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import mainwalpaper from "../assets/images/mainwalpaper.jpg";
import farmjpg2 from "../assets/images/farmjpg2.avif";
import imageproject1 from "../assets/images/imageproject1.jpg";
import premiumquality1 from "../assets/images/premiumquality1.jpg";
import lastimage from "../assets/images/lastimage.jpg";
import origin from "../assets/images/origin.jpg";

export const About = () => {
  return (
   <div className="container-fluid">
         {/* <Header/> */}
      {/* Hero Image */}
      <div className="row">
        <div className="col m-3 d-flex justify-content-center">
          <img
            src={mainwalpaper}
            alt="main wallpaper"
            className="img-fluid rounded"
            style={{ maxHeight: "17rem", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Section 1 */}
      <div className="row flex-column flex-md-row align-items-center my-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={farmjpg2}
            alt="farm"
            className="img-fluid rounded"
            style={{ maxWidth: "70%" }}
          />
        </div>
        <div className="col-md-6 px-4">
          <h2>A Taste of Pure Goodness</h2>
          <p>
            At <b>GHARAYA</b>, we bring you the finest produce, fresh from the farm to your table. Our commitment to quality means that every bite is bursting with natural flavor, grown with care by local farmers who take pride in what they do. Whether it's crisp vegetables, juicy fruits, or farm-fresh eggs, you can trust that every item we deliver is handpicked at the peak of freshness, ensuring you get nothing but the best.
          </p>
        </div>
      </div>

      {/* Why Kisan Connect */}
      <div className="row text-center mb-4">
        <h1><b>Why Kisan Connect?</b></h1>
      </div>

      {/* Icons Section */}
      <div className="row text-center  px-4 py-3 g-4">
        {[
          { icon: "heart", title: "A Taste of Pure Goodness" },
          { icon: "arrow-repeat", title: "Discover Endless Options" },
          { icon: "p-circle-fill", title: "Premium Quality Vegetables" },
          { icon: "map", title: "Origin Tracking" }
        ].map((item, index) => (
          <div className="div-box col-6 col-md-3 m-auto mt-4 p-5" key={index}>
              <h1 className="text-success">
                <i className={`bi bi-${item.icon}`}></i>
              </h1>
              <p><b>{item.title}</b></p>
            </div>
        ))}
      </div> 

      {/* Section 2 */}
      <div className="row flex-column flex-md-row align-items-center my-5">
        <div className="col-md-6 px-4 order-2 order-md-1">
          <h2>Discover Endless Options</h2>
          <p>
            At <b>GHARAYA</b>, we offer endless options to ensure you find exactly what you need whether it is for your home, restaurant, or personal. With our diverse range of vegetables, the possibilities are limitless.
          </p>
        </div>
        <div className="col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={imageproject1}
            alt="Discover"
            className="img-fluid rounded"
            style={{ maxWidth: "70%" }}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="row flex-column flex-md-row align-items-center my-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={premiumquality1}
            alt="Premium"
            className="img-fluid rounded"
            style={{ maxWidth: "70%" }}
          />
        </div>
        <div className="col-md-6 px-4">
          <h2>Premium Quality Vegetables</h2>
          <p>
            At <b>GHARAYA</b>, we are committed to bringing you premium quality vegetables that stand out in freshness, taste, and nutritional value. Grown in the best conditions, our vegetables are carefully selected, ensuring that only the finest produce reaches your table.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="row flex-column flex-md-row align-items-center my-5">
        <div className="col-md-6 px-4 order-2 order-md-1">
          <h2>Origin Tracking</h2>
          <p>
            At <b>GHARAYA</b>, we believe in complete transparency and the importance of knowing where your food comes from. With our origin tracking system, you can trace the journey of every vegetable from the moment it's harvested to when it reaches your table.
          </p>
        </div>
        <div className="col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={origin}
            alt="Origin"
            className="img-fluid rounded"
            style={{ maxWidth: "70%" }}
          />
        </div>
      </div>

      {/* Final Section */}
      <div className="row flex-column flex-md-row align-items-center my-5">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={lastimage}
            alt="GHARAYA"
            className="img-fluid rounded"
            style={{ maxWidth: "70%" }}
          />
        </div>
        <div className="col-md-6 px-4">
          <h2>GHARAYA.COM</h2>
          <p>
            Connecting 10K+ farmer families with 3.1L+ happy families in Jabalpur. We've also gone offline with our farm stores in Jabalpur SabjiMandi. Our farm-to-fork concept ensures you receive pure, fresh, hygienic, and top-quality produce, packed with essential nutrients for optimal health.
          </p>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};
