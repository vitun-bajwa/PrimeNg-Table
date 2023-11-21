import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponentComponent } from '../confirm-dialog-component/confirm-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
const USER_DATA = [
  {
    id: 1,
    name: 'John Smith',
    occupation: 'Advisor',
    dateOfBirth: '1984-05-05',
    age: 36,
  },
  {
    id: 2,
    name: 'Muhi Masri',
    occupation: 'Developer',
    dateOfBirth: '1992-02-02',
    age: 28,
  },
  {
    id: 3,
    name: 'Peter Adams',
    occupation: 'HR',
    dateOfBirth: '2000-01-01',
    age: 20,
  },
  {
    id: 4,
    name: 'Lora Bay',
    occupation: 'Marketing',
    dateOfBirth: '1977-03-03',
    age: 43,
  },
];
const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    key: 'occupation',
    type: 'text',
    label: 'Occupation',
  },
  {
    key: 'dateOfBirth',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'age',
    type: 'number',
    label: 'Age',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

@Component({
  selector: 'app-remove-rows',
  templateUrl: './remove-rows.component.html',
  styleUrls: ['./remove-rows.component.scss']
})
export class RemoveRowsComponent implements OnInit {
  ngOnInit(): void {

  }
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col:any) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  constructor(public dialog: MatDialog) { }

  addRow() {
    const newRow = {
      id: Date.now(),
      name: '',
      occupation: '',
      dateOfBirth: '',
      age: 0,
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }

  removeRow(id: any) {
    this.dataSource = this.dataSource.filter((u:any) => u.id !== id);
  }

  removeSelectedRows() {
    this.dialog
      .open(ConfirmDialogComponentComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.dataSource = this.dataSource.filter((u: any) => !u.isSelected);
        }
      });
  }

  isAllSelected() {
    return this.dataSource.every((item: any) => item.isSelected);
  }

  isAnySelected() {
    return this.dataSource.some((item: any) => item.isSelected);
  }

  selectAll(event: any) {
    this.dataSource = this.dataSource.map((item: any) => ({
      ...item,
      isSelected: event.checked,
    }));
  }
}
