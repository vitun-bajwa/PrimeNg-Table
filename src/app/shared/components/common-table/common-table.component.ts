import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/core/api/table-service/table.service';
import { employees } from 'src/app/core/utils/table';
import { MenuItem } from 'primeng/api';
import * as saveAs from 'file-saver';
import { jsPDF as _jsPDF } from "jspdf";
import { CsvService } from 'src/app/core/csvfile/csv.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  employees!: employees[];
  cols!: any[];
  exportColumns!: any[];
  selectedRows: any = []
  items!: MenuItem[] | any;
  date!: Date[];
  calendarDate: any
  selectedParentRow: any = [];
  selectedChildrenRow: any = [];
  selectedRow:any;
  childrenCount:any;
  options: any = {
    priority: [
      { label: 'p1', value: 'p1' },
      { label: 'p2', value: 'p2' },
    ],
    claimStatus: [
      { label: 'pending', value: 'pending' },
      { label: 'paid', value: 'paid' },
    ]
  }


  constructor(private tableService: TableService, private csvService: CsvService, private datePipe: DatePipe) { }

  calculateTotal(selectedRows: any) {
    debugger
    let total = 0;
    for (const row of selectedRows) {
      total += row.rowData + row.rowData?.children;
    }
    return total;
  }


  // onRowSelect(event:any) {
  //   debugger
  //   this.selectedRows = event;
  //   this.childrenCount = this.selectedRows.rowData ? this.selectedRows.rowData.children.length : 0;
  // }
  ngOnInit() {
    setTimeout(() => {
      this.getEmployes();
    }, 1000);
    this.getColumns();
    this.items = [{
      items: [
        {
          label: 'csv',
          icon: 'pi pi-download',
          command: () => {
            this.exportFile('csv');
          }
        }
      ]
    },
    ]
  }


  getEmployes() {
    this.tableService.getEmployes().subscribe((item: any) => {
      this.employees = item;
    });
  }

  getColumns() {
    this.tableService.getColumns().subscribe((res: any) => {
      this.cols = res;
    });
    this.exportColumns = this.cols?.map((col: any) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  exportFile(filetype: any) {
    let data: any = [];
    this.selectedRows.map((row: any) => {
      const { claimId, priority, patientName, dob, claimStatus, phoneNo } = row;
      data.push({ claimId, priority, patientName, dob, claimStatus, phoneNo });
      if (row.hasOwnProperty('children'))
        data = [...data, ...row.children.map((child: any) => {
          const { claimId, priority, patientName, dob, claimStatus, phoneNo } = child
          return { claimId, priority, patientName, dob, claimStatus, phoneNo };
        })]
    });
    this.csvService.downloadFile(data, 'ClaimReports.csv');
  }

  selectedChildren(selectedItem: any, rowData: any) {
    debugger
    const matchingItems = selectedItem.filter((x: any) => x.claimId === rowData.claimId);
    if (matchingItems.length === rowData.children.length) {
      this.selectedRows.push(rowData);
      this.selectedRows = [...this.selectedRows,];
    }
    else {
      this.selectedRows = this.selectedRows.filter((row: any) => row !== rowData);
    }
  }

  selectParentRow(rowData: any) {
    debugger;
    const isRowDataEmpty = this.selectedRows.findIndex((row: any) => row.claimId === rowData.claimId);
    if (isRowDataEmpty !== -1) {
      rowData.children.map((row: any) => {
        this.selectedChildrenRow.push(row);
      });
      this.selectedChildrenRow = [...this.selectedChildrenRow];
    } else {
      this.selectedChildrenRow = this.selectedChildrenRow.filter((child: any) => !rowData.children.some((rowChild: any) => rowChild.claimId === child.claimId));
    }
  }

  dateFormat(value: any) {
    if (typeof value === 'object')
      return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
    return value;
  }
  selectAllRows() {
    debugger
    let allChildren: any = [];
    this.selectedRows.map((row: any) => {
      if (row.children) {
        row.children.forEach((child: any) => {
          allChildren.push(child);
        })
      }
    });
    this.selectedChildrenRow = allChildren
  }

}
