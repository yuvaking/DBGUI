import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions } from "ag-grid";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input() afterSignUp;
  backendURL = 'http://localhost:4000/';
  currentTableData: any;
  gridOptions;
  constructor(private http: HttpClient) {
    this.gridOptions = <GridOptions>{
      columnDefs:[],
      rowData: [{ID:2}],
      enableSorting: true,
      enableColResize: true,
      pagination: true
    };
  }

  openTable(tableName) {
    var self = this;
    this.http.get(this.backendURL + 'getAllUsers')
      .subscribe((data) => {
        console.dir(data);
        //generate columns dynamically, by the first member of the array
        Object.keys(data[0]).map(key => {
          console.log('inner key is: ' + key);
          self.gridOptions.columnDefs.push({ headerName: key.toString(), field: key.toString() });
        });
        self.gridOptions.api.setColumnDefs(this.gridOptions.columnDefs);
        self.gridOptions.api.setRowData(Object.values(data));
        self.gridOptions.api.sizeColumnsToFit();
      });
  }

  ngOnInit() {
    this.openTable("users");
  }

}