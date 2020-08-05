// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
  production: true,
  
  /*
   * Header API: Dados gerais de identificação da rota principal
   *  - É necessário utilizar o token da entidade
   *  - Definir qual o sistema que esta consumindo as APIs
   */
  urlApi: "https://testes.tenisintegrado.com.br/apiLaravel/",
  //urlApi: "http://localhost/qjt2015/apiLaravel/",
  identifyToken: "+Br2ulRFSrzc8osTW64eEdq1iVz+W5JHMFyDJjCF525RvqmYKQf8n20GBoWiqPVA+Tko4yGoXLqEAeQ4lEmD1Q==",
  identifySystem: "2",


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
