import {useState} from 'react';
import './block.sass'

const Block = ({view, onDelBlock, squares}) => {
    let [counter, setCounter] = useState(Math.floor(Math.random() * (11 - 1) + 1));
    let [isDead, setDeath] = useState(false);


    let onLess = () => {
        let curCounter = counter == 0 ? counter : counter-1;
        if (curCounter == 0 && !isDead){
            onDelBlock();
            setDeath(true)
        }
        setCounter(curCounter);
    }
    
    let blockClass = counter == 0 ? `${view} ${view}_zero` : `${view}`
    let isSquares = squares ? ` block_squares` : ''
    return(
        <div className={blockClass+isSquares} onClick={() => onLess()}>
            <p className='block__text'>{counter}</p>
        </div>
        
    )
}

export default Block;