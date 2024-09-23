import React, { useEffect, useState } from 'react';
import "../../Style/product.css"

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)

    const fetchProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProduct();
    }, []);
    const selectpaghandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 5
            && selectedPage !== page)
            setPage(selectedPage)
    }
    return (
        <>
            {products.length > 0 && (

                <div className="container-fluid mt-5">
                    <h1>Product List...</h1>
                    <div className="row">
                        {products.slice(6 * (page - 1), 6 * page).map((product) => (
                            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4" key={product.id}>
                                <div className="card" style={{ width: "25rem" }}>
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.id}</p>
                                        <p className="card-text">${product.price}</p>
                                        <a href="#" className="btn btn-primary">View Details</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {
                            products.length > 0 && <div className='pagination '>
                                <span onClick={() => selectpaghandler(page - 1)} className={page > 1 ? "" : 'pagination_disabled'}>◀️</span>
                                {
                                    [...Array(products.length / 5)].map((_, i) => {
                                        return <span onClick={() => selectpaghandler(i + 1)} key={i}>{i + 1}</span>
                                    })
                                }
                                <span onClick={() => selectpaghandler(page + 1)}
                                    className={page < products.length / 5 ? "" : 'pagination_disabled'}>▶️</span>

                            </div>
                        }
                    </div>
                </div>
            )
            }
        </>
    );
}

export default AllProducts;
