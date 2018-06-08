import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import * as alertFunctions from "./../../../shared/data/sweet-alerts";
import { ToastrService } from "./../../../utilities/toastr.service";

import { ActivatedRoute } from "@angular/router";
import { ProductServiceService } from "./service/productService.service";
declare var $: any;
@Component({
  selector: "app-product-service",
  templateUrl: "./productService.component.html",
  styleUrls: ["./productService.component.scss"]
})
export class ProductServiceComponent implements OnInit {
  form: FormGroup;
  dataCopy: any;
  paramId: string;
  ownerName: string;
  breadcrumbs = [];

  public items: Array<string> = [
    "BAG-BAGS ",
    "BAL-BALE",
    "BDL-BUNDLES",
    "BKL-BUCKLES ",
    "BOU-BILLION OF UNITS",
    "BOX-BOX",
    "BTL-BOTTLES ",
    "BUN-BUNCHES ",
    "CAN-CANS ",
    "CBM-CUBIC METERS ",
    "CCM-CUBIC CENTIMETERS",
    "CMS-CENTIMETERS ",
    "CTN-CARTONS ",
    "DOZ-DOZENS ",
    "DRM-DRUMS ",
    "GGK-GREAT GROSS ",
    "GMS-GRAMMES ",
    "GRS-GROSS ",
    "GYD-GROSS YARDS ",
    "KGS-KILOGRAMS ",
    "KLR-KILOLITRE",
    "KME-KILOMETRE ",
    "MLT-MILILITRE",
    "MTR-METERS",
    "MTS-METRIC TON",
    "NOS-NUMBERS",
    "PAC-PACKS",
    "PCS-PIECES",
    "PRS-PAIRS",
    "QTL-QUINTAL",
    "ROL-ROLLS",
    "SET-SETS",
    "SQF-SQUARE FEET",
    "SQM-SQUARE METERS",
    "SQY-SQUARE YARDS",
    "TBS-TABLETS",
    "TGM-TEN GROSS",
    "THD - THOUSANDS",
    "TON - TONNES",
    "TUB - TUBES",
    "UGS - US GALLONS",
    "UNT - UNITS",
    "YDS - YARDS",
    "OTH - OTHERS"
  ];

  constructor(
    private route: ActivatedRoute,
    public _productServiceService: ProductServiceService,
    public fb: FormBuilder,
    public _toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getRouteParam();
    this.form = this.fb.group({
      prsrName: [""],
      type: [""],
      units: [""],
      prsrRate: [""],
      gstRate: [""],
      name: [""],
      hsnaCode: [""],
      qty: [""],
      rate: [""],
      val: [""]
    });
  }
  getRouteParam() {
    this.route.params.subscribe(params => {
      this.paramId = params.id;
      this.ownerName = params.owner;
    });
    this.breadcrumbs = [
      { name: "Ledger Form" },
      { name: "Dasboard", link: `/${this.ownerName}/${this.paramId}/dashboard` }
    ];
  }

  onSubmit(user) {
    alertFunctions.SaveData().then(datsa => {
      if (datsa) {
        if (user.val === "") {
          user.val = user.qty * user.rate;
        }
        this._productServiceService
          .createNewPrsr(user, this.paramId, this.ownerName)
          .subscribe(data => {
            if (data.success) {
              this._toastrService.typeSuccess(
                "success",
                "Data successfully added"
              );
            } else {
              this._toastrService.typeError("Error", data.message);
            }
          });
      }
    });
  }
}
