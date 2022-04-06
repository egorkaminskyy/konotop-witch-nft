import { connect } from "react-redux";
import { buyNftClick, helpUkraineClick } from "./HomeSlice";
import Home from "./component/Home";
import { Dispatch } from "@reduxjs/toolkit";

const mapDispatchProps = (dispatch: Dispatch) => ({
    onBuyNftClick: () => {
        dispatch(buyNftClick());
    },
    onHelpUkraineClick: () => {
        dispatch(helpUkraineClick());
    }
})

export default connect(null, mapDispatchProps)(Home)