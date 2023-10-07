import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent {
  SearchForm!:FormGroup;

  constructor(private fb:FormBuilder){}

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
