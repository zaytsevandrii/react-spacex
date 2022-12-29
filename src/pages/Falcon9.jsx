import React, { useEffect, useRef, useState } from "react"
import FalconCounter from "../components/FalconCounter"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Falcon9 = () => {
    const data = [
        {
            id: 1,
            target: 192,
            span: "Total Launches",
            classN: "fab fa-twitter fa-3x",
        },
        {
            id: 2,
            target: 150,
            span: "Total Landings",
            classN: "fab fa-youtube fa-3x",
        },
        {
            id: 3,
            target: 127,
            span: "Total Reflights",
            classN: "fab fa-facebook fa-3x",
        },
    ]

    return (
        <>
            <Header />
            <section className="section-animate bg-falcon-9"></section>
            <div className="section-inner-center">
                <h3>Falcon 9</h3>
                <p>First orbital clas rocket capable of reflight</p>
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

export default Falcon9
