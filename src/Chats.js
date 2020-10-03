import React from "react";
import Chat from "./Chat";
function Chats() {
    return (
        <div>
            <Chat
                name="Artie"
                message="Whats up"
                timestamp="30 mins ago"
                profilePic="https://i.ytimg.com/vi/0bID_14BDhw/maxresdefault.jpg"
            />
            <Chat
                name="Aech"
                message="Whats up"
                timestamp="30 mins ago"
                profilePic="https://vignette.wikia.nocookie.net/p__/images/2/2c/BFED48C2-1DE2-4C60-AA1B-883271A46570.jpeg/revision/latest/scale-to-width-down/350?cb=20190119125723&path-prefix=protagonist"
            />
        </div>
    );
}
export default Chats;
