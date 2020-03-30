import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// CommonModule is child of BrowserModule, since BrowserModule only need to be imported ONCE in the root app module
import { FormsModule } from "@angular/forms";

import { StarComponent } from "./star.component";

// exports[] is to allow sharing of component, directives, pipes or even system module, 3rd party module, custome module with any FeatureModule that imports this SharedModule

@NgModule({
  declarations: [StarComponent],
  imports: [CommonModule],
  exports: [StarComponent, CommonModule, FormsModule]
})
export class SharedModule {}
