import React from "react"
import Header from "../components/Header"

const Home = () => {
    return (
        <>
            <Header />
            <section className="section-a">
                <div className="section-inner">
                    <h4>Upcoming Launch</h4>
                    <h2>CRS-25 Mission</h2>
                    <div className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
