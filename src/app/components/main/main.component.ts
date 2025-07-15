import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

stats = [
    { title: 'Total Employees', value: 120 },
    { title: 'Projects', value: 18 },
    { title: 'Active Tasks', value: 47 },
    { title: 'Pending Requests', value: 9 }
  ];

  recentActivities = [
    'John updated task "API Integration"',
    'Sarah added a new project "Marketing Campaign"',
    'Mike submitted a leave request',
    'Emily completed "Dashboard Design" task'
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
