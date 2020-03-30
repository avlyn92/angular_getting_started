import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";
//ActivatedRoute is to pass route's parameters (exp /:id) captured from route link (activated link) to route
//Router is to activating a route with Code, when to use route/navigation with code? exp is save button, where need to execute some code to save the data and then ROUTE!

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id"); // + is JS shorthand syntax to convert string to numeric
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    };
  }

  onBack(): void {
    // use navigate method from intance of router service to activate the route
    this.router.navigate(["/products"]);
  }
}
