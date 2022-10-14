import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-acumulado-platos',
  templateUrl: './acumulado-platos.component.html',
  styleUrls: ['./acumulado-platos.component.css']
})
export class AcumuladoPlatosComponent implements OnInit {

  constructor(public wh:WarehouseService) { }

  ngOnInit(): void {
  }

}
