import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salads', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'}
]

const buildControls = props => {
    const transformedControls = controls.map((control, index) => <BuildControl key={control.type} label={control.label} />)

    return (
        <div className={classes.BuildControls}>
            {transformedControls}
        </div>
    );
};

export default buildControls;