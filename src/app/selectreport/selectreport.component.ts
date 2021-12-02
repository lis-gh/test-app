import { Component, OnInit,Input,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-selectreport',
  templateUrl: './selectreport.component.html',
  styleUrls: ['./selectreport.component.scss']
})
export class SelectreportComponent implements OnInit {

  
@Input() Report:string='';


  constructor() {
   }

  ngOnInit(): void {

  }
  zoom(){
    let z=(<HTMLDivElement>document.getElementById('zoomin'))
    
    z.style.display='block';
  
  }
  cancel(){
    let z=(<HTMLDivElement>document.getElementById('zoomin'))
    
  z.style.display='none';
  let x=(<HTMLDivElement>document.getElementById('no-report'))
    
  x.style.display='block';
  let y=(<HTMLDivElement>document.getElementById('withreport'))
    
  y.style.display='none';


  }
}
