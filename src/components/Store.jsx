import '../App.css';
import CardsView from './CardsView';
import { useState } from 'react';
import { ListView } from './ListView';
import IconSwitch from './IconSwitch';
const prod = [{
	name: "Nike Metcon 2",
	price: "130",
	color: "red",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
	name: "Nike Metcon 2",
	price: "130",
	color: "green",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
	name: "Nike Metcon 2",
	price: "130",
	color: "blue",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
	name: "Nike Metcon 2",
	price: "130",
	color: "black",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
	name: "Nike free run",
	price: "170",
	color: "black",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
	name: "Nike Metcon 3",
	price: "150",
	color: "green",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];


function Store() {
	const [state, setState] = useState(true)
	let iconView = state ? "view_list" : 'view_module';
	let viewOfCards = state ? <ListView products={prod} /> : <CardsView products={prod} />;
	return (
		<div className='container'>
			<IconSwitch icon={iconView} onSwitch={() => setState(!state)} />
			{viewOfCards}
		</div>


	);
}

export default Store;