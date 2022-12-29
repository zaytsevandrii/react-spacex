import React from 'react'
import FalconCounter from '../components/FalconCounter'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Dragon = () => {
    const data = [
        {
            id: 1,
            target: 37,
            span: "Total Launches",
            classN: "fab fa-twitter fa-3x",
        },
        {
            id: 2,
            target: 32,
            span: "Total Landings",
            classN: "fab fa-youtube fa-3x",
        },
        {
            id: 3,
            target: 15,
            span: "Total Reflights",
            classN: "fab fa-facebook fa-3x",
        },
    ]
  return (
    <>
    <Header/>
    <section className="section-animate bg-dragon"></section>
            <div className="section-inner-center">
                <h3>Dragon</h3>
                <p>SENDING HUMANS AND CARGO INTO SPACE</p>
            </div>
            <div className="stats">
                {data.map((el) => (
                    <FalconCounter key={el.id} {...el} />
                ))}
            </div>
    <Footer/>
    </>
  )
}

export default Dragon