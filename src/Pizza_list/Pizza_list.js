import'./Pizza_list.css'
import Pizza from'../pizzas/Pizza'



function Pizza_list() {
    const pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "focaccia.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "margherita.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "spinaci.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "funghi.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "salamino.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese", 
          price: 18,
          photoName: "prosciutto.jpg",
          soldOut: false,
        },
      ];
    return (
        <div>
            <div CLass='Pizzas_list'>
            {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
            </div>
            
        </div>
    )
}

export default Pizza_list
