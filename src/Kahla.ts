import { AuthService } from './Services/AuthService';
import { ApiService } from './Services/ApiService';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
class Kahla {
    constructor() {

    }

    main(): void {
        var injector = Injector.create([
            { provide: HttpClient, useClass: HttpClient, deps: [] }
        ]);
        var http = injector.get(HttpClient);
        var auth = new AuthService(new ApiService(http));
        auth.Me().subscribe(result => {
            console.log(result.message);
        });
    }
}

export default Kahla;