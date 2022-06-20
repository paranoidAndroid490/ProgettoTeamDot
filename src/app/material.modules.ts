import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  exports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule]
})

export class MaterialModule{

}
