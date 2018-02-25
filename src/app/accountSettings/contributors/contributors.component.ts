import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContributorService } from './service/contributors.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { any } from 'codelyzer/util/function';
@Component({
  selector: 'app-contributors-profile',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnInit {
  form: FormGroup;
  loading = false;
  returnURL: string;
  public dataCopy: any;
  userList = [];
  collabAddWriteModel: any;
  collabAddReadModel: any;

  constructor(
    public _contributorService: ContributorService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsers();
    // this.fillForm();

    this.returnURL = this.route.snapshot.queryParams['returnURL'] || '/gateway';
  }

  getUsers() {
    this.dataCopy = this._contributorService.getUsers().subscribe((data) => {
      data.json().user.map(el => {
        this.userList.push({ id: el.username, name: el.email });
        this.userList = [...this.userList];
      });
    });
  }
  collabAddWrite() {
    if (this.collabAddWriteModel === undefined) {
      return;
    } else {
      this._contributorService.collabAddWrite(this.collabAddWriteModel)
      .subscribe(res => console.log(res.json()))
    }
  }
  collabAddRead() {
    if (this.collabAddReadModel === undefined) {
      return;
    } else {
      this._contributorService.collabAddRead(this.collabAddReadModel)
      .subscribe(res => console.log(res.json()))
    }
  }
}

interface IUser {
  username: string;
  email: string;
}

interface IData {
  success: boolean;
  user: IUser[];
}
