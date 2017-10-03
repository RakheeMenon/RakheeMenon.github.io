import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemMasterService extends DataService {

  constructor(http:Http) {
    super('http://localhost:8000/ERPApp/',http)
   }

}
