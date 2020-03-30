import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
//ActivatedRouteSnapshot gives the information of the activated route (url link) and all its parameters

//Register this Guard service using providedIn props
@Injectable({
  providedIn: "root"
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid product Id");
      this.router.navigate(["/products"]);
      return;
    }
    return true;
  }
}
