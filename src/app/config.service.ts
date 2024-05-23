import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ConfigService {
  private configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    return this.http.get<any>(this.configUrl);
  }
}
