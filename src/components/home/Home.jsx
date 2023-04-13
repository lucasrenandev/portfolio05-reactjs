import { Home, HomeText, H1, H4, Btn, Count, CountList } from "./styled";
import Fade from "react-reveal/Fade";
export default function home() {
    return(
        <Home id="home">
            <Fade left duration={2400} distance={'40px'} delay={300}>
                <HomeText>
                    <H1>I'm Tahmid <br /> <span>Web Developer</span></H1>
                    <H4>USA Based Freelancer</H4>
                    <Btn href="#" className="btn">Read more</Btn>

                    <Count>
                        <CountList><span>5k+</span> <br /> Global Happy Clients</CountList>
                        <CountList><span>18k+</span> <br /> Projects Completed</CountList>
                        <CountList><span>30k+</span> <br /> Awards Winner</CountList>
                    </Count>
                </HomeText>
            </Fade>
        </Home>
    )
}