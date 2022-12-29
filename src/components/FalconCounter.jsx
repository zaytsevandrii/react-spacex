import React, { useEffect, useState } from "react"

const FalconCounter = ({ target, span }) => {
    const [sum, setSum] = useState(0)
    const inrement = target / 100
    console.log(sum)
    
    useEffect(() => {
        document.addEventListener("scroll", scrollPage)
       
        function scrollPage() {
            const scrollPos = window.scrollY

            if (scrollPos > 150) {
                updateCounter()
            }else{
                setSum(0)
            }
        }
       /*  const updateCounter=()=>{
            setInterval(() => {
                setSum((sum) => (sum < target ? Math.ceil(sum + inrement) : target))
            }, 40)
        } */
        
        const updateCounter=()=>{
            if(sum<target){
                setSum(prev => (prev < target ? Math.ceil(prev + inrement):target))
                setTimeout(updateCounter, 75)
            }else{
                setSum(prev=>prev=target)
            }
        }
        
    }, [])

    return (
        <>
            <div>
                <span className="counter" data-target="192">
                    {sum}
                </span>
                <h4>{span}</h4>
            </div>
        </>
    )
}

export default FalconCounter
