import React from 'react'
import '../../Style/Dashboard.css'
import { VscAccount } from "react-icons/vsc"
import { AiOutlineHeart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Dashboard() {
    return (
        <>
            <Header />
            <section class="dashboard">
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://www.itln.in/h-upload/2022/05/27/26062-myntra-introduces-under-48-hour-delivery.webp" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block" >
                                <Link to='/signup' class="btn btn-danger" style={{ position: "relative", bottom: "45px" }}>JOIN US</Link>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://www.digiwebart.com/wp-content/uploads/2018/03/Top-10-Biggest-Fashion-E-commerce-Brands-in-India.jpeg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to='/signup' class="btn btn-danger" style={{ position: "relative", bottom: "45px" }}>JOIN US</Link>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://blog.myntra.com//wp-content/uploads/2016/09/Myntra_TryAndBuy2.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to='/signup' class="btn btn-danger" style={{ position: "relative", bottom: "45px" }}>JOIN US</Link>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <div class="container-fluid p-0 mt-3">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
                        <div class="row">
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://cdn.pixabay.com/photo/2018/01/25/08/14/beverages-3105631_1280.jpg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683_1280.jpg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
                        <div class="row">
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://media.istockphoto.com/id/1370431940/photo/portrait-of-black-couple-with-shopping-bags-pointing-at-window.jpg?b=1&s=170667a&w=0&k=20&c=XG0ZVgbYCvSLHfAWW-fgkOCrvNtP-stT52R4cFTtinw="
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://media.istockphoto.com/id/1414489347/photo/happy-little-girl-pointing-at-backpack-while-buying-school-supplies-with-her-parents-in.jpg?b=1&s=170667a&w=0&k=20&c=uSO6c-fs5CrgGbztrYpn6O-hmuXSdSPY_rni-otcE-A="
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://img.freepik.com/premium-photo/young-woman-with-shopping-bags-standing-clothing-store_52137-20576.jpg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div >

            <div class="wordrode mt-4">
                <h2>WORDROBE ESSENTIALS </h2>
            </div>
            <div class="essence">
                <p>it's Time To Refresh Your Closet!</p>
            </div>

            <div class="container-fluid p-0 mt-3">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
                        <div class="row">
                            <div class="col-3">
                                <div class="cards">
                                    <img src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPROYAL-HERITAMEHT37061A85CAB91/1563000995418_0..jpg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-3">
                                <div class="cards">
                                    <img src="https://www.rajwadi.com/image/cache/data/navy-cream-kurta-pajama-for-men-27412-800x1100.jpg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="cards">
                                    <img src="https://m.media-amazon.com/images/I/61ojF-Om2JS._SL1500_.jpg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="cards">
                                    <img src="https://i.etsystatic.com/19394471/r/il/86b41a/4162288795/il_fullxfull.4162288795_pmow.jpg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
                        <div class="row">
                            <div class="col-3">
                                <div class="cards">
                                    <img
                                        src="https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/a12781a7f2ccb3d663f7fd01e1bd2e4e/j/a/jacket-style-off-white-art-silk-men-kurta-pajama-mkpa01412-1.jpg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-3">
                                <div class="cards">
                                    <img src="https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/a12781a7f2ccb3d663f7fd01e1bd2e4e/c/h/chikankari-jacket-style-art-silk-sea-blue-men-kurta-pajama-mkpa01073-1-_1__1.jpg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-3">
                                <div class="cards">
                                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyIUPBaoe0I5IN1VKLMRRtVQ5NLB6u1j7cuz7Ymi_eMZIwE929hJj8U32zBO6erCBlneY7oglkty2A6hKlY6lmLhPwrXYm0Vv7WQzQOCOXlUPpUwj9VYwlZg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-3">
                                <div class="cards">
                                    <img
                                        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdBdQfeSvwKxmOKziblIG_Wfp5fs7akiUuuXyvn6A-P-c_elm-6LXXSaVwQaPiXlojnJUkNxCmPizt-DH_VDAat8EnUIZr-DiHvA4t6xphwefNRIkvK0VQ"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="seare mt-4">
                <h2>BEST SELLING BRANDS </h2>
            </div>
            <div class="essence">
                <p>Biggest Names, Lowest Price!</p>
            </div>

            <div class="container-fluid p-0 mt-3">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
                        <div class="row">
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://stylegods.com/wp-content/uploads/2016/10/20141222-145305-hrx.jpg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://img01.ztat.net/article/spp-media-p1/2c6106d002e24776bf6565b932a7ec2b/50766f561ff64d779e7f7aaad3086940.jpg?imwidth=762"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 ">
                        <div class="row">

                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://www.logolynx.com/images/logolynx/16/16cff105fb19a7e97a1eb803619452f3.jpeg"
                                        class="osrut card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img src="https://c8.alamy.com/comp/C7TK4F/bata-shoes-and-leather-goods-store-changi-airport-singapore-C7TK4F.jpg"
                                        class="osrut card-img-top" alt="..." />

                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cards">
                                    <img
                                        src="https://www.shutterstock.com/image-photo/reliance-trends-store-board-entrance-260nw-2214921023.jpg" class="osrut card-img-top" alt="..." />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </ >
    )
}

export default Dashboard