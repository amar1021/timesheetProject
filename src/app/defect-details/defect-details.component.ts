import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-defect-details',
  templateUrl: './defect-details.component.html',
  styleUrls: ['./defect-details.component.scss']
})
export class DefectDetailsComponent implements OnInit {

  private defect_no : any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.defect_no = params );
}

  ngOnInit() {
    
  }

  edit(){
     $("#myModal").modal('show');
}
logTime(){
  $("#logTimeModel").modal('show');
}
  }
  
