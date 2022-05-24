import {useState} from 'react';
import Block from '../block/block';
import './App.sass';

function App() {
	let [blockCounter, setBlockCounter] = useState(9);

	const onDelBlock = () => {
		setBlockCounter(blockCounter-1)
	}
	//классы задаются через проп view(возможные варианты: block и octagon)
	//желтые квадраты через проп squares(true: появляются на блоке, false: скрываются)
  	return (
		<div className='page__wrapper'>
			<h1>Осталось уничтожить {blockCounter} блоков</h1>
			<div className="block__wrapper">
				<Block view='block' onDelBlock={onDelBlock}/>
				<Block view='block' onDelBlock={onDelBlock}/>
				<Block view='block' onDelBlock={onDelBlock}/>
				<Block view='block' onDelBlock={onDelBlock}/>
				<Block view='octagon' onDelBlock={onDelBlock}/>
				<Block view='block' onDelBlock={onDelBlock}/>
				<Block view='block' squares={true} onDelBlock={onDelBlock}/>
				<Block view='block' squares={true} onDelBlock={onDelBlock}/>
				<Block view='block' onDelBlock={onDelBlock}/>
			</div>
		</div>
 	);
}

export default App;
