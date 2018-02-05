/*
 * Copyright (c) 2017 com2m GmbH.
 * All rights reserved.
 */
import {Injectable} from "@angular/core";
import {AppConfiguration} from "../app.configuration";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

@Injectable()
export class TokenService {

  private token: string;

  constructor(private http: HttpClient) {
  }

  public obtainAccessToken(username: string, password: string): Observable<string> {
    return new Observable<string>((observer: Subscriber<string>) => {
      let headers = new HttpHeaders();
      headers = headers
        .set("Authorization", "Basic " + btoa(AppConfiguration.CLIENT_ID + ":" + AppConfiguration.CLIENT_SECRET))
        .set("Content-Type", "application/x-www-form-urlencoded");
      this.http.post(`${this.getTokenUrl()}?grant_type=password&username=${username}&password=${password}`, null, {headers: headers}).subscribe(data => {
        this.token = data['access_token'];
        observer.next(this.token);
      });
    });
  }

  public getAccessToken(): string {
    return this.token;
  }

  private getTokenUrl(): string {
    return 'https://cloud.com2m.de/api/user-service/oauth/token';
  }

}
