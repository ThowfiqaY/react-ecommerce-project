import FoodItem from './Food'
import idly from './assets/idly.png'
import naan from './assets/naan.png'
import chicken from './assets/chicken.png'

function App() {

    const Foods = [
        {
            name: "idly",
            famous: "south india",
            price: 40,
            image: idly
        },
        {
            name: "naan",
            famous: "north india",
            price: 200,
            image: naan
        },
        {
            name: "chicken",
            famous: "west india",
            price: 190,
            image: chicken
        }
    ]

    const foodList = Foods.map((food, index) => (
        <FoodItem
            key={index}
            name={food.name}
            image={food.image}
            famous={food.famous}
            price={food.price}
        />
    ))

    return (
        <>
            {foodList}
        </>
    )
}

export default App