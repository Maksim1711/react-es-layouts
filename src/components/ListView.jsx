import '../App.css';

export function ListView({ products }) {
	const productsView = products.map((el) => {
		return <li className="list_container">
			<img className="list_img" src={el.img} alt="smth" />
			<li className="list_header">{el.name}</li>
			<li className="list_color">{el.color}</li>
			<li className="list_price">${el.price}</li>
			<li><button className="list_btn">ADD TO CARD</button></li>
		</li>
	})
	return (
		<ul className="ListView_container">
			{productsView}
		</ul>

	);
}