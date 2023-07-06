import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  error: string;

  authForm: FormGroup;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      uemail: new FormControl(null, [Validators.required, Validators.email]),
      upass: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    let userCreds = this.authForm.getRawValue();
    let authObs: Observable<AuthResponseData>;

    if (!this.authForm.valid) {
      return;
    }

    this.authService.isLoading.next(true);
    if (this.isLoginMode) {
      authObs = this.authService.login(userCreds.uemail, userCreds.upass);
    } else {
      authObs = this.authService.signUp(userCreds.uemail, userCreds.upass);
    }

    authObs.subscribe(
      (resData) => {
        this.authService.isLoading.next(false);
        this.router.navigate(['/recepies']);
      },
      (errorMessage) => {
        this.authService.isLoading.next(false);
        this.authService.error$.next(errorMessage);
        this.error = errorMessage;
        this.openDialog();
      }
    );

    this.authForm.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: "some error occured", err: this.error },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
