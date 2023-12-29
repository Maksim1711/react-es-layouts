
function IconSwitch({ icon, onSwitch }) {

	return (
		<div className='icon_container'><p onClick={onSwitch} className="material-icons">{icon}</p></div>
	);
}

export default IconSwitch