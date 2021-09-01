import "./Breadcrumb.scss";

import React from "react";

export const Breadcrumb = ({ paths = [] }) => {
	if (!paths) {
		return <div></div>;
	}

	return (
		<ul className="ml-breadcrumb">
			{paths.map((path, index) => (
				<li key={index} className="ml-breadcrumb__item">
					{path}
				</li>
			))}
		</ul>
	);
};
