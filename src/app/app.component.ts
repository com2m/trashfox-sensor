import {AfterContentInit, Component} from '@angular/core';
import {TokenService} from "./services/token.service";
import {AppConfiguration} from "./app.configuration";
import {SensorService} from "./services/sensor.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {

  values;
  level;

  constructor(private tokenService: TokenService,
              private sensorService: SensorService) {
  }

  ngAfterContentInit(): void {
    this.tokenService.obtainAccessToken(AppConfiguration.USERNAME, AppConfiguration.PASSWORD).subscribe(token => {
      this.sensorService.getLatestValues().subscribe((values: any) => {
        this.level = Math.round((1 - (parseInt(values.capacity.value) / 20)) * 100);
        values.latitude.value = parseFloat(values.latitude.value);
        values.longitude.value = parseFloat(values.longitude.value);
        this.values = values;
      });
    });
  }
}
