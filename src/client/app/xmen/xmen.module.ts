import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { XMenComponent } from './xmen.component';
import { XMenService } from '../shared/xmen/index';
import { FilterNamePipe } from './xmen.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [XMenComponent, FilterNamePipe, HighlightDirective],
  exports: [XMenComponent],
  providers: [XMenService]
})
export class XMenModule { }
