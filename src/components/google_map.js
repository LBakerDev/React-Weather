import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // Finds what part of html to render the Map
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map" />;
    }

}

export default GoogleMap;