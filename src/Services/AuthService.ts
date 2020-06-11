import { ApiService } from './ApiService';
import { Observable } from 'rxjs';
import { AiurValue } from '../Models/AiurValue';
import { KahlaUser } from '../Models/KahlaUser';

export class AuthService {
    constructor(private apiService: ApiService) {
    }
    
    public Me(): Observable<AiurValue<KahlaUser>> {
        return this.apiService.Get('https://dev.server.kahla.app/auth/me');
    }
}