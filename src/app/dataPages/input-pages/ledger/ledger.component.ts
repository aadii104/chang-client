import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TitleCasePipe } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { LedgerService } from './service/ledger.service';

declare var $: any;

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],
})
export class LedgerComponent implements OnInit {
  form: FormGroup;
  selectedIndex = 1;
  dataCopy: any;
  paramId: string;
  closeResult: string;
  public underGroupItems: Array<string> = [
    'cash in hand(dr)',
    'cash at bank(dr)',
    'sales a / c(cr)',
    'purchases a / c(dr)',
    'stock in hand(dr)',
    'sundry debtors(dr)',
    'sundry creditors(cr)',
    'current asset(dr)',
    'current liabilities(cr)',
    'non - current assets(dr)',
    'non - current liabilities(cr)',
    'capital(cr)',
    'bank overdraft(cr)',
    'duties and taxes(cr)',
    'Deposit(asset)(DR)',
    'Direct expenses(DR)',
    'Direct Income(CR)',
    'indirect expense(DR)',
    'Indirect Income(CR)',
    'Fixed Asset(DR)',
    'Investments(DR)',
    'Loans & advances(Asset)(DR)',
    'Loans(liability)(CR)',
    'Reserves and Surplus(CR)',
    'Provisions(CR)',
    'Bad debt(DR)',
    'Suspense.',
  ];
  public applicableTaxItems = [
    'GST',
    'Other',
    'Not Applicable'
  ];
  public businessTypeItems = [
    'Goods',
    'Services',
    'Other'
  ];
  constructor(
    private route: ActivatedRoute,
    public _ledgerService: LedgerService,
    public fb: FormBuilder,
    private modalService: NgbModal
  ) { }
  ngOnInit() {
    // $.getScript('./assets/js/jquery.steps.min.js');
    // $.getScript('./assets/js/wizard-steps.js');   
    this.getRouteParam();
    this.getUnderGroupList();
    this.form = this.fb.group({
      ledgerName: [''],
      underGroup: [''],
      applicableTax: [''],
      businessType: [''],
      gstin: [''],
      name: [''],
      email: [''],
      pan: [''],
      address: [''],
      city: [''],
      state: [''],
      pinCode: [''],
      country: [''],
      phoneNumber: [''],
      qty: [''],
      rate: [''],
      total: [{ value: '', disabled: true }],
    });
  }
  updateTotal(){
    const qty = this.form.get('qty').value || 0,
      rate = this.form.get('rate').value || 0;
    this.form.controls['total'].setValue(qty*rate);
  }
  getRouteParam() {
    this.route.params.subscribe(params => {
      // console.log(params.id);
      this.paramId = params.id;
    });
  }
  getUnderGroupList() {
    this.dataCopy = this._ledgerService
      .getUnderGroupList(this.paramId)
      .map(response => response.json())
      .subscribe(data => {
        data = data.ugData.map(item => item.groupName);
        this.underGroupItems = this.underGroupItems.concat(data);
      });
  }
  open(content) {
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(user) {
    // user.underGroup = this.form.get('underGroup').value[0].text;
    // user.state = this.form.get('state').value[0].text;
    // user.country = this.form.get('country').value[0].text;

    console.log(this.form.getRawValue());
    // this._ledgerService.createNewLedger(user, this.paramId).subscribe(data => {
    //   // console.log('hello gateway service')
    // });
  }
}
