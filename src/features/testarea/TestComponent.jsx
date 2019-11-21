import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

// MapStateToProps
const mapState = state => ({
  data: state.test.data
});

// MapDispatchToProps
const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {
  handleCitySelect = selectedCity => {
    console.log("Test3");
    geocodeByAddress(selectedCity).then(results =>
      getLatLng(results[0]).then(latlng =>
        this.setState({ cityLatLng: latlng })
      )
    );
  };

  state = {
    cityLatLng: {
      lat: 59.95,
      lng: 30.3
    }
  };

  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content='Increment' />
        <Button onClick={decrementCounter} negative content='Decrement' />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color='teal'
          content='Open Modal'w
        />

        <br />
        <br />
        <TestPlaceInput onSelect={this.handleCitySelect}></TestPlaceInput>
        <SimpleMap center={this.state.cityLatLng}></SimpleMap>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
