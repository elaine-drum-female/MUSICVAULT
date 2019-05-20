import React from 'react';
import CardBlockShop from '../utils/card_block_shop';

const LoadmoreCards = (props) => {
    return (
        <div>
            <div>
                <CardBlockShop 
                    grid={props.grid}
                    list={props.list}
                />
            </div>
        </div>
    );
};

export default LoadmoreCards;