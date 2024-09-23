import React, { useState } from 'react';
import '../../../Style/kidsProduct.css';
// import Header from '../../../Common/Header'
import "../../../Style/product.css"
import '../../../Style/beauty.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
// import { GoChevronDown } from "react-icons/go"
import { FiChevronDown } from "react-icons/fi";
import Footer from '../../../Common/Footer';
import Navbar from '../../../Common_1/Navbar';

function Beauty() {
    const [open, setOpen] = useState(false)
    const data = ['ABV', 'EREWR', 'TEYT', 'EEWWEG', 'HEUUEW', 'GUWEW', 'SDHJSAH']
    return (

        <>
            <Navbar />
            <div class="itemnumber">
                <span style={{ fontSize: "26px", marginLeft: "53px" }}>Eorssm <p style={{ fontSize: "20px", position: "relative", top: "5px", fontWeight: 300 }}>- 85 items</p> </span>
            </div>
            <div class="container-fluid mt-5">
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
            <div class="container-fluid mt-2">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-xl-12" >
                        <hr />
                    </div>
                </div>
            </div>


            <div class="container-fluid">
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
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="beauty">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/moisturizer-cream/p/i/u/-original-imaggbtweyvhjkmz.jpeg?q=70"} class="card-img-top beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/moisturizer-cream/k/m/n/-original-imaggbtwfb9djtff.jpeg?q=70"} class="card-img-top beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/moisturizer-cream/g/9/8/-original-imagh4wykaycg8fp.jpeg?q=70"} class="card-img-top beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/moisturizer-cream/n/2/6/-original-imaggbtwa8khfgxc.jpeg?q=70"} class="card-img-top beat" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/ky7lci80/moisturizer-cream/7/d/o/-original-imagahv3sfzfyj5j.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/ky7lci80/moisturizer-cream/w/b/i/-original-imagahv3qjnzhg2b.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/ky7lci80/moisturizer-cream/c/h/8/-original-imagahv3fggqg953.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/ky7lci80/moisturizer-cream/j/0/c/-original-imagahv3mbnvffbb.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/scrub/r/w/b/-original-imagkpjfvfurebth.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/scrub/0/z/k/-original-imagkpjfgtqfyuyu.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/scrub/l/d/a/-original-imagkpjfvznzysfz.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/scrub/c/b/v/-original-imagkpjfbhu9sdjv.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" >
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/ki96c280-0/face-wash/g/s/o/150-men-clay-d-tox-deep-cleansing-icy-face-wash-for-oily-skin-original-imafy34cjvz5rq6j.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/ki96c280-0/face-wash/9/p/i/150-men-clay-d-tox-deep-cleansing-icy-face-wash-for-oily-skin-original-imafy34chc6guhmp.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/km57hjk0/face-wash/m/y/2/300-oil-clear-facewash-oil-control-deep-cleansing-facewash-for-original-imagf456nzkzydng.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/km57hjk0/face-wash/f/m/t/300-oil-clear-facewash-oil-control-deep-cleansing-facewash-for-original-imagf456nzvuyykb.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/kids-ethnic-set/6/n/q/6-7-years-jute-green-32-deva-creation-original-imagmyrczzphhvxb.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kgtqhe80/kids-dungaree-romper/z/v/v/0-6-months-leopinkhathi-leo-collection-original-imafwygtywzzxdzh.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kgtqhe80/kids-dungaree-romper/z/v/v/0-6-months-leopinkhathi-leo-collection-original-imafwygtzeejvdfj.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kh3qkcw0/kids-apparel-combo/a/t/5/3-6-months-leocb-bp-002-leo-collection-original-imafx724hgharhpz.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kfyasnk0/deodorant/b/h/p/150-blush-deodorant-spray-for-women-150-ml-deodorant-spray-original-imafwazdykcveufm.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kfyasnk0/deodorant/b/h/p/150-blush-deodorant-spray-for-women-150-ml-deodorant-spray-original-imafwazdykcveufm.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kfyasnk0/deodorant/b/h/p/150-blush-deodorant-spray-for-women-150-ml-deodorant-spray-original-imafwazd8yfc3yr5.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kfyasnk0/deodorant/b/h/p/150-blush-deodorant-spray-for-women-150-ml-deodorant-spray-original-imafwazdzkhrpzk3.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kzrbiq80/moisturizer-cream/0/c/e/-original-imagbzy4uwv2wddp.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kzrbiq80/moisturizer-cream/h/r/v/-original-imagbzy4hzgsdrh6.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/l1dwknk0/moisturizer-cream/q/b/6/-original-imagczyqj2g9bjvz.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kzrbiq80/moisturizer-cream/5/l/d/-original-imagbzy4cqzgufma.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/moisturizer-cream/a/r/q/400-shea-butter-and-cocoa-butter-moisturizing-body-lotion-deep-original-imagjwkymmg9nzcm.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/moisturizer-cream/3/g/0/400-shea-butter-and-cocoa-butter-moisturizing-body-lotion-deep-original-imagjwkyddufaefz.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/krf91u80/moisturizer-cream/h/o/c/400-shea-butter-and-cocoa-butter-moisturizing-body-lotion-deep-original-imag57mt8rm9ygyg.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/krf91u80/moisturizer-cream/0/5/d/400-shea-butter-and-cocoa-butter-moisturizing-body-lotion-deep-original-imag57mtfdpkw3ds.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/hand-wash-sanitizer/j/3/k/-original-imagnza9vx7cy9ch.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/hand-wash-sanitizer/r/j/q/-original-imagnza92ymqm5au.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/hand-wash-sanitizer/p/y/x/-original-imagnza9nkvyvnc3.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/hand-wash-sanitizer/c/r/f/-original-imagqf5s9qavt2e4.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500" class="hovre">
                                    <img src={"https://sslimages.shoppersstop.com/sys-master/images/hbd/h2a/29420863520798/S23ANDGDRX189WI_WINE_alt4.jpg_2000Wx3000H"} class="card-img-top beat" alt="" />
                                    <img src={"https://sslimages.shoppersstop.com/sys-master/images/hb9/h38/29419958272030/S23ANDGDRX189WI_WINE.jpg_2000Wx3000H"} class="card-img-top beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kkbh8cw0/hair-oil/k/f/7/bhringa-indulekha-original-imafzzrt4twz3cg4.jpeg?q=70"} class="card-img-top beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/kkbh8cw0/hair-oil/m/j/h/bhringa-indulekha-original-imafzzrtdhujkywt.jpeg?q=70"} class="card-img-top beat" alt="" />
                                </AliceCarousel>
                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/l1grgcw0/toner/v/z/v/-original-imagdypszc9vc3ng.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/l1grgcw0/toner/y/5/5/-original-imagdypstjfvxufd.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/l1grgcw0/toner/e/y/b/-original-imagdypszfzwaxdg.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/l1grgcw0/toner/t/v/w/-original-imagdypsnae8maqh.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                                <AliceCarousel autoPlay autoPlayInterval="2500">
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/soap/l/p/o/-original-imagjzquyquc4s9j.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/soap/s/b/p/-original-imagjwphzbapuzuu.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/soap/e/r/c/-original-imagjzquwbykgr53.jpeg?q=70"} class="sliderimg beat" alt="" />
                                    <img src={"https://rukminim1.flixcart.com/image/832/832/xif0q/soap/l/8/9/-original-imagjzquju5jqyrh.jpeg?q=70"} class="sliderimg beat" alt="" />
                                </AliceCarousel>

                                <div class="product_price">
                                    <h3>boAt</h3>
                                    <span>Storm Call Smart watch</span>
                                    <p>Rs.1299</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </ >
    )
}


export default Beauty