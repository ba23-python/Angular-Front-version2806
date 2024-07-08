import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { MyInfoService } from '../../../services/my-info.service'; // Adjust the path as necessary

@Component({
  selector: 'app-my-info',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ensure FormsModule is included
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent {
  obj = {
    _id: '',
    name: '',
    email: '',
    password: '',
    role: ''
  };