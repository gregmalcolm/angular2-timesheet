import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, RequestOptionsArgs, RequestMethod, Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExtHttp {
  private token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJEZXVKR3VWdU5jQW05bkt6IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWl4dGFwZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZmlyc3ROYW1lIjoiQWRtaW4iLCJsYXN0TmFtZSI6IlVzZXIifQ.Zm3RCaLwJYWNBPOz8yMzbASQJMtH8oIUXyTIpLyAEbE';

  private HEADER_PREFIX: string = 'Bearer ';
  private urlRoot: string;
  constructor(private _http: Http) {
    this.urlRoot = 'https://production.com';

    let host = window.location.hostname;

    if (host === 'localhost') {
      this.urlRoot = 'http://localhost:4000';
    }

  }

  private _createAuthHeaders(): Headers {
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.token
    });

    return headers;
  }

  public get(url: string, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: any, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Post, url, JSON.stringify(body), options);
  }

  public put(url: string, body: any, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Put, url, JSON.stringify(body), options);
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  private _request(method: RequestMethod, relativeUrl: string, body?: string, options?: RequestOptionsArgs): Observable<any> {
    let url = this.urlRoot + relativeUrl;
    let requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: body,
      headers: this._createAuthHeaders()
    }, options));
    return Observable.create((observer) => {
      this._http.request(new Request(requestOptions))
        .subscribe(
          (res) => {
            observer.next(res);
            observer.complete();
          },
          (err) => {
            switch (err.status) {
              case 401:
                observer.complete();
                break;
              case 403:
                observer.complete();
                break;
              case 500:
                observer.complete();
                break;
              default:
                observer.error(err);
                break;
            }
          });
    });
  }
}
