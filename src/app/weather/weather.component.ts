import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather_service/weather.service';


interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
  }>;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public temp: number | undefined;
  public iconUrl: string | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;

      
      this.weatherService.getWeatherByCoords(latitude, longitude).subscribe((data: WeatherResponse) => {
        this.temp = Math.trunc(data.main.temp);
        let icon = data.weather[0].icon;
        this.iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      });
    });
  }
}

