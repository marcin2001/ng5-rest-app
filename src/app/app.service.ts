import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MembService {

  readonly HT_URL: string = 'http://localhost:3000/dataFamily';
  readonly URL_FREND : string = "http://localhost:3000/frends";
  readonly HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
 

  constructor( private http: HttpClient ) { }

  getMembers()  {
    return this.http.get( this.HT_URL );
  }

  addMember( memb ) {
    return this.http.post( this.HT_URL , memb);
  }

  delMember( member ) {
    const deletUrl = this.HT_URL + '/' + member;
    return this.http.delete( deletUrl );
  }

  updateMember(member) {
    const updateUrl = this.HT_URL + '/' + member.id;
    delete member.id;
    return this.http.put(updateUrl, member );
  }
  getFindMembers( member ){
    const params = new HttpParams().set('q', member);
    return this.http.get(`${this.HT_URL}`, { params }) 
  }

  // frendRequest

  getFrends()  {
    return this.http.get( this.URL_FREND );
  }

  addFrend( frend ) {
    return this.http.post( this.URL_FREND , frend);
  }

  deleteFrend( frend ) {
    const deletUrl = this.URL_FREND + '/' + frend;
    return this.http.delete( deletUrl );
  }

  updateFrend(frend) {
    const updateUrl = this.URL_FREND + '/' + frend.id;
    delete frend.id;
    return this.http.put(updateUrl, frend );
  }
  getFindFrend( frend ){
    const params = new HttpParams().set('q', frend);
    return this.http.get(`${this.URL_FREND}`, { params }) 
  }


}
