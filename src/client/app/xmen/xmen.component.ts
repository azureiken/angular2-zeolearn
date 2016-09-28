import { Component, OnInit } from '@angular/core';
import { AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  SimpleChange } from '@angular/core';
import { XMenService } from '../shared/index';
import { Mutant } from '../shared/xmen/xmen.schema';
import { LoggerService }    from '../shared/index';

// import { FilterNamePipe } from './xmen.pipe';

let nextId = 1;

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-xmen',
  templateUrl: 'xmen.component.html',
  styleUrls: ['xmen.component.css']
})

export class XMenComponent implements OnInit/*, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy*/ {

  newMutantName: string;
  newMutantOrigin: string;
  aboutNewMutant: string;
  errorMessage: string;
  mutants: Mutant[] = [];
  mutantSearch: string;

  getXMenObservable: any;
  private verb: string = 'initialized';

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    public xmenService: XMenService,
    public logger: LoggerService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getXMen();
    this.getXMenObservable = this.xmenService.getXMen()
    this.newMutantName = 'NewMutant';
    this.newMutantOrigin = 'MyIDE';
    this.aboutNewMutant = 'TestThisComponent';
  }

  /**
   * Custom Logger
   */
  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

  /**
   * Handle the nameListService observable
   */
  getXMen() {
    this.xmenService.getXMen()
      .subscribe(
      mutants => this.mutants = mutants,
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addMutant(): boolean {
    // TODO: implement nameListService.post
    var listLength = this.mutants.length
    var newMutant: Mutant = {
      id: this.mutants[listLength - 1].id + 1,
      name: this.newMutantName,
      place: this.newMutantOrigin,
      about: this.aboutNewMutant
    }
    console.log('new mutant: ', newMutant)
    // this.mutants.push(newMutant);
    this.newMutantName, this.aboutNewMutant, this.newMutantOrigin = '';
    this.xmenService.addMutant({ mutant: newMutant })
      .subscribe(
      newMutants => this.mutants.push(newMutant),
      error => this.errorMessage = <any>error
      )
    return false;
  }
  search(): any {
    for (var i = 0; i < this.mutants.length; i++) {
      if (this.mutantSearch === this.mutants[i].name) {
        //
      }
    }
  
  }
  // // only called for/if there is an @input variable set by parent.
  // ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
  //   console.log('OnChanges triggered with: ', changes);
  //   let changesMsgs: string[] = [];
  //   for (let propName in changes) {
  //     if (propName === 'name') {
  //       let name = changes['name'].currentValue;
  //       changesMsgs.push(`name ${this.verb} to "${name}"`);
  //     } else {
  //       changesMsgs.push(propName + ' ' + this.verb);
  //     }
  //   }
  //   this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
  //   this.verb = 'changed'; // next time it will be a change
  // }

  // // Beware! Called frequently!
  // // Called in every change detection cycle anywhere on the page
  // // ngDoCheck() { this.logIt(`DoCheck`); }
  // ngDoCheck() { console.log("Do Check called") }

  // // ngAfterContentInit() { this.logIt(`AfterContentInit`); }
  // ngAfterContentInit() { console.log('AfterContentInit'); }

  // // Beware! Called frequently!
  // // Called in every change detection cycle anywhere on the page
  // // ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }
  // ngAfterContentChecked() { console.log('AfterContentChecked'); }

  // // ngAfterViewInit() { this.logIt(`AfterViewInit`); }
  // ngAfterViewInit() {console.log('AfterViewInit'); }

  // // Beware! Called frequently!
  // // Called in every change detection cycle anywhere on the page
  // ngAfterViewChecked() { console.log('AfterViewChecked'); }

  // // ngOnDestroy() { this.logIt(`OnDestroy`); }
  // ngOnDestroy() { console.log('OnDestroy'); }

}
