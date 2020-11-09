import React, {Component} from "react";

// COMPONENTS
import ListItems from "../app-list/app-list";
import ItemDetails from "../item-details/item-details";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../app-row/app-row";

export default class Page extends Component {

  state = {
    selectedItem : 1
  }

  onItemSelected = (id) => this.setState({selectedItem : id});

  render() {
    const listItems = (
      <ListItems getData={this.props.getData} onItemSelected={this.onItemSelected} />
    );

    const itemDetails = (
      <ItemDetails selectedItem={this.state.selectedItem} />
    );

    return (
      <ErrorBoundry>
        <Row left={listItems} right={itemDetails} />
      </ErrorBoundry>
    )
  }
}