import { routeAddress } from '../http/route_address';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Classe abstrata reutilizável para todos os serviços
 */
export abstract class BaseService {

    /**
     * Constants: Definidas no arquivo de ambiênte environment
     */
    protected urlService: string = environment.urlApi;
    protected identifyToken: string = environment.identifyToken;
    protected identifySystem: string = environment.identifySystem;
    
    /**
     * Recebe os endereços das apis a serem utilizadas
     */
    protected routeAdress = routeAddress;


    /**
     * getHeaderJson: Montar header para envio na API
     */
    protected getHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'Cache-Control:no-cache'
            })
        }
    }

    /**
     * body: inicializar valores iniciais para POST
     * Utilizado em todas as chamadas de API
     */
    public setBody(): any {
        let body = new URLSearchParams();
        // Token de identificação da entidade usuária do ADM
        body.set('token', this.identifyToken);
        // Token de identificação do sistema utilizado
        body.set('system', this.identifySystem);

        return body;
    }

    protected extractData(response: any) {
        return response || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === 'Unknown Error') {
                customError.push("ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }

        console.error(response);
        return throwError(response);
    }
}
