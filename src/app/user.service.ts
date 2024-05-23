import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => users.find(user => user.id === userId))
    );
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

}
