import { useEffect } from "react";
import { Contact, H2, Form, Input, Btn } from "./styled";

export default function contact() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "40px",
            duration: 2300,
            reset: true
        })

        sr.reveal(".contact", {delay: 200, origin: "bottom"})
    }, [])

    return(
        <Contact className="contact" id="contact">
            <H2>Subscribe for more html css tutorial</H2>

            <Form action="#">
                <Input type="text" placeholder="Enter your name"></Input>
                <Btn href="#">Subscribe</Btn>
            </Form>
        </Contact>
    )
}