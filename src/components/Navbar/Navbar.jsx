import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import filter_black from '../../Assets/filter_black.png';
import down_black from '../../Assets/down_black.png';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelect } from '../../actions/action';

const getGroup = () => {
    if (localStorage.getItem("group")) {
        return localStorage.getItem("group");
    }

    else {
        return "status";
    }
};

const getOrder = () => {
    if (localStorage.getItem("order")) {
        return localStorage.getItem("order");
    }

    else {
        return "priority";
    }
};


const Navbar = () => {
    const [display, setDisplay] = useState(false);

    const dispatch = useDispatch();

    const { tickets, users } = useSelector((state) => state.dataSlice);

    const [groups, setGroups] = useState(getGroup());
    const [order, setOrder] = useState(getOrder());

    const handleDisplayClick = () => {
        setDisplay(!display)
    }

    const handleOnChange = (e, value) => {
        if (value) {
            setGroups(e.target.value);
            handleDisplayClick(!display)
            localStorage.setItem("group", e.target.value)
        }

        else {
            setOrder(e.target.value);
            handleDisplayClick(!display)
            localStorage.setItem("order", e.target.value)
        }
    }

    useEffect(() => {
        if (groups === "user") {
          dispatch(
            dataSelect(
              groups,
              {
                tickets,
                users,
              },
              order
            )
          );
        } 
        
        else {
          dispatch(dataSelect(groups, tickets, order));
        }
      }, [tickets, dispatch, groups, users, order]);
    
    return (
        <div>
            <div className="outerContainer">
                <div className="navButton">
                    <div className="displayButton" onClick={() => handleDisplayClick()}>
                        <img src={filter_black} alt="filter" className='filterLogo' />
                        <p className='diplayButtonTitle'>Display</p>
                        <img src={down_black} alt="down arrow" className='arrowLogo' />
                    </div>

                    {
                        display && (
                            <div className="displayInnerOptions">
                                <div className="groupingSection" onChange={(e) => handleOnChange(e, true)}>
                                    <p className='groupingSectionTitle'>Grouping</p>
                                    <select className='subOptionsGrouping' value={groups} onChange={(e) => handleOnChange(e, true)}>
                                        <option value="priority" className='options'>Priority</option>
                                        <option value="status" className='options'>Status</option>
                                        <option value="user" className='options'>User</option>
                                    </select>
                                </div>
                                <div className="orderingSection" onChange={(e) => handleOnChange(e, false)}>
                                    <p className='orderingSectionTitle'>Ordering</p>
                                    <select className='subOptionsOrdering' value={order} onChange={(e) => handleOnChange(e, false)}>
                                        <option value="priority" className='options'>Priority</option>
                                        <option value="title" className='options'>Title</option>
                                    </select>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
