import "./ProductSpec.css"
import Button from "../Button/Button";
function PoductSpec({id, title, img, description, price}) {
    return (<div className="modal"><div className="productSpecModal d-f-r j-c-c a-i-c g-24 bordered">
        <img src={img} alt="product_image" className="product_image"/>
        <div className="productSpec__textPart d-f-c g-16">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="productSpec__textPart__downPart d-f-r">
                <p>Price: ${price}</p>
                <Button name="Add to cart"/>
            </div>
            </div>
    </div><div className="closeModal" onClick={()=>{document.querySelector(".modal").remove()}}>x</div>  </div>);
}

export default PoductSpec;