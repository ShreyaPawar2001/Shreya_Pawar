import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent {
  SearchForm!:FormGroup;
  searchText!:string;
  searchCity:any;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    console.log("formDetail");
    this.formDetail();
    
  }
 


  headers = ["CR Number", "Custom Code", "Agency Name", "Status","CreationDateTo","ClearingAgency","Establishment ID",];
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
    this.searchCity =this.searchText;

   
  }
  resetDetail(){
    this.searchCity=' ';
    this.searchText=' ';
  }
  


  rows = [
    {
      "CRNumber" : "14545",
      "CustomCode" : "L2771",
      "AgencyName" :"new ncm2",
      "Status":"Pending Approval",
      "CreationDateTo":"27/8/2023",
      "ClearingAgency" : "Government",
      "EstablishmentID" : "2234789",
      
    },
    {
      "CRNumber" : "14542",
      "CustomCode" : "L2772",
      "AgencyName" :"angular FZc",
      "Status":"Pending Approval",
      "CreationDateTo":"28/8/2023",
      "ClearingAgency" : "Government",
      "EstablishmentID" : "1334789",
      
    },
    {
      "CRNumber" : "14543",
      "CustomCode" : "L2773",
      "AgencyName" :"non gov",
      "Status":"Rejected",
      "CreationDateTo":"29/8/2023",
      "ClearingAgency" : "Private",
      "EstablishmentID" : "1234789",
      
    },
  ]

}
