import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

export class ApiService {

    private _headers: HttpHeaders =
        new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

    constructor(private http: HttpClient) {
    }

    public Get<T>(address: string): Observable<T> {
        return this.GetByFullUrl<T>(address);
    }

    public GetByFullUrl<T>(address: string, withCredentials = true): Observable<T> {
        return this.http.get<T>(address, {
            headers: this._headers,
            withCredentials: withCredentials
        }).pipe(catchError(this.handleError));
    }

    public handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }
}
