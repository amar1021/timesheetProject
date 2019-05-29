import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { Defect } from 'app/common/pojo/defect';
import { DefectService } from 'app/common/services/defect/defect.service';
import { PartialMatchFilter } from 'app/common/filter/PartialMatchFilter';

declare var $: any;
@Component({
  selector: 'app-buglist',
  providers: [DefectService],
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.scss']
})
export class BuglistComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  rowData = [];
  private modelState = false;
  private frameworkComponents;
private gridApi;
  gridOptions = {
      columnDefs: 'columnDefs',
      rowData: 'rowData',
      rowSelection: 'single',
      getSelectedRows: 'getSelectedRows',
      onSelectionChanged: 'onSelectionChanged',
      onRowDoubleClicked: 'doSomething(event)'
  };

  constructor(private defectService:DefectService) {
    this.frameworkComponents = { partialMatchFilter: PartialMatchFilter };
   }
  columnDefs = [
    {headerName: 'Defect ID', field: 'defect_id', sortable: true, filter: "true", checkboxSelection: true },
    {headerName: 'Title', field: 'defect_title', sortable: true, filter: "partialMatchFilter" },
    {headerName: 'Status', field: 'defect_status', sortable: true, filter: true },
    {headerName: 'Assign To', field: 'assign_to', sortable: true, filter: true },
    {headerName: 'Detected By', field: 'detected_by', sortable: true, filter: true },
    {headerName: 'Detected Date', field: 'detected_date', sortable: true, filter: true },
    {headerName: 'Comments', field: 'comments', sortable: true, filter: true }
];

  OnGridReady(event: any){
    this.gridApi = event.api;
    // alert('I did something'+event)
}
onCellDoubleClicked(event: any) { 
    console.log(event.data);
    $("#myModal").modal('show');
  /*   var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.athlete;
    }); */
   }

  ngOnInit() {
    this.defectService.getDefectList()
    .subscribe(data =>
      {
        console.log(data);
        this.rowData = data;
      })
  }

}