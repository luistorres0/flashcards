import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({crumbs = []}) => {

  const isLast = (index, arr) => {
    const lastIndex = arr.length - 1;

    return index === lastIndex;
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {crumbs.map((crumb, index) => {
          return (
            <li key={index} className="breadcrumb-item">
              {isLast(index, crumbs) ? (
                <p className="text-secondary m-0">{crumb}</p>
              ) : (
                <Link to="/">{crumb}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
