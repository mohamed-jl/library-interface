import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  constructor(private administrator:AdministratorService){}
  keys:any
  ngOnInit(): void {
      this.getcles()
  }
  getcles(){
    this.administrator.getscles().subscribe(data=>{
      this.keys=data
    })
  }

}
