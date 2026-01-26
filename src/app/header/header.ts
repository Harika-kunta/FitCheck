import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
showSearch = false;
  searchText = '';

 searchItems = [
  {  name: 'Party Wear', route: '/party' },
  {  name: 'Ethnic Wear', route: '/ethnic' },
  {  name: 'Traditional Wear', route: '/traditional' },
  {  name: 'Sarees', route: '/sarees' },
   {  name: 'Frocks', route: '/frocks' },
  {  name: 'Western Wear', route: '/western' }

  ];

filteredItems: any[] = [];


  filteredProducts: any[] = [];

  constructor(private router: Router) {}

  toggleSearch() {
    this.showSearch = !this.showSearch;
    this.searchText = '';
    this.filteredProducts = [];
  }

onSearch() {
  this.filteredItems = this.searchItems.filter(item =>
    item.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}


  navigate(item: any) {
    this.showSearch = false;
    this.searchText = '';
    this.filteredItems = [];

    this.router.navigateByUrl(item.route);
  }
}
