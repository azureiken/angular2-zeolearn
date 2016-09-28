import { Component, OnInit } from '@angular/core';
import { CredentialService } from '../shared/index';
import { Router } from '@angular/router';
import { Mutant } from '../shared/xmen/xmen.schema';


/**
 * This class represents the lazy loaded AuthComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
})

export class AuthComponent implements OnInit {

  // newName: string = '';
  errorMessage: string;
  creds: any[] = [];
  userid: string;
  password: string;

  loginok: boolean;

  attempted: number = 0;
  successfulLogin: string = "Login was successful!";
  invalidLogin: string = "Invalid Login. Try again.";
  tooManyAttempts: string = "Too many attempts!";
  /**
   * Creates an instance of the AuthComponent with the injected
   * CredentialService.
   *
   * @param {CredentialService} CredentialService - The injected CredentialService.
   */
  constructor(
    public credentialService: CredentialService,
    private router: Router) {
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.credentialService.setAuthUser(null);
    this.loginok = false;
  }

  /**
   * Handle the CredentialService observable
   */
  authenticate() {
    console.log('Authenticating...');
    this.credentialService.get()
      .subscribe(
      creds => {
        this.creds = creds;
        console.log('Received creds...', creds)
        for (var i = 0; i < this.creds.length; i++) {
          if (this.creds[i].userid === this.userid && this.creds[i].password === this.password) {
            this.loginSuccess(this.creds[i]);
            return;
          }
        }
        this.loginError()
      },
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  // addName(): boolean {
  //   // TODO: implement CredentialService.post
  //   this.names.push(this.newName);
  //   this.newName = '';
  //   return false;
  // }
  /**
   * @ {boolean} true for successful login
   */
  loginSuccess(authUser: Mutant): void {
    this.loginok = true
    console.log('Login succeeded', authUser)
    // if (this.credentialService.setAuthUser(authUser)) {
    //   this.router.navigate(['/home'])
    // }
    this.credentialService.setAuthUser(authUser)
    this.router.navigate(['/home', authUser.userid])
    
    // return this.loginok;
  }
  /**
   * @ {boolean} true for successful login
   */
  loginError(): boolean {
    this.loginok = false
    this.attempted++;
    console.log('Login failed', this.loginok)
    return this.loginok;
  }
}
