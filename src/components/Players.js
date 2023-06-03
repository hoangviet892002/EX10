import React from 'react'
// import { Players } from '../shared/ListOfPlayers'
import "./Players.css"
import { useState } from 'react'

export default function Players() {
    const [player, setPlayer] = useState({});

    const closePopup = () => {
        // Thực hiện các thao tác để đóng popup tại đây
    };

    return (
        <>
            <div className="container">
                {Players.map((player) => (
                    <div className="column" key={player.id}>
                        <div className="card">
                            <img src={player.img} alt={player.name} />
                            <div className="card-body">
                                <div className="title-body">
                                    <h3>{player.name}</h3>
                                </div>
                                <p>{player.club}</p>
                            </div>
                            <button onClick={() => setPlayer(player)}>
                                <a href="#popup1" id="openPopUp">
                                    Detail
                                </a>
                            </button>
                        </div>
                    </div>
                ))}

                <div id="popup1" className="overlay">
                    <div className="popup">
                        <img src={player.img} alt={player.name} />
                        <h2>{player.name}</h2>
                        <a className="close" href="#" onClick={closePopup}>
                            &times;
                        </a>
                        <div className="content">{player.info}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
