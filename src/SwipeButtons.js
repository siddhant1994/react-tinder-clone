import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
import "./SwipeButtons.css";

function SwipeButtons() {
    return (
        <div className="swipebuttons">
            <IconButton>
                <ReplayIcon className="swipebuttons__repeat" fontSize="large" />
            </IconButton>
            <IconButton>
                <CloseIcon className="swipebuttons__left" fontSize="large" />
            </IconButton>
            <IconButton>
                <StarRateIcon className="swipebuttons__star" fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon
                    className="swipebuttons__right"
                    fontSize="large"
                />
            </IconButton>
            <IconButton>
                <FlashOnIcon className="swipebuttons__flash" fontSize="large" />
            </IconButton>
        </div>
    );
}
export default SwipeButtons;
