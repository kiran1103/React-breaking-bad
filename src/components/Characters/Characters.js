import React from 'react';

import classes from './Characters.module.css';
import Character from './Character/Character';
import Loading from './../Loading/loading';

const Characters = ({ characters, loading }) => {
    return (
        loading ?
            <Loading />
            :
            <div className={classes.container} >
                {
                    characters.map(person => {
                        return (
                            <Character character={person} key={person.char_id} />
                        )
                    })
                }
            </div>
    )
}

export default Characters;