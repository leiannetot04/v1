 import './App.css';
import cheesyimg from "./assets/cheesey.jpg";
import tiramisuimg from "./assets/tiramisu.webp";
import dulceimg from "./assets/dulce.jpg";
import tacoimg from "./assets/taco.jpg";
import ProductCardComponent from './component/ProductCardComponent';

function App() {

return (
    <>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>

        <ProductCardComponent
            name="Cheesy Pizza"
            img={cheesyimg}
            productDesc=" A savory, comforting dish featuring a crispy crust topped with a rich, melted blend of cheeses, savory sauce, and various toppings."
            title="Snacks"
            rating={5}
            />

        <ProductCardComponent
            name="Tiramisu"
            img={tiramisuimg}
            productDesc=" A creamy, coffee-infused dessert drink blending vanilla ice cream, mascarpone cheese, and espresso, topped with whipped cream and cocoa powder."
            title= "Milk Shake"
            rating={4.5}
            />

        <ProductCardComponent
            name="Dulce De Leche"
            img={dulceimg}
            productDesc="A rich, creamy dessert drink blending vanilla ice cream with sweet, caramel-like dulce de leche and topped with whipped cream."
            title= "Milk Shake"
            rating={4.5}
            />

            <ProductCardComponent
            name="taco"
            img={tacoimg}
            productDesc="A taco is a savory, folded Mexican dish consisting of a crispy or soft tortilla filled with various ingredients like seasoned meats, cheese, lettuce, and tomatoes."
            title="Snacks"
            rating={6.2}
           />
       
            </div>
        </>
    )
}


export default App;
