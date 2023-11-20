import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    if (!products.length) return <h1 className="title">fetching... 🌀</h1>

    return (
        <>
            <h1 className="title">Products 👔</h1>
            <main className="product_list">
                {
                    products.map(product => {
                        const rate = Math.round(product.rating.rate)
                        const stars = new Array(5).fill(false).fill(true, 0, rate)
                        console.log(stars);
                        product.stars = stars
                        return (
                            <Link key={product.id} to={`/product/${product.id}`} state={product} className="link"
                                style={{ backgroundImage: `url(${product.image})` }}
                            >
                                <div className="product_item">
                                    <h3>{product.title}</h3>
                                    <div>
                                        {
                                            stars.map((isVisible, ind) => (

                                                <img key={ind}
                                                    className={(!isVisible && 'notGold') + ' star'} src="./star.svg"
                                                    alt="" />
                                            ))
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </main>
        </>
    )
}