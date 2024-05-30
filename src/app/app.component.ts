import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'countryApp';

  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.openSnackBar('This is a snackbar', 'Close', 'green-bg');
  }

  openSnackBar(message: string, action: string, panelClass: string | string[]) {
    this.snackBar.open(message, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass,
      duration: 35000,
    });
  }
}
