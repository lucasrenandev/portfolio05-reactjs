import { Portfolio, Heading, PortfolioContent,
PortfolioBox, Image, Layer} from "./styled";
import workImage1 from "../../assets/work1.jpg"
import workImage2 from "../../assets/work2.jpg"
import workImage3 from "../../assets/work3.jpg"
import Fade from "react-reveal/Fade";

export default function portfolio() {
    return(
        <Fade bottom duration={2200} distance={"40px"} delay={100}>
            <Portfolio id="portfolio">
                <Heading className="heading">
                    <span>Creative portfolio</span>
                    <h2>Solution we offer you</h2>
                    <p>Experience that keep your customers coming back for more information about <br /> services makes best effort</p>
                </Heading>

                <PortfolioContent>
                    <PortfolioBox>
                        <Image src={workImage1} alt="Work 1"/>

                        <Layer>
                            <h3>Web bussiness plan</h3>
                        </Layer>
                    </PortfolioBox>

                    <PortfolioBox>
                        <Image src={workImage2} alt="Work 2"/>

                        <Layer>
                            <h3>Web bussiness plan</h3>
                        </Layer>
                    </PortfolioBox>

                    <PortfolioBox>
                        <Image src={workImage3} alt="Work 3"/>

                        <Layer>
                            <h3>Web bussiness plan</h3>
                        </Layer>
                    </PortfolioBox>
                </PortfolioContent>
            </Portfolio>
        </Fade>
    )
}