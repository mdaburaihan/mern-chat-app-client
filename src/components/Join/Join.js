import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <React.Fragment>
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div><input type="text" className="joinInput" placeholder="Name" onChange={e => setName(e.target.value)}/></div>
                    <div><input type="text" className="joinInput" placeholder="Room" onChange={e => setRoom(e.target.value)}/></div>
                    <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit">Sign in</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Join;