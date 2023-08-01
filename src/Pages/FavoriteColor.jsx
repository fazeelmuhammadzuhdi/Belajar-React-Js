import { useState } from "react";


function FavoriteColor() {
    const [car, setCar] = useState({
        color: "Red",
        brand: "Asus",
        year: "2023",
        model: "Binding",
    })


    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        })
    }


    const updateYear = () => {
        setCar(modelState => {
            return { ...modelState, year: "2030" }
        })
    }


    return (
        <>
            <h1>Warna Favorite Saya Adalah {car.color} </h1>
            <h1>Warna Favorite Saya Adalah {car.brand} </h1>
            <h1>Warna Favorite Saya Adalah {car.year} </h1>
            <h1>Warna Favorite Saya Adalah {car.model} </h1>


            <button onClick={updateColor} type="button">
                Click Me
            </button>

            <button onClick={updateYear} type="button">
                Click Year
            </button>

        </>
    )
}

export default FavoriteColor;