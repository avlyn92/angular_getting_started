import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductModule } from "./products/product.module";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" }, // Default route, a.k.a homepage
      { path: "**", redirectTo: "welcome", pathMatch: "full" } // wild card route, use especially for 404 page not found page
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
