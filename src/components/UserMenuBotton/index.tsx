import { useEffect, useState } from "react";
import { FaArrowDown, FaUserAlt } from "react-icons/fa";
import style from "./index.module.scss";

export const UserMenuButton = () => {
	const [active, setActive] = useState(false);

	const handleActiveMenu = () => setActive(active ? false : true);

	useEffect(() => {
		active ? setTimeout(handleActiveMenu, 8000) : false;
	}, [active]);

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
					<div className={style.containerMenu} id="menuDropDown">
						<ul>
							<li>
								<a href="">My account</a>
							</li>
							<li>
								<a href="/login">Exit</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
};
