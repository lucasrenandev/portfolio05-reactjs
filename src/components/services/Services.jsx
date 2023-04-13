import { Services, Heading, ServicesContent,
ServiceBox, Icon, H4, Paragraph } from "./styled";
import { BiMobileAlt } from "react-icons/bi"
import { BiLayer } from "react-icons/bi"
import { BiLineChart } from "react-icons/bi"
import { BiLaptop } from "react-icons/bi"
import { BiLandscape } from "react-icons/bi"
import { BiCamera } from "react-icons/bi"
import Fade from "react-reveal/Fade";

export default function services() {
    return(
        <Fade bottom duration={2200} distance={"40px"} delay={100}>
            <Services id="services">
                <Heading className="heading">
                    <span>Creative service</span>
                    <h2>Service i offer you</h2>
                    <p>Experience that keep your customers coming back for more information about <br /> services makes best effort</p>
                </Heading>

                <ServicesContent>
                    <ServiceBox>
                        <Icon><BiMobileAlt/></Icon>
                        <H4>Web Design</H4>
                        <Paragraph>Experience that keep your customers coming back for more information about <br /> services makes best effort</Paragraph>
                    </ServiceBox>

                    <ServiceBox>
                        <Icon><BiLayer/></Icon>
                        <H4>Web Design</H4>
                        <Paragraph>Experience that keep your customers coming back for more information about <br /> services makes best effort</Paragraph>
                    </ServiceBox>

                    <ServiceBox>
                        <Icon><BiLineChart/></Icon>
                        <H4>Web Design</H4>
                        <Paragraph>Experience that keep your customers coming back for more information about <br /> services makes best effort</Paragraph>
                    </ServiceBox>

                    <ServiceBox>
                        <Icon><BiLaptop/></Icon>
                        <H4>Web Design</H4>
                        <Paragraph>Experience that keep your customers coming back for more information about <br /> services makes best effort</Paragraph>
                    </ServiceBox>

                    <ServiceBox>
                        <Icon><BiLandscape/></Icon>
                        <H4>Web Design</H4>
                        <Paragraph>Experience that keep your customers coming back for more information about <br /> services makes best effort</Paragraph>
                    </ServiceBox>

                    <ServiceBox>
                        <Icon><BiCamera/></Icon>
                        <H4>Web Design</H4>
                        <Paragraph>Experience that keep your customers coming back for more information about <br /> services makes best effort</Paragraph>
                    </ServiceBox>
                </ServicesContent>
            </Services> 
        </Fade>
    )
}