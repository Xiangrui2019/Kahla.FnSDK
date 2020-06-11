import { AuthService } from './Services/AuthService';
import { ApiService } from './Services/ApiService';
import { HttpClient } from '@angular/common/http';

class Kahla {
    constructor() {

    }

    main(): void {
        var auth = new AuthService(new ApiService(new HttpClient(null)));
        auth.Me().subscribe(result => {
            console.log(result.message);
        });
    }
}

export default Kahla;