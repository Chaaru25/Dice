import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [number, setNumber] = useState(0);
    const [playerOne, setPlayerOne] = useState(1);
    const [playerTwo, setPlayerTwo] = useState(1);
    const [isActivePlayer, setIsActivePlayer] = useState(false);
    const [winner, setWinner] = useState("");
    const winNumber = 16;
    // const gridArray = [];
    const gridArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16]

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNumber(randomNumber(1, 6));
    }

    const handleRestart = () => {
        setNumber(0)
        setPlayerOne(1)
        setPlayerTwo(1)
        setIsActivePlayer(false)
        setWinner("")
    }

    useEffect(() => {
        if (isActivePlayer) {
            setIsActivePlayer(false);
            if (number + playerOne <= winNumber) {
                setPlayerOne(playerOne + number)
                if (number + playerOne == winNumber) {
                    setWinner("Player 1 is Win")
                }
            }
        }
        else {
            setIsActivePlayer(true);
            if (number + playerTwo <= winNumber) {
                setPlayerTwo(playerTwo + number)
                if (number + playerTwo == winNumber) {
                    setWinner("Player 2 is Win")
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number])

    const SingleGrid = (arr) => {
        return (
            <td style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "0", left: "5px", display: "flex" }}>
                    {playerOne == arr && <p style={{ backgroundColor: "yellowgreen", width: "24px", borderRadius: "50%", color: "white", padding: "2px 2px 1px" }}>P1</p>}
                    {playerTwo == arr && <p style={{ backgroundColor: "white", width: "24px", borderRadius: "50%", padding: "2px 2px 1px", marginLeft: "5px", }}>P2</p>}
                </div>
                <p style={{ fontSize: "30px", fontWeight: "500" }}>{arr}</p>
            </td>
        )
    }

    return (
        <div style={{ backgroundColor: "greenyellow" }}>
            <h1 style={{ paddingTop: "20px", margin: "10px" }}>LUDO GAME</h1>
            <div className='grid'>
                <div className='table-content'>
                    <table border={"1px"}>
                        
                        <tr>
                            {SingleGrid(gridArray[0])}
                            {SingleGrid(gridArray[1])}
                            {SingleGrid(gridArray[2])}
                            {SingleGrid(gridArray[3])}
                        </tr>
                        <tr>
                            {SingleGrid(gridArray[4])}
                            {SingleGrid(gridArray[5])}
                            {SingleGrid(gridArray[6])}
                            {SingleGrid(gridArray[7])}
                        </tr>
                        <tr>
                            {SingleGrid(gridArray[8])}
                            {SingleGrid(gridArray[9])}
                            {SingleGrid(gridArray[10])}
                            {SingleGrid(gridArray[11])}
                        </tr>
                        <tr>
                            {SingleGrid(gridArray[12])}
                            {SingleGrid(gridArray[13])}
                            {SingleGrid(gridArray[14])}
                            {SingleGrid(gridArray[15])}
                        </tr>
                        <tr>
                           
                        </tr>
                    </table>
                    <div className='container'>
                        {winner &&
                            <div style={{ padding: "10px 20px", backgroundColor: "greenyellow", color: "red" }}>
                                <p style={{ fontWeight: "700", fontSize: "25px" }}>{winner}</p>
                            </div>
                        }
                        <div className='players'>
                            <p style={{ backgroundColor: isActivePlayer ? "#ddd" : null }}>
                                Player 1 :- <span style={{ fontSize: "25px", backgroundColor: "yellowgreen", width: "50px", borderRadius: "50%", color: "white", padding: "5px 14px" }}> {playerOne}</span>
                            </p>
                            <p style={{ backgroundColor: !isActivePlayer ? "#ddd" : null }} >
                                Player 2 :- <span style={{ fontSize: "25px", backgroundColor: "white", width: "50px", borderRadius: "50%", padding: "5px 14px", marginLeft: "5px" }}>{playerTwo}</span>
                            </p>
                        </div>
                        <div>
                            {!winner ? (
                                <button id='toss' onClick={handleClick}>
                                    {number}
                                </button>
                            )
                                : (
                                    <button id='tossOne' onClick={handleRestart}>
                                        Play Again
                                    </button>
                                )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;
