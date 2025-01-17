import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PreviewComponent } from './preview/preview.component';
import { CardComponent } from './card/card.component';
import { HighlightService } from './highlight.service';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [CardComponent, PreviewComponent],
  imports: [CommonModule, RouterModule, TranslocoRootModule],
  providers: [HighlightService],
  exports: [PreviewComponent],
})
export class SharedModule {}
