import { Contact, H2, Form, Input, Btn } from "./styled";
import Fade from "react-reveal/Fade";

export default function contact() {
    return(
        <Fade bottom duration={2200} distance={"40px"} delay={100}>
            <Contact id="contact">
                <H2>Subscribe for more html css tutorial</H2>

                <Form action="#">
                    <Input type="text" placeholder="Enter your name"></Input>
                    <Btn href="#">Subscribe</Btn>
                </Form>
            </Contact>
        </Fade>
    )
}