import React from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import data from "../Components/Assets/Products/data.json";

const ShopCategory = (props) => {

  const allproducts = Object.values(data);
  const filteredProducts = allproducts.filter(item => props.category === item.category);
  console.log("allproducts type:", Array.isArray(allproducts));
  console.log("allproducts", filteredProducts);

  
    
  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item,i) => {
          console.log(item);
            if(props.category===item.category)
            {
              const imagePath = `../Assets/Products/${item.image}`;

              return <Item id={item.id} key={i} name={item.name} image={imagePath}  new_price={item.new_price} />;
            }
            else
            {
              return null;
            }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
