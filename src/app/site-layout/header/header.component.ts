import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: any

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchTerm = event.target.value
    this.ProductService.search.next(this.searchTerm)
  }

}
