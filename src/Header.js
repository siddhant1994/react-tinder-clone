import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";

import "./Header.css";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIos className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png"
                    alt="logo"
                ></img>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon
                        className="header__icon"
                        fontSize="large"
                    />
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;
