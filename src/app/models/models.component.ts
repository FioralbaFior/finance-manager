import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {

  accessToken!: string;
  refreshToken!: string;
  warning: any;
}


