import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '1px solid purple',
        borderRadius: '15px',
        margin: '15px',
        padding: '15px'
    }

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleDecrement = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return (
        <div style={teamStyle}>
            <h1>Player: {team}</h1>
            <button onClick={handleAdd}>Increment+</button>
            <button onClick={handleDecrement}>Decrement-</button>
        </div>
    )
}
