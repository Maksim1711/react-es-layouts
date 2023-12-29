import '../App.css';

export default function CardsView({ products }) {
	const productsView = products.map((el) => {
		return <div className="card_container">
			<div className="card_contend">
				<h2 className="card_contend_header">{el.name}</h2>
				<p className="card_contend_color">{el.color}</p>
				<img className="card_contend_img" src={el.img} alt="smth" />
			</div>
			<div className="card_buy">
				<p className="card_buy_price">{el.price}</p>
				<button className="card_buy_btn">ADD TO CARD</button>
			</div>
		</div>
	})
	return (
		<div className="cardsView_container">
			{productsView}
		</div>

	);
}