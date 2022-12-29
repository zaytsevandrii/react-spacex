import React from "react"
import FalconCounter from "../components/FalconCounter"
import Footer from "../components/Footer"
import Header from "../components/Header"

const FalconHeavy = () => {
    const data = [
        {
            id: 1,
            target: 4,
            span: "Total Launches",
            classN: "fab fa-twitter fa-3x",
        },
        {
            id: 2,
            target: 9,
            span: "Total Landings",
            classN: "fab fa-youtube fa-3x",
        },
        {
            id: 3,
            target: 4,
            span: "Total Reflights",
            classN: "fab fa-facebook fa-3x",
        },
    ]
    return (
        <>
            <Header />
            <section className="section-animate bg-falcon-heavy"></section>
            <div className="section-inner-center">
                <h3>Falcon heavy</h3>
                <p>OVER 5 MILLION LBS OF THRUST</p>
            </div>
            <div className="stats">
                {data.map((el) => (
                    <FalconCounter key={el.id} {...el} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default FalconHeavy
