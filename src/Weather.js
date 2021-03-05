import React from 'react';
import { connect } from 'react-redux';
import { Descriptions } from 'antd';

class Weather extends React.Component {
    componentDidMount(){
    this.props.onRequestWeather();
  }

  render() {
    const { fetching, weather} = this.props

    let convertDateTime = uTime => {
      var date = new Date(uTime*1000).toLocaleDateString('en-US')
      var time = new Date(uTime*1000).toLocaleTimeString('en-US')

      return date.concat(" " + time)
    }

    return(
      <div>
        {fetching
          ? <p> Loading </p>
          :
          <Descriptions title="Danang Weather" bordered>
          <Descriptions.Item label="Weather condition">{weather.weather[0].main}</Descriptions.Item>
          <Descriptions.Item label="Sunrise">{convertDateTime(weather.sys.sunrise)}</Descriptions.Item>
          <Descriptions.Item label="Sunset">{convertDateTime(weather.sys.sunset)}</Descriptions.Item>
          <Descriptions.Item label="Wind Degree">{weather.wind.deg}&#176;</Descriptions.Item>
          <Descriptions.Item label="Wind Speed">{weather.wind.speed}</Descriptions.Item>
          <Descriptions.Item label="Weather Info">
            <b>Temperature:</b> {weather.main.temp}&#8451;
            <br />
            <b>Feels like:</b> {weather.main.feels_like}&#8451;
            <br />
            <b>Min temperature:</b> {weather.main.temp_min}&#8451;
            <br />
            <b>Max temperature:</b> {weather.main.temp_max}&#8451;
            <br />
            <b>Humidity:</b> {weather.main.humidity}&#37;
            <br />
          </Descriptions.Item>
          <Descriptions.Item label="Last updated at">{convertDateTime(weather.dt)}</Descriptions.Item>
          </Descriptions>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    weather: state.weather,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestWeather: () => dispatch({ type: 'FETCH_WEATHER_REQUEST' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
