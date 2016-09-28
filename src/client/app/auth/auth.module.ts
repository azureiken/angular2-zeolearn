import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { CredentialService } from '../shared/credentials/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
  providers: [CredentialService]
})
export class AuthModule { }
