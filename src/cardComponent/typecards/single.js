import React from 'react';
import person from '../person.png'
import { goBack } from '../functionalty/func';
import './single.css';


const SingleCards = ({user , setChoice }) => {
    console.log(user)
    return (
        <>
            <div className="singleCard">
                <div className="singleCardContainerHeader boxDesign">
                    <div className="imgDiv">
                        <img alt="person_photo" src={person}  />
                    </div>
                    <div className='userInfo'>
                        <h2>{user.name}</h2>
                        <p>{user.username}</p>
                    </div>
                    <div>
                        <button className="goBack" onClick={() => goBack(setChoice)}>Back</button>
                    </div>
                </div>
                <div className="singleCardContainerFooter boxDesign">
                    <div>
                        <h3>Contact Info</h3>
                            <ul>
                                <li>Email : <span>{user.email}</span></li>
                                <li>Phone.No : <span>{user.phone}</span></li>
                                <li>Website : <span>{user.website}</span></li>
                            </ul>
                    </div>
                    <div>
                        <h3>Address Info</h3>
                            <ul>
                                <li>City : <span>{user.address.city}</span></li>
                                <li>Street : <span>{user.address.street}</span></li>
                                <li>Suite : <span>{user.address.suite}</span></li>
                                <li>Zip Code : <span>{user.address.zipcode}</span></li>
                            </ul>
                    </div>
                    <div>
                        <h3>Company Info</h3>
                            <ul>
                                <li>Name : <span>{user.company.name}</span></li>
                                <li>Phrase : <span>{user.company.catchPhrase}</span></li>
                                <li>business : <span>{user.company.bs}</span></li>
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCards;