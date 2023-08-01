import { useEffect, useState } from "react";


function Timers() {
    const [count, setCount] = useState(0);


    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 100)

    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [])



    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000);
    // })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])




    return (
        <>
            <h1>Saya Mengklik Sebanyak {count}</h1>


        </>
    )
}

export default Timers;


