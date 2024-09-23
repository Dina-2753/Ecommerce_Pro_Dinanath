import React, { useState } from 'react';
import "../../../Style/product.css"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { GoChevronDown } from "react-icons/go"
import { FiChevronDown } from "react-icons/fi";
import Footer from '../../../Common/Footer';
import PageProgress from '../../../Common/PageProgress';
import { productData } from '../KidsPage/productData';



function KidsProduct() {
  const [open, setOpen] = useState(false)
  const data = ['ABV', 'EREWR', 'TEYT', 'EEWWEG', 'HEUUEW', 'GUWEW', 'SDHJSAH']

  const ProductCarousel = ({ images }) => {
    return (
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={0}
        infinite={false}
        disableButtonsControls={true}
        disableDotsControls={false}
        mouseTracking={false}
        touchTracking={false}
        animationDuration={3000}
        autoPlayStrategy="none"
      >
        {images.map((image, index) => (
          <img src={image} className="card-img-top" alt={`Slide ${index}`} key={index} />
        ))}
      </AliceCarousel>
    );
  };



  return (
    <div>
      <PageProgress />
      <div class="itemnumber">
        <span style={{ fontSize: "26px", marginLeft: "53px" }}>Eorssm <p style={{ fontSize: "20px", position: "relative", top: "5px", fontWeight: 300 }}>- 85 items</p> </span>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3 ">
            <div class="row">
              <h2 class="cardsd">Filters</h2>

            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-xl-2 ">
            <div class="row">
              <div class="col-md-4">
                <div class="dropdown" id="dorp">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Age
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4">
                <div class="dropdown" id="dorp">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Bundles
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="dropdown" id="dorp">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Size                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6">
            <div class="row">
              <div class="filterrate">
                <span onClick={() => setOpen(!open)}>Sort by:<p style={{ fontWeight: '700', position: 'relative', left: "5px", }}>Recommended</p> <FiChevronDown style={{ position: 'relative', left: "30px", top: '5px' }} /></span>

                {
                  open && <div class="listItem">
                    <ul>
                      {
                        data.map((item) => (
                          <li class="listmap" onClick={() => setOpen(false)} key={item}>{item}</li>
                        ))
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-xl-12" >
            <hr />
          </div>
        </div>
      </div>


      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-xl-2">
            <div class="row">
              <div class="col-12">
                <p class="category">CATEGORIES</p>
                <form>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Smart watch(40)</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="bands" name="bands" value="bands" />
                    <label for="subscribeNews">Fitness Bands(3)</label>
                  </div>
                  <hr></hr>
                  <h2 class="category">BRAND</h2>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Fire-Boltt(40)</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Noise(20)</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">BoAt(10)</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Realme(8)</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">HAMMER(4)</label>
                  </div>
                  <hr></hr>
                  <h2 class="category">PRICE</h2>

                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Rs.999 to Rs.5749</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Rs.5749 to Rs.8449</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Rs.9999 to Rs.12549</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Rs.13500 to 18500</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Rs.19000 to Rs.25500</label>
                  </div>
                  <hr></hr>

                  <h2 class="category">COLOR</h2>

                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Black</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Blue</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Grey</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Pink</label>
                  </div>
                  <div class="filtres">
                    <input type="checkbox" id="watch" name="watch" value="watch" />
                    <label class="n" for="subscribeNews">Green</label>
                  </div>
                  <hr></hr>
                </form>
              </div>

              <div class="col-3">
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-8 col-xl-10">
            <div class="row">


              {productData ? productData.map((product, index) => (
                <div className="col-xs-12 col-sm-12 col-md-6 col-xl-3" key={index}>
                  <ProductCarousel images={product.images} />
                  <div className="product_price">
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                    <p>{product.price}</p>
                  </div>
                </div>
              )) : null}

            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default KidsProduct