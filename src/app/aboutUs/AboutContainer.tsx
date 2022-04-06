import { connect } from "react-redux";
import { buyNftClick } from "./AboutSlice";
import About from "./component/About";
import { Dispatch } from "@reduxjs/toolkit";

const mapDispatchProps = (dispatch: Dispatch) => ({
    onBuyNftClick: () => {
        dispatch(buyNftClick());
    },
})

export default connect(null, mapDispatchProps)(About)