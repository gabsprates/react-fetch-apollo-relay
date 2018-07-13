import React from "react";
import home from "./home.scss";

import Content from "../content/content";

const Home = () => {
    return (
        <div className={home.home}>
            <h1>React Fetch: Apollo vs. Relay</h1>
            <Content />
        </div>
    );
};

export default Home;
