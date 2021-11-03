import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    active = '';
  
    NAV = [
      {
        name: 'About',
        link: '/nav/fale-conosco',
        icon: 'person-circle'
      },
      {
        name: 'Blog',
        link: '/nav/trabalhe-conosco',
        icon: 'albums'
      },
    ]
  
    constructor(private router: Router) {
      this.router.events.subscribe((event: RouterEvent) => {
        this.active = event.url
      })
    }
  
  
    ngOnInit(): void {
    }
  
  }
  