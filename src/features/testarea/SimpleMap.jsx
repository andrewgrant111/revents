import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red'></Icon>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    const {center} = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBiS9NrqJl-9XkROdVHTZjGiR9vw1DSjMY' }}
          center={center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;