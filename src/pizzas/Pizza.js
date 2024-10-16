import './Pizza.css';

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div class='Pizza_frame'>
      {!soldOut && (
         <div class='Pizza_image'>
         <img src={require(`./${photoName}`)} alt={name} />
       </div>
      )}
      {soldOut&&(
         <div class='Pizza_image_soldout'>
         <img src={require(`./${photoName}`)} alt={name} />
       </div>
      )}
      <div class='about_pizza'>
        <h2 id='pizza_title'>{name}</h2>
        <p Class='pizza_dis'>
       {ingredients}
        </p>
        {soldOut &&(
          <div class='pizza_price_soldout'>
         <p>Sold Out</p> 
        </div>
        )}
        {!soldOut&&(
           <div class='pizza_price'>
           <p>{price} $</p> 
          </div>
        )}
      </div>
    </div>
  );
}

export default Pizza;