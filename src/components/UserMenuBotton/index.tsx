import { useState } from "react";
import { FaArrowDown, FaUserAlt } from "react-icons/fa";
import style from "./index.module.scss";

export const UserMenuButton = () => {
	const [active, setActive] = useState(false);

	const handleActiveMenu = () => {
		setActive(active ? false : true);
	};

	return (
		<>
			<div className={style.containerUser}>
				<div className={style.iconUser}>
					<FaUserAlt color="#f99b28" />
				</div>
				<button className={style.buttonSing} onClick={handleActiveMenu}>
					<span>Hi! Williams Calado</span> <FaArrowDown color="#1a1717" />
				</button>

				{active && (
					<div className={style.containerMenu}>
						<ul>
							<li>My account</li>
							<li>Exit</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
};
