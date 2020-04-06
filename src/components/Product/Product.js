import React from 'react';
import './Product.css';
import Button from '.././Button/Button.js'
import laptop from '../../.././img/50061505_575246.png';
import hover1 from '../../.././img/hover-1.png';
import hover2 from '../../.././img/hover.png';
import star from '../../.././img/star copy 3.png';
import discount from '../../.././img/Group 7.png';
import headphones from '../../.././img/product.png';
import hotitem from '../../.././img/item.png';
/**
 * Product Styles
 * 
 *
 * 
 * 
 * Block outline with transparent icons on hover
 * block fill with solid blue icons on hover
 * 
 * block where Background is filled on hover
 * small block
 * 
 * inline block
 * 
 * 
 */


const Product = (props) => {
    let classList ='';
    let imagePath = '';
    let imageAlt ='';
    const hoverHandler2 = (event) => {
        
            event.target.setAttribute('src',laptop)
    }
    const hoverHandler = (event) => {

            if (props.filled){
                event.target.setAttribute('src',hover2)
            }
            else{
                event.target.setAttribute('src',hover1)
            }
    }




    if(props.type === 'block'){
        if(props.small){
            classList += ` product-small`;
            imagePath = headphones;
            return(<div className="small-block">
                    <img className="small-image" src={imagePath} alt ={imageAlt}></img>
                </div>)
        }
        if (props.long){
            classList += ` product-long`;
            imagePath = laptop;
            return(<div className="long-block">
                    <img className="product-image" src={imagePath} alt ={imageAlt}></img>
                    <div className="long-content"><h1>{props.label}</h1>
                    <img className="product-discount" src={discount} alt ="discount-price"></img>
                    </div>
                </div>)
        }
        if (props.default){
            if(props.filled){
                classList += ` default-block product-filled`;
                imagePath = laptop;
                       
            }
            else{
                classList += ` default-block product-outline`;
                imagePath = laptop; 
            }
            return(
                <div className={classList}>
                    <img className="product-image" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler2} src={imagePath} alt ={imageAlt}></img>
                    <h1>{props.label}</h1>
                    <img className="product-discount" src={discount} alt ="discoun-price"></img>

                </div>
            ) 
            
        }
    }
    else{
        classList += ` product-inline`;
        imagePath = hotitem;
        return(<div className="inline-block">
                    <div className="inline-img">
                        <img className="product-image" src={imagePath} alt ={imageAlt}></img>
                    </div>
                    <div className="inline-content">
                        <h1>{props.label}</h1>
                        <span><h4>0 Reviews <a href="">Submit a Review</a></h4> </span>
                        <img className="product-discount" src={discount} alt ="discount-price"></img>
                        <p>{props.desc}</p>
                        <div className="inline-button">
                            <Button type="primary" label="Add to Cart"  lightFill carticon/>
                            <Button type="primary" label="" lightFill hearticon/>
                            </div>
                        
                    </div>
                </div>)
    }   
}

export default Product