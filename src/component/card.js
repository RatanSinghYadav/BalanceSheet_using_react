import React from 'react';
import './style/card.css';

function Card() {
    return (
        <div className='mainCardBox row'>
            <div className='cardbox col-3 cardBox_1'>
                <h5 className='textFont'>$ 400,000</h5>
                <h6 className='textFont_1'>Total Budget you own</h6>
            </div>
            <div className='cardbox col-3 cardBox_2'>
                <h2 className='textFont'>$ 299,762</h2>
                <h6 className='textFont_1'>Spent month-to-date</h6>
            </div>
            <div className='cardbox col-3 cardBox_3'>
                <h2 className='textFont'>$ 2,874,582</h2>
                <h6 className='textFont_1'>Forecasted till month end</h6>
            </div>
        </div>
    )
}

export default Card;