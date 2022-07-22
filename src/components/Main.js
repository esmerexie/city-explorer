import React from 'react';
import axios from 'axios';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      lat: 0,
      lon: 0,
      searchQuery:'',
      weather: [],
      location: {},
      map: ''
    }
  }

  getLocation = async () => {
    console.log(this.state.searchQuery);
    const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0])
    this.setState({ location:res.data[0] });
  }


  getWeather = () => {
    let url = `http://localhost:3001?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.forceUpdate.searchQuery}`;
  }

  render() {
    return(
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.location.place_id &&
          <h2>The city is: {this.state.location.display_name} Latitude: {this.state.location.lat} Longitude:{this.state.location.lat}</h2>
          
        }
      </>
    )
  }
}

export default Main;