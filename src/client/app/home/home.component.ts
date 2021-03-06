import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { CredentialService } from '../shared/index';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    public nameListService: NameListService,
    private credentialService: CredentialService,
    private router: Router) {
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    console.log(this.credentialService.getAuthUser())
    if(this.credentialService.getAuthUser() === null){
      this.router.navigate['']
    }
    console.log(this.router.routerState)
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
		     .subscribe(
		       names => this.names = names,
		       error =>  this.errorMessage = <any>error
		       );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
