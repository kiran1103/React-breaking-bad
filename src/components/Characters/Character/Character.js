import React from 'react';
import classes from './Character.module.css'

const Character = (props) => {
    const { img, name, occupation, portrayed, status } = props.character;
    return (
        <div className={classes.flip_card}>
            <div className={classes.flip_card_inner}>
                <div className={classes.flip_card_front}>
                    <img src={img} alt={name} style={{ width: 300, height: 300, borderRadius: 4 }} />
                </div>
                <div className={classes.flip_card_back}>
                    <h3>{name}</h3>
                    <span>Portrayed: {portrayed}</span>
                    <span>Occupation: {occupation[0]}</span>
                    <span>Status: {status}</span>
                </div>
            </div>
        </div>
    )
};

export default Character;