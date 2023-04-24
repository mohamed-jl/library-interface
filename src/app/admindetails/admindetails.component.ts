import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {
  details:any;
constructor(private admin:AdministratorService){}
ngOnInit(): void {
    this.getdetails()
}
getdetails(){
  this.admin.getdetails().subscribe(data=>{
    this.details=data
    console.log(data)
  })
}
}
