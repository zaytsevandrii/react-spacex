import React from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Hamburger from "../components/Hamburger"
import Header from "../components/Header"

const Home = () => {
    return (
        <>
            <Header />
            <section className="section-a section-animate">
                <div className="section-inner">
                    <h4>Upcoming Launch</h4>
                    <h2>CRS-25 Mission</h2>
                    <Link to="#" className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </Link>
                </div>

                <div className="scroll-arrow">
                    <svg width="30px" height="20px">
                        <path
                            stroke="#ffffff"
                            fill="none"
                            strokeWidth="2px"
                            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
                        ></path>
                    </svg>
                </div>
            </section>
            {/* Section B */}
            <section className="section-b ">
                <div className="section-inner">
                    <h4>Recent Launch</h4>
                    <h2>Starlink Mission</h2>
                    <Link to="#" className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </Link>
                </div>

                <div className="scroll-arrow">
                    <svg width="30px" height="20px">
                        <path
                            stroke="#ffffff"
                            fill="none"
                            strokeWidth="2px"
                            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
                        ></path>
                    </svg>
                </div>
            </section>
            {/* Section C */}
            <section className="section-c">
                <div className="section-inner">
                    <h4>Recent Mission</h4>
                    <h2>SES-22 Mission</h2>
                    <Link to="#" className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </Link>
                </div>

                <div className="scroll-arrow">
                    <svg width="30px" height="20px">
                        <path
                            stroke="#ffffff"
                            fill="none"
                            strokeWidth="2px"
                            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
                        ></path>
                    </svg>
                </div>
            </section>
            {/* Section D */}
            <section className="section-d">
                <div className="section-inner">
                    <h4>Recent Launch</h4>
                    <h2>Globalstart FM15 Mission</h2>
                    <Link to="#" className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </Link>
                </div>

                <div className="scroll-arrow">
                    <svg width="30px" height="20px">
                        <path
                            stroke="#ffffff"
                            fill="none"
                            strokeWidth="2px"
                            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
                        ></path>
                    </svg>
                </div>
            </section>
            {/* Section E */}
            <section className="section-e">
                <div className="section-inner">
                    <h2>Starship Update</h2>
                    <Link to="#" className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </Link>
                </div>

                <div className="scroll-arrow">
                    <svg width="30px" height="20px">
                        <path
                            stroke="#ffffff"
                            fill="none"
                            strokeWidth="2px"
                            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
                        ></path>
                    </svg>
                </div>
            </section>
            {/* Section F */}
            <section className="section-f">
                <div className="section-inner">
                    <h2>Starship to add NASA astronauts on the moon</h2>
                    <Link to="#" className="btn animate">
                        <div className="hover"></div>
                        <span>Rewatch</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home
