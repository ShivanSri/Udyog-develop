import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilitiesService } from '../../app/services/http-utilities.service';
import { WebApiUrlService } from '../../app/services/web-api-url.service';
import { SiteModel } from '../models/sitemodel';
import { state } from '@angular/animations';
import { id } from '@swimlane/ngx-datatable';

@Injectable()
export class MasterDataService {

    constructor(private httpUtilitiesService: HttpUtilitiesService, private webApiUrlService: WebApiUrlService) { }

    // Countries Method
    getAllCountry = (): Observable<SiteModel.Country> => {
        var url = this.webApiUrlService.getAllCountry();
        return this.httpUtilitiesService.httpGet<SiteModel.Country>(url);
    }

    getCountryById = (id: number): Observable<SiteModel.Country> => {
        var url = this.webApiUrlService.getCountryByID(id);
        return this.httpUtilitiesService.httpGet<SiteModel.Country>(url);
    }

    createCountry = (country: SiteModel.Country): Observable<SiteModel.Country> => {
        var url = this.webApiUrlService.createCountry();
        return this.httpUtilitiesService.httpPost<SiteModel.Country>(url, country);
    }

    updateCountry = (countryID: number): Observable<SiteModel.Country> => {
        var url = this.webApiUrlService.updateCountry();
        return this.httpUtilitiesService.httpPost<SiteModel.Country>(url, countryID);
    }

    // States
    getAllStates = (): Observable<SiteModel.State> => {
        var url = this.webApiUrlService.getAllStates();
        return this.httpUtilitiesService.httpGet<SiteModel.State>(url);
    }

    getStateById = (id: number): Observable<SiteModel.State> => {
        var url = this.webApiUrlService.getStateByID(id);
        return this.httpUtilitiesService.httpGet<SiteModel.State>(url);
    }

    createState = (state: SiteModel.State): Observable<SiteModel.State> => {
        var url = this.webApiUrlService.createState();
        return this.httpUtilitiesService.httpPost<SiteModel.State>(url, state);
    }

    updateState = (stateID: number): Observable<SiteModel.State> => {
        var url = this.webApiUrlService.updateState();
        return this.httpUtilitiesService.httpPost<SiteModel.State>(url, stateID);
    }

    //cities
    getAllCities = (): Observable<SiteModel.City[]> => {
        var url = this.webApiUrlService.getAllCities();
        return this.httpUtilitiesService.httpGet<SiteModel.City[]>(url);
    }

    getCitiesById = (id: number): Observable<SiteModel.City> => {
        var url = this.webApiUrlService.getCityByID(id);
        return this.httpUtilitiesService.httpGet<SiteModel.City>(url);
    }



    createCity = (city: SiteModel.City): Observable<SiteModel.City> => {
        var url = this.webApiUrlService.createCity();
        return this.httpUtilitiesService.httpPost<SiteModel.City>(url, city);
    }

    updateCity = (cityID: number): Observable<SiteModel.City> => {
        var url = this.webApiUrlService.updateCity();
        return this.httpUtilitiesService.httpPost<SiteModel.City>(url, cityID);
    }

    getAllCompany = (): Observable<SiteModel.Companies> => {
        var url = this.webApiUrlService.getAllCompany();
        return this.httpUtilitiesService.httpGet<SiteModel.Companies>(url);
    }

    getAllUniversities = (): Observable<SiteModel.University[]> => {
        var url = this.webApiUrlService.getAllUniversities();
        return this.httpUtilitiesService.httpGet<SiteModel.University[]>(url);
    }


    getAllUser = (): Observable<SiteModel.CreateUser> => {
        var url = this.webApiUrlService.getAllUsers();
        return this.httpUtilitiesService.httpGet<SiteModel.CreateUser>(url);
    }

    getAllUsers = (): Observable<SiteModel.User[]> => {
        var url = this.webApiUrlService.getAllUsers();
        return this.httpUtilitiesService.httpGet<SiteModel.User[]>(url);
    }

    getUserById = (id: number): Observable<SiteModel.CreateUser> => {
        var url = this.webApiUrlService.getUserById(id);
        return this.httpUtilitiesService.httpGet<SiteModel.CreateUser>(url);
    }

    getUserByType = (usertype: string): Observable<SiteModel.User[]> => {
        var url = this.webApiUrlService.getUserByType(usertype);
        return this.httpUtilitiesService.httpGet<SiteModel.User[]>(url);
    }

    changePassword = (changePassword: SiteModel.ChangePassword): Observable<SiteModel.ChangePassword> => {
        var url = this.webApiUrlService.changePassword();
        return this.httpUtilitiesService.httpPut<SiteModel.ChangePassword>(url,changePassword);
    }

    changePasswordByAdmin = (changePasswordByAdmin: SiteModel.ChangePasswordByAdmin): Observable<SiteModel.ChangePasswordByAdmin> => {
        var url = this.webApiUrlService.changePassword();
        return this.httpUtilitiesService.httpPut<SiteModel.ChangePasswordByAdmin>(url,changePasswordByAdmin);
    }
   
    getAllLanguages = (): Observable<SiteModel.Languages[]> => {
        var url = this.webApiUrlService.getAllLanguages();
        return this.httpUtilitiesService.httpGet<SiteModel.Languages[]>(url);
    }


    // *******************************************************************//

    GetAllCountry = (): void => {
        this.getAllCountry().subscribe(result => {
            if (result) {
                console.log(result);
            }
        })
    }

    GetCountryByID = (id): void => {
        
        this.getCountryById(id).subscribe(result => {
            if (result) {
                
                console.log(result);
            }
        })
    }

    GetAllState = (): void => {
        
        this.getAllStates().subscribe(result => {
            if (result) {
                console.log(result);
            }
        })
    }

    GetstateByID = (id): void => {
        
        this.getStateById(id).subscribe(result => {
            if (result) {
                
                console.log(result);
            }
        })
    }

    GetAllCities = (): void => {
        
        this.getAllCities().subscribe(result => {
            if (result) {
                console.log(result);
            }
        })
    }

    GetCityByID = (id): void => {
        
        this.getCitiesById(id).subscribe(result => {
            if (result) {
                
                console.log(result);
            }
        })
    }

    getAllRoles = (): Observable<SiteModel.Role[]> => {
        var url = this.webApiUrlService.getAllRoles();
        return this.httpUtilitiesService.httpGet<SiteModel.Role[]>(url);
    }

    getAllCurrencies = (): Observable<SiteModel.Currency[]> => {
        var url = this.webApiUrlService.getCurrencies();
        return this.httpUtilitiesService.httpGet<SiteModel.Currency[]>(url);
    }

    getCurrenciesById = (id: number): Observable<SiteModel.Currency> => {
        var url = this.webApiUrlService.getCurrencyByID(id);
        return this.httpUtilitiesService.httpGet<SiteModel.Currency>(url);
    }


    GetAllCurrencies = (): void => {
        
        this.getAllCurrencies().subscribe(result => {
            if (result) {
                console.log(result);
            }
        })
    }

    GetCurrencyByID = (id): void => {
        
        this.getCurrenciesById(id).subscribe(result => {
            if (result) {
                console.log(result);
            }
        })
    }
}
