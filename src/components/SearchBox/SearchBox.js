import "./SearchBox.scss";

import React, { useState } from "react";
import LogoMl from "../../assets/icons/Logo_ML.png";
import SearchIcon from "../../assets/icons/ic_search.png";

export const SearchBox = ({ querySearch = "" }) => {
	const [searchValue, setSearchValue] = useState(querySearch);

	const performSearch = () => {};

	return (
		<header className="ml-header">
			<div className="ml-header__inner">
				<img src={LogoMl} alt="Mercado Libre" />
				<form onSubmit={performSearch} className="ml-header__form">
					<input
						type="search"
						id="search"
						name="search"
						placeholder="Nunca dejes de buscar"
						className="ml-header__form-search-input"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<button
						type="submit"
						aria-label="Buscar"
						className="ml-header__form-submit"
					>
						<img src={SearchIcon} alt="Buscar" />
					</button>
				</form>
			</div>
		</header>
	);
};
