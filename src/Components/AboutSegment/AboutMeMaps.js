import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl } from "react-mapbox-gl";

import { parseString } from "xml2js";
import { Map } from "immutable";
import config from "./config.json";

const { accessToken, style } = config;



const containerStyle = {
  height: "100vh",
  width: "100%"
};

const styles = {
  button: {
    cursor: "pointer"
  },

  stationDescription: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "16px 0px",
    textAlign: "center",
    backgroundColor: "white"
  },

  popup: {
    background: "#fff",
    padding: "5px",
    borderRadius: "2px"
  }
}

//Add if you want to set bounds
// const maxBounds = [
//       [-0.481747846041145,51.3233379650232], // South West
//       [0.23441119994140536,51.654967740310525], // North East
// ];

export default class AboutMeMaps extends Component {

  state = {
    center: [-122.4194, 37.7749],
    zoom: [11],
    skip: 0,
    stations: new Map(),
    popupShowLabel: true,
  };

componentWillReceiveProps(nextProps) {
    // console.log(nextProps.reports.reports.organisation)
    var data = nextProps.reports.reports.organisation
    var name = data.address
    // var reports = data.reports
    const obj = [{
      id: ["1"],
      installDate: ["1278947280000"],
      installed: ["true"],
      lat: ["37.7749"],
      locked: ["false"],
      long: ["-122.4194"],
      name: [name],
      nbBikes: ["14"],
      nbDocks: ["19"],
      nbEmptyDocks: ["5"],
      removalDate: [""],
      temporary: ["false"],
      terminalName: ["001023"]
    }]

    this.setState(({ stations }) => ({
        stations: stations.merge(obj.reduce((acc, station) => {
          return acc.set(station.id[0], new Map({
            id: station.id[0],
            name: station.name[0],
            position: [ parseFloat(station.long[0]), parseFloat(station.lat[0]) ],
            bikes: parseInt(station.nbBikes[0]),
            slots: parseInt(station.nbDocks[0])
          }))
        }, new Map()))
    }));
  };

  _markerClick = (station, { feature }) => {
    this.setState({
      center: feature.geometry.coordinates,
      zoom: [14],
      station
    });
  };

  _onDrag = () => {
    if (this.state.station) {
      this.setState({
        station: null
      });
    }
  };

  _setMove = (end) => {
    if(end !== this.state.end)
      this.setState({ end });
  };

  _onToggleHover(cursor, { map }) {
    map.getCanvas().style.cursor = cursor;
  }

  _onControlClick = (map, zoomDiff) => {
    const zoom = map.getZoom() + zoomDiff;
    this.setState({ zoom: [zoom] });
  };

  _popupChange(popupShowLabel) {
    this.setState({ popupShowLabel });
  }

  render() {
    const { stations, station, skip, end, popupShowLabel, obj } = this.state;

    return (
      <div className="MapBoxContainer">
        <ReactMapboxGl
          style={style}
          center={this.state.center}
          zoom={this.state.zoom}
          minZoom={8}
          maxZoom={15}
          // maxBounds={maxBounds}
          accessToken={accessToken}
          onDrag={this._onDrag}
          onMoveEnd={this._setMove.bind(this, true)}
          onMove={this._setMove.bind(this, false)}
          containerStyle={containerStyle}>

          <ZoomControl
            zoomDiff={1}
            onControlClick={this._onControlClick}
            />
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            {
              stations
                .map((station, index) => (
                  <Feature
                    key={station.get("id")}
                    onHover={this._onToggleHover.bind(this, "pointer")}
                    onEndHover={this._onToggleHover.bind(this, "")}
                    onClick={this._markerClick.bind(this, station)}
                    coordinates={station.get("position")}/>
                )).toArray()
            }
          </Layer>

          {
            station && end && (
              <Popup key={station.get("id")} coordinates={station.get("position")} closeButton={true}>
                <div>
                  <span style={{
                    ...styles.popup,
                    display: popupShowLabel ? "block" : "none"
                  }}>
                    {station.get("name")}
                  </span>
                  <div onClick={this._popupChange.bind(this, !popupShowLabel)}>
                    {
                      popupShowLabel ? "Hide" : "Show"
                    }
                  </div>
                </div>
              </Popup>
            )
          }
        </ReactMapboxGl>
      </div>
    )
  }
}