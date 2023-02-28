import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = [
    'customerCode',
    'customerName',
    'cardNumber',
    'balance',
  ];
  dataSource = new MatTableDataSource<Card>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Card {
  customerCode: string;
  customerName: string;
  cardNumber: string;
  balance: number;
}

const ELEMENT_DATA: Card[] = [
  {
    customerCode: '1778899000',
    customerName: 'John Doe',
    cardNumber: '5125-1234-9875-1111',
    balance: 100.5,
  },
  {
    customerCode: '1778899123',
    customerName: 'Richard Roe',
    cardNumber: '5326-1234-9875-1111',
    balance: 15.5,
  },
  {
    customerCode: '1778899000',
    customerName: 'Jane Doe',
    cardNumber: '5789-1234-9875-1111',
    balance: 50.5,
  },
];
