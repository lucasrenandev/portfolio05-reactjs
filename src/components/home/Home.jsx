import { Home, HomeText, H1, H4, Btn, Count, CountList } from "./styled";
import { useEffect } from "react";

export default function home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "40px",
            duration: 2300,
            reset: true
        })

        sr.reveal(".home-text", {delay: 300, origin: "left"})
    }, [])

    return(
        <Home id="home">
            <HomeText className="home-text">
                <H1>I'm Tahmid <br /> <span>Web Developer</span></H1>
                <H4>USA Based Freelancer</H4>
                <Btn href="#" className="btn">Read more</Btn>

                <Count>
                    <CountList><span>5k+</span> <br /> Global Happy Clients</CountList>
                    <CountList><span>18k+</span> <br /> Projects Completed</CountList>
                    <CountList><span>30k+</span> <br /> Awards Winner</CountList>
                </Count>
            </HomeText>
        </Home>
    )
}