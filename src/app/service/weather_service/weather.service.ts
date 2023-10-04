import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API_KEY: string = '1c9c6cb101e7e4d9930b3d50a680e21a';
  private readonly BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCoords(latitude: number, longitude: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.API_KEY}`);
  }
}

