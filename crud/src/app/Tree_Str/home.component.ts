import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// import { ServiceService } from './service.service';
interface MenuItem {
  id: number;
  name: string;
  parentId: number;
  children?: MenuItem[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  parentItem:[''] | undefined;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchMenuItems();
    throw new Error('Method not implemented.');
  }
  fetchMenuItems() {
    throw new Error('Method not implemented.');
    const apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173';

    this.http.get<MenuItem[]>(apiUrl).subscribe(response => {
      this.menuItems = this.buildTree(response);
    });
  }

  // loginForm = new FormGroup({
  // Name:new FormControl(''),
  // Email:new FormControl(''),
  // Stream:new FormControl(''),
  // })
  // loginUser(){
  //   console.warn(this.loginForm.value);
  // }
  buildTree(items: MenuItem[]): MenuItem[] {
    const rootItems: MenuItem[] = [];

    const itemMap = new Map<number, MenuItem>();

    // Create a map of items using their IDs as keys
    items.forEach(item => {
      item.children = [];
      itemMap.set(item.id, item);
    });

    // Build the tree structure
    items.forEach(item => {
      if (item.parentId) {
        const parentItem = itemMap.get(item.parentId);
        if (parentItem) {
          parentItem.children.push(item);
        }
      } else {
        rootItems.push(item);
      }
    });

    return rootItems;
  }
}

