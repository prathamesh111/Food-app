import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IngredientModel } from '../shared/ingredientModel.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs';
import { AddIngredientPopupComponent } from '../shared/components/add-ingredient-popup/add-ingredient-popup.component';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit ,OnDestroy , AfterViewInit{

  ingredients: IngredientModel[] =[];
  displayedColumns = [
    'ingName',
    'ingAmt',
    'ingredType',
    'expiryDate',
    'freshness',
    'actions',
  ];
  igChangeSub: Subscription;
  dataSource: MatTableDataSource<IngredientModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private slService: ShoppinglistService,
    private dialog: MatDialog
  ) {}

  
  ngOnInit()  {
    this.slService.fetchIngredients().subscribe((res)=> {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
   this.slService.ingredChanged.subscribe(
      ingred => {
        this.ingredients = ingred;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onDeleteSlItem(index: number) {
    this.slService.deleteIngredient(index);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onEditIngredients(row: number) {
    const dialogRef = this.dialog.open(AddIngredientPopupComponent, {
      width: '40%',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result=='update'){
        this.slService.fetchIngredients();
      }
    });
  }

  onAddNewIngred() {
    const dialogRef = this.dialog.open(AddIngredientPopupComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result=='save'){
        this.slService.fetchIngredients();
      }
    });
  }

  ngOnDestroy(): void {
  }
}
