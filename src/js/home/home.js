import React from "react";
import home from "./home.scss";
import titles from "../../sass/titles.scss";

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            size: null,
            color: null
        };

        this.getColorOptions = this.getColorOptions.bind(this);
        this.getSizesOptions = this.getSizesOptions.bind(this);

        this.changeValueByRadio = this.changeValueByRadio.bind(this);
    }

    changeValueByRadio(e) {
        const obj = {};
        const { target } = e;

        console.log(target.name + target.value);

        obj[target.name] = titles[target.name + target.value];

        this.setState(obj);
    }

    getColorOptions() {
        return Array(6).fill(1).map((_, i) => (
            <label>
                <input value={i} name="color" type="radio" onChange={this.changeValueByRadio} />
                color {i}
            </label>
        ));
    }

    getSizesOptions() {
        return Array(6).fill(1).map((_, i) => (
            <label>
                <input value={i} name="size" type="radio" onChange={this.changeValueByRadio} />
                size {i}
            </label>
        ));
    }

    render() {
        const cssClass = [];

        this.state.size && cssClass.push(this.state.size);
        this.state.color && cssClass.push(this.state.color);

        return (
            <div className={home.home}>
                <h1 className={cssClass.join(" ")}>Teste</h1>

                <fieldset>
                    <legend>sizes</legend>
                    {this.getSizesOptions()}
                </fieldset>

                <fieldset>
                    <legend>colors</legend>
                    {this.getColorOptions()}
                </fieldset>
            </div>
        );
    }
};

export default Home;
