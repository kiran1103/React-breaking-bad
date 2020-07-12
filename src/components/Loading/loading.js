import React from 'react';
import classes from './loading.module.css';

const Loading = () => {
    return (
        <div className={classes.container}>
            <div className={classes.lds_ripple}><div></div></div>
        </div>
    )
}

export default Loading;