import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Sachin", score: 95 },
        { name: "Virat", score: 82 },
        { name: "Rohit", score: 65 },
        { name: "Dhoni", score: 90 },
        { name: "Rahul", score: 58 },
        { name: "Gill", score: 77 },
        { name: "Pant", score: 68 },
        { name: "Hardik", score: 73 },
        { name: "Jadeja", score: 61 },
        { name: "Bumrah", score: 45 },
        { name: "Shami", score: 80 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>

            <ul>
                {lowScorers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;