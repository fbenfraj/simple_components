import React from "react";
import { SelectComponent } from "../components/Select.component";
import { DeleteButton } from "../components/DeleteButton.component";

export class SelectAndButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValues: ["Zèbre", "Cheval", "Lama"],
            selectedValue: ""
        }

        this.deleteValue = this.deleteValue.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount(props) {
        const value = this.state.selectValues[0];
        this.setState({
            selectedValue: value
        })
    }

    deleteValue() {
        let valuesArray = this.state.selectValues;
        const index = valuesArray.indexOf(this.state.selectedValue);
        valuesArray.splice(index, 1);
        this.setState({
            selectValues: valuesArray
        })
    }

    changeValue(e) {
        console.log("Value changed!");
        this.setState({
            selectedValue: e.target.value
        })
    }

    render() {
        return(
            <div>
                <SelectComponent passedValues={this.state.selectValues} changeValue={this.changeValue}/>
                <DeleteButton onClick={this.deleteValue}>Delete</DeleteButton>
            </div>
        );
    }
}