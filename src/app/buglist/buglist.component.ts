import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { Defect } from 'app/common/pojo/defect';
import { DefectService } from 'app/common/services/defect/defect.service';

@Component({
  selector: 'app-buglist',
  providers: [DefectService],
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.scss']
})
export class BuglistComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  rowData = [];

  constructor(private defectService:DefectService) { }
  columnDefs = [
    {headerName: 'Defect ID', field: 'defect_id', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Title', field: 'defect_title', sortable: true, filter: true },
    {headerName: 'Status', field: 'defect_status', sortable: true, filter: true },
    {headerName: 'Assign To', field: 'assign_to', sortable: true, filter: true },
    {headerName: 'Detected By', field: 'detected_by', sortable: true, filter: true },
    {headerName: 'Detected Date', field: 'detected_date', sortable: true, filter: true },
    {headerName: 'Comments', field: 'comments', sortable: true, filter: true }
];
	// rowData = [
	// 	{ make: 'Toyota', model: 'Celica', price: 35000 },
	// 	{ make: 'Ford', model: 'Mondeo', price: 32000 },
	// 	{ make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  
  ngOnInit() {
    this.defectService.getDefectList()
    .subscribe(data =>
      {
        console.log(data);
        this.rowData = data;
      })
  }

}