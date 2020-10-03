import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";
function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Allen",
            message: "Heyy",
            profilePic: "",
            type: "sender",
            id: "1",
        },
        {
            name: "Allen",
            message: "Heyy",
            profilePic: "",
            type: "sender",
            id: "2",
        },
        {
            message: "Heyy Yellow",
            type: "user",
            id: "3",
        },
    ]);
    const submitHandler = (e) => {
        e.preventDefault();
        setMessages([
            ...messages,
            {
                message: input,
                type: "user",
            },
        ]);
        console.log(messages);
        setInput("");
    };
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You Matched today</p>
            {messages.map((message, index) =>
                message.type === "sender" ? (
                    <div className="chatScreen__message" key={index}>
                        <Avatar
                            className="chatScreen__avtar"
                            src={message.profilePic}
                            alt={message.name}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message" key={index}>
                        <p className="chatScreen__text__user">
                            {message.message}
                        </p>
                    </div>
                )
            )}

            <div className="chatScreen__input">
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type your message here"
                        type="text"
                    />
                    <button
                        type="submit"
                        onClick={submitHandler}
                        className="chatScreen__inputButton"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ChatScreen;
