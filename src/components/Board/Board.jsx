import React from 'react'
import '../Board/Board.css';
import profile from '../../Assets/profile.png'
import plus_black from '../../Assets/plus_black.png'
import dot_black from '../../Assets/3_dot_black.png'
import flag_black from '../../Assets/flag_black.png'
import Card from '../Card/Card';
import { useSelector } from "react-redux";

const Board = () => {
    const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);
    return (
        dataSelected && (<>
            <div className="boardContainer">
                {dataSelected.map((element, index) => {
                    return (
                        <div className="board">
                            <div className="heading">
                                <div className="headingLeft">
                                    {
                                        !user ? (<img src={flag_black} alt="user not found" className='notFoundLogo' />) : (
                                            <div className="imageHeadingLeftContainer">
                                                <img src={profile} alt="" className='leftImageHeading' />
                                            </div>
                                        )
                                    }

                                    <span className='headingLeftTextContainer'>
                                        <p className='headingLeftText'>{element[index]?.title}</p>
                                        <span className='headingLeftTextSpan'>{element[index]?.value?.length}</span>
                                    </span>
                                </div>

                                <div className="headingRight">
                                    <div className="imageHeadingRight">
                                        <img src={plus_black} alt="" className='rightImageHeading1' />
                                        <img src={dot_black} alt="" className='rightImageHeading2' />
                                    </div>
                                </div>
                            </div>

                            <div className="boardData">
                                {
                                    element[index]?.value?.map((element, ind) => {
                                        return (
                                            <Card id={element.id} title={element.title} tags={element.tag} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </>)
    )
}

export default Board
