import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  isAuthenticated: boolean= false;

  options = [
    { value: 'saveData', viewValue: 'Save Data', actionIcon: 'save' },
    { value: 'fetchData', viewValue: 'Fetch Data', actionIcon : 'download' },
  ];



  constructor(
    private dataService: DataStorageService,
    private authService: AuthService,
    private router :Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe((userData) => {
      console.log(userData);
      this.isAuthenticated = !userData ? false : true;
    });
  }

  onSaveData(action: string) {
    switch (action) {
      case 'saveData':
        this.dataService.storeRecepies();
        
        break;
      case 'fetchData':
        this.dataService.fetchData().subscribe();
        
    }
  }
  logout(){
    this.authService.logOut();
    this.router.navigate(['/auth']) ;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();

  }
}
