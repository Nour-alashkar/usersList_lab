import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any[]) => {
        
        this.users = data.map(user => ({
          ...user,
          profilePicture: `https://i.pravatar.cc/150?img=${user.id}`,
          verified: Math.random() > 0.5 
        }));
      });
  }
}
