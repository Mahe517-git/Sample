import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private dadaService: DataService) {}
  list:any[]= [];
  searchText: string = '';
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.dadaService.getData().subscribe((res) => {
      this.list = res['entries'].slice(0,100);

      console.log(this.list);
    });
  }

  search() {
    console.log(this.searchText);
    this.list = this.list.filter(ele => ele.API.toLowerCase().match(this.searchText));
  }

}
