// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purpose } from '../../models/purpose.interface';
import { map } from 'rxjs/operators';
import { GetIdAndName  } from '../../models/getIdAndName.interface';
import { URL } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
 

  getContactPerson(): Observable<string[]> {
    const apiUrl = `${URL}/Visitor/GetPersonInContact`;
    return this.http.get<{ $id: string, $values: string[] }>(apiUrl).pipe(
      map((response: { $id: string, $values: string[] }) => response.$values)
    );
  }
       
    
  getVisitPurpose(): Observable<Purpose[]> {
    const apiUrl = `${URL}/PurposeOfVisit/GetPurposes/get-purposes-id-Name`;
    return this.http.get<{ $id: string, $values: Purpose[] }>(apiUrl).pipe(
      map(response => response.$values)
    );
  }
      
  getDevice():Observable<GetIdAndName []>{
    const apiUrl=`${URL}/Device/GetItems/get-device-id-name`;
    return this.http.get<{ $id: string, $values: GetIdAndName [] }>(apiUrl).pipe(
      map(response => response.$values)
    );
   }

   createVisitorAndAddItem(visitor:any):Observable<any[]>{
    console.log("log details",visitor);
    visitor.OfficeLocationId = 1;
    const apiUrl=`${URL}/Visitor/CreateVisitorAndAddItem/create-and-add-item`;
     return this.http.post<any>(apiUrl,visitor);
   }

  
addPurpose(purpose: string): Observable<Purpose> {
  const apiUrl = `${URL}/Purpose/PostPurpose`; // Adjust URL as per your API endpoint

  return this.http.post<Purpose>(apiUrl, { purposeName: purpose });
}
addDevice(device: { deviceName: string }): Observable<GetIdAndName > {
  return this.http.post<GetIdAndName >(`${URL}/Device/PostDevice`, device);
}
   
   

};

