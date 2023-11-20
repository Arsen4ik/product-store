import { Link, useLocation } from "react-router-dom"

export default function Product() {
    // const { id } = useParams()
    const { title, price, description, image, stars } = useLocation().state
    // console.log(title, rating.rate, stars);
    return (
        <div className="product">
            <h1>{title}</h1>
            <h2>{price}$</h2>
            <p>{description}</p>
            <div>
                {
                    stars.map((isVisible, ind) => (
                        <img key={ind}
                            className={(!isVisible && 'notGold') + ' star'} src="/star.svg"
                            alt="" />
                    ))
                }
            </div>
            <img src={`${image}`} alt="" />
            <Link className="link link_product" to={'/products'}>
                <h3>⬅️ назад</h3>
            </Link>
        </div>
    )
}