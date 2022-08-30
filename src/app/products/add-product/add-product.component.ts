import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductForm = this.formBuilder.group({
    id: [],
    productName: [""],
    categoryId: [""],
    description: [""],
    price: [],
    is_available: [""],
    productImg: [""],
    rating: [""],
    review: [""],
    vendorName: [""],
    warranty: [""]
  })

  constructor(private router: Router, private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {

    let newProduct = {
      id: this.addproductForm.value.id,
      productName: this.addproductForm.value.productName,
      categoryId: this.addproductForm.value.categoryId,
      description: this.addproductForm.value.description,
      price: this.addproductForm.value.price,
      is_available: this.addproductForm.value.is_available,
      productImg: this.addproductForm.value.productImg,
      rating: this.addproductForm.value.rating,
      review: this.addproductForm.value.review,
      vendorName: this.addproductForm.value.vendorName,
      warranty: this.addproductForm.value.warranty
    }

    this.productService.addProduct(newProduct).subscribe((data: any) => {
      alert("New product added Successfully")
      this.router.navigateByUrl("products")
    })
  }

}
