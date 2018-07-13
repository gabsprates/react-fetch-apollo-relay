import React from "react";
import content from "./content.scss";

console.log(content);

const Content = () => {
    return (
        <div>
            <ul className={content.menu}>
                <li>movies</li>
                <li>people</li>
                <li>planets</li>
            </ul>
            <ul>

            </ul>
        </div>
    );
};

export default Content;
