import "./ProductSpec.css"
function PoductSpec({title, imgSrc, description, price}) {
    return (<><div className="productSpecModal d-f-r j-c-c a-i-c g-24">
        <img src={imgSrc} alt="product_image" />
        <div className="productSpec__textPart d-f-c g-16">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="productSpec__textPart__downPart">
                <p>Price: ${price}</p>
                <button>Add to cart</button>
            </div>
            </div>
    </div><div className="closeModal">x</div>  </>);
}

export default PoductSpec;