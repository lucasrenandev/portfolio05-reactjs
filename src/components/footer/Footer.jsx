import { Footer, CopyRight, SocialIcons, Link, Icon } from "./styled";
import { RiFacebookFill } from "react-icons/ri"
import { FaTwitter } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

export default function footer() {
    return(
        <Footer>
            <CopyRight>&copy; 2023 All rights reserved | Design & Develop by Tahmid Ahmed</CopyRight>

            <SocialIcons>
                <Link href="#">
                    <Icon><RiFacebookFill/></Icon>
                </Link>

                <Link href="#">
                    <Icon><FaTwitter/></Icon>
                </Link>

                <Link href="#">
                    <Icon><RiInstagramFill/></Icon>
                </Link>
            </SocialIcons>
        </Footer>
    )
}