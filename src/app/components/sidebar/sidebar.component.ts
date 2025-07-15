import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

stats = [
    { title: 'Total Employees', value: 120 },
    { title: 'Projects', value: 18 },
    { title: 'Active Tasks', value: 47 },
    { title: 'Pending Requests', value: 9 }
  ];

  recentActivities = [
    'Rani updated task "API Integration"',
    'Sriya added a new project "Marketing Campaign"',
    'Kiran submitted a leave request',
    'Raghu completed "Dashboard Design" task'
  ];

  employees = [
    { name: 'John Doe', role: 'Developer', status: 'Active' },
    { name: 'Sarah Lee', role: 'Designer', status: 'Active' },
    { name: 'Mike Ross', role: 'QA Tester', status: 'On Leave' },
    { name: 'Emily Clark', role: 'Manager', status: 'Active' }
  ];

  constructor() {}

  ngOnInit(): void {}

}
