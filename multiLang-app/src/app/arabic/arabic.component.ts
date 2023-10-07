import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arabic',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.css']
})
export class ArabicComponent {
  SearchForm!:FormGroup;

  constructor(private router:Router,private fb:FormBuilder){}

  toArabic(){
    this.router.navigateByUrl('arabic')


  }
  ngOnInit(){
    console.log("formDetail");
    this.formDetail();
    
  }


  headers = ["CR Number", "Custom Code", "Agency Name", "Creation Date From", "Status","CreationDateTo","ClearingAgency","Establishment ID"];
  formDetail(){
    this.SearchForm=this.fb.group({
      crnumber:[''],
      status:[''],
      agencyname:[''],
      customscode:[''],
      establishment:[''],
      Creationdate:[''],
      clearingagency:[''],
      creationDateto:['']

    })
  }




  // table


  rows = [
    {
      "CRNumber" : "1",
      "CustomCode" : "Rau",
      "AgencyName" :"XX",
      "CreationDateFrom":"dd",
      "Status":"0",
      "CreationDateTo":"ll",
      "ClearingAgency" : "21",
      "EstablishmentID" : "Male",
      "Country" : "India"
    },
    {
      "CRNumber" : "2",
      "CustomCode" : "Raj",
      "AgencyName" :"XX",
      "CreationDateFrom":"dd",
      "Status":"0",
      "CreationDateTo":"ll",
      "ClearingAgency" : "21",
      "EstablishmentID" : "Male",
      "Country" : "India"
    },
    {
      "CRNumber" : "3",
      "CustomCode" : "Mohan",
      "AgencyName" :"XX",
      "CreationDateFrom":"dd",
      "Status":"0",
      "CreationDateTo":"ll",
      "ClearingAgency" : "21",
      "EstablishmentID" : "Male",
      "Country" : "India"
    },
  ]

}
