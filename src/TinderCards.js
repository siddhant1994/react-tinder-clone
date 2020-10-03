import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./database";

function TinderCards() {
    const [people, setPeople] = useState([]);

    //runs a code which runs based on a condition
    useEffect(
        () => {
            const unsubscribe = database
                .collection("people")
                .onSnapshot((snapshot) => {
                    setPeople(snapshot.docs.map((doc) => doc.data()));
                });

            return () => {
                //clean function
                unsubscribe();
            };
        },
        [] /*if [people] then it would watch for people variable*/
    );
    return (
        <div>
            <div className="tinderCards__container">
                {people.map((person) => (
                    <TinderCard
                        key={person.name}
                        className="swipe"
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
export default TinderCards;
