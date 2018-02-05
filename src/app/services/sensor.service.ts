/*
 * Copyright (c) 2017 com2m GmbH.
 * All rights reserved.
 */
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TokenService} from "./token.service";

@Injectable()
export class SensorService {


  constructor(private tokenService: TokenService,
              private http: HttpClient) {
  }

  public getLatestValues(): Observable<Object> {
    let id = '98e45e91-86f6-4f0b-92a1-a68d877f7c59';
    return this.http.get(`https://cloud.com2m.de/api/time-series-service/data-points/values/${id}/latest`, this.getHeaderOptions());
  }

  private getHeaderOptions() {
    let headers = new HttpHeaders()
      .set("Authorization", "Bearer " + this.tokenService.getAccessToken())
      .set("Content-Type", "application/x-www-form-urlencoded")
    return {
      headers: headers
    };
  }

}
