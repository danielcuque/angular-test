import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.openSnackBar('This is a snackbar', 'Close');
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 1500,
    });
  }

}
