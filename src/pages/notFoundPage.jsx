import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function NotFoundPage(){
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => navigate('/products'), 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1 className="not_found_page_title">😵‍💫</h1>
            <Link to={'/products'}>
                <h2 className="not_found_page_link">перейти к продуктам 👔</h2>
            </Link>
            <p className="not_found_page_text">*вас автоматически перебросит на страницу <span>products</span> через 3 секунды</p>
        </div>
    )
}