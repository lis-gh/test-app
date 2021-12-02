import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  
  reports=[
    {senddate:'1,aug,2021', status:'processing',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'2,aug,2021', status:'accept',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'3,aug,2021', status:'processing',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'4,aug,2021', status:'accept',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'5,aug,2021', status:'processing',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'6,aug,2021', status:'accept',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'7,aug,2021', status:'accept',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'8,aug,2021', status:'accept',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'9,aug,2021', status:'accept',sendtime:'12:00',img:'../assets/report.PNG'},
    {senddate:'10,aug,2021', status:'processing',sendtime:'12:00',img:'../assets/report.PNG'}
  ];

  @Output() reportimg='';

  constructor() { }

  ngOnInit(): void {
    this.reportimg='';
  }

  //method to view the report image of the selected report
  view(img:string){

    this.reportimg=img;
    //console.log(this.reportimg)no-report
     let z=(<HTMLDivElement>document.getElementById('withreport'))
    
    z.style.display='block';
    let y=(<HTMLDivElement>document.getElementById('no-report'))
    
    y.style.display='none';


  }

}
