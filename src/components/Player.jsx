import { useState } from "react"

export default function Player({initialName , symbol}) {

    const [ isEditing , setIsEditing ] = useState(false);
    const [playerName , setPlayerName] = useState(initialName);
 
    function handleEditClick () {
        setIsEditing((editing) => !editing);
    }

    function handleChange (event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName =  <span className="player-name">{playerName}</span>

    if(isEditing) {
        editablePlayerName = <input onChange={handleChange} type="text" value={playerName} required />
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}
