import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { GlobalVaribles } from './../../../../shared/globalVariables/globalVariable';

import 'rxjs/add/operator/map';
import 'rxjs/';
@Injectable()
export class CashInHandsService {
  private paramCompanyName: string;
  result: {};
  token: string;
  windowStorage: any;
  _url: string;
  contentId: string;

  constructor(
    private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    public _globalVariableService: GlobalVaribles
  ) {
    this.windowStorage = JSON.parse(window.localStorage.getItem('user'));
    this.token = this.windowStorage.token;
    // console.log(this.paramCompanyName)
  }

  getIncomingData(ledgerName, compName) {
    this._url = `${this._globalVariableService.baseServerUrl}/api/cashInHand?token=${
      this.token
    }&&companyName=${compName}&&ledgerSelect=${ledgerName}`;
    return this.http.get(this._url);
  }

  getLedgerNameData(compName) {
    this._url = `${this._globalVariableService.baseServerUrl}/api/ledgerNameCashInHand?token=${
      this.token
    }&&companyName=${compName}`;
    return this.http.get(this._url);
  }
}
