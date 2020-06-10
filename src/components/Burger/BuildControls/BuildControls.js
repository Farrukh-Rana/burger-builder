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
    const transformedControls = controls.map((control, index) => <BuildControl key={control.type}
                                                                                label={control.label}
                                                                                add={() => props.ingredientAdded(control.type)}
                                                                                remove={() => props.ingredientRemoved(control.type)}
                                                                                disabled={props.disabled[control.type]} />)

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {transformedControls}
        </div>
    );
};

export default buildControls;