import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page, PagesResponse } from '../../models/page.interface';
import { UpdateRolePagesDTO } from '../../models/update.interface';
import { RoleOverview } from '../../models/RoleOverview.interface';
import {URL} from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  // private Pageroles = `${URL}/Page/GetPages';
  // private role = 'your_api_base_url';
  // private apiUrl = 'your_api_base_url';
  // private roleIdSource = new BehaviorSubject<number>(0);
  // currentRoleId = this.roleIdSource.asObservable();

  // setRoleId(id: number) {
  //   this.roleIdSource.next(id);
  // }


  constructor(private http: HttpClient) {}
  private baseUrl = `${URL}/AdminRole`; // Update with your actual base URL

  getPages(): Observable<any> {
    return this.http.get<any>(`${URL}/AdminRole/GetPages/get-pages`);
  }
 
  createRole(roleData: any): Observable<any> {
    return this.http.post<any>(`${URL}/AdminRole/PostRole`, roleData);
  }
  createPageControls(roleId: number, pageControls: any): Observable<any> {
    return this.http.post(`${URL}/AdminRole/CreatePageControls?roleId=${roleId}`, pageControls);
  }

  updateRolePages(updateRolePagesDTO: UpdateRolePagesDTO): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/UpdateRolePages`, updateRolePagesDTO);
  }


  getRoleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Getroles/get-role-by-id/${id}`);
  }
  

  getPagesByRoleId(roleId: number): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.baseUrl}/GetPagesByRoleId/${roleId}`);
  }

  getAllRoles(): Observable<RoleOverview[]> {
    return this.http.get<RoleOverview[]>(`${this.baseUrl}/GetRoleIdAndName/get-role-id-name`);
  }
  deleteRole(roleId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteRole/${roleId}`);
  }


}

