import { FunctionComponent } from "react";
import { HeaderProps } from "../HeaderSlice";



const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const { resources,
        onLogoClick,
        onFaqClick,
        onHomeClick,
        onAboutClick,
        onSinginClick } = props;

    return (
    <header>
        <a>

        </a>
        <ul>
            <li>
                <a>
                    {resources.homeLink.title}
                </a>
            </li>
            <li>
                <a>
                    {resources.aboutLink.title}
                </a>
            </li>
            <li>
                <a>
                    {resources.collectionLink.title}
                </a>
            </li>
            <li>
                <a>
                    {resources.faqLink.title}
                </a>
            </li>
        </ul>
        <a>

        </a>
    </header>)
}



export { Header as default }