import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class HomeService {
  constructor(public http:Http) {

  }

  getAll(searchTerm: string) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('q', searchTerm);
      return this.http.get('/api/review', { search: params})
          // map the `HTTP` response from `raw` to `JSON` format
          // using `RxJs`
          // Reference: https://github.com/Reactive-Extensions/RxJS
          .map(res => res.json());
  }
}
