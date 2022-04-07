import { connect } from "react-redux";
import { aboutClick, collectionClick, faqClick, homeClick, singInClick, logoClick} from "./HeaderSlice";
import Header from "./component/Header";
import { Dispatch } from "@reduxjs/toolkit";

const mapDispatchProps = (dispatch: Dispatch ) => ({
    onLogoClick: () => {
        dispatch(logoClick());
    },
    onFaqClick: () => {
        dispatch(faqClick());
    },
    onHomeClick: () => {
        dispatch(homeClick());
    },
    onAboutClick: () => {
        dispatch(aboutClick());
    },
    onSinginClick: () => {
        dispatch(singInClick());
    },
    onCollectionClick: () => {
        dispatch(collectionClick());
    }
})

export default connect(null, mapDispatchProps, )(Header)