import { UserResource } from './modals/user-resource';
import { User } from './components/shared/user';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SidenavMenu } from './components/shared/sidebar/sidebar-menu.model';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings, Settings } from './components/shared/services/color-option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public url : any;

  public sidenavMenuItems:Array<any>;

  public currency:any;

  public flag:any;

  public user : UserResource;

  title = 'ecommerce';
  scrollElem;
  public settings: Settings;
  constructor(private spinner: NgxSpinnerService,
    public router: Router,
    public appSettings:AppSettings,
    private userService: User) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
      window.scrollTo(0, 0)
    } );

    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
           document.body.scrollTop = 0; // scroll top to body element
      }
  });

  this.settings = this.appSettings.settings;
  }
  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      this.user = this.userService.userInfos;
      if (event instanceof NavigationEnd) {
          window.scrollTo(0,0);
      }
    })
  }

  navItems: SidenavMenu[] = [
    {
      displayName: 'Home',
      iconName: 'recent_actors',
      route: '/home'
    },
    {
      displayName: 'Shop',
      iconName: 'movie_filter',
      children: [
        {
          displayName: 'Emergency & Exit Lights & Systems',
          iconName: 'group',
          children: [
            {
              displayName: 'Central Monitoring Systems',
              iconName: 'person',
              route: 'michael-prentice',
            },
            {
              displayName: 'Central Battery Systems',
              iconName: 'person',
              route: 'stephen-fluin',
               },
            {
              displayName: 'LED Exit Lights',
              iconName: 'person',
              route: 'mike-brocchi',
           },
           {
            displayName: 'LED Emergency Light',
            iconName: 'person',
            route: 'mike-brocchi',
         }

          ]
        },
        {
          displayName: 'LED Lighting',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'LED Downlights',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'LED Panels',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'LED Strips',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'LED Diodas',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'HVAC',
          iconName: 'feedback',
          children: [
            {
              displayName: 'HVAC Valves',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'HVAC Valve Actuators',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Heating Cables',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Thermostats',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'KNX',
          iconName: 'feedback',
          children: [
            {
              displayName: 'Car & Motorbike',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'Shop for Bike',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Industrial Supplies',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Cold stores',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        }
      ]
    },

    {
      displayName: 'Pages',
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Wishlist',
          iconName: 'group',
          route: '/pages/wishlist'
        },
        {
          displayName: 'Checkout',
          iconName: 'feedback',
          route: '/pages/checkout'
        },
        {
          displayName: 'Cart',
          iconName: 'group',
          route: '/pages/cart'
        },
        {
          displayName: 'My Account',
          iconName: 'speaker_notes',
          route: '/pages/my-account',
        },
        {
          displayName: '404',
          iconName: 'feedback',
          route: '/pages/error'
        }
      ]
    },
    {
      displayName: 'Contact',
          iconName: 'feedback',
          route: '/pages/contact'
    }
  ];

  logout(){
    this.user = null;
    this.userService.removeUser();
    this.router.navigateByUrl("home");
  }


  ngOnInit() {


    /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);

    // this.scrollElem = document.querySelector('#moveTop');
    // this.scrollElem.scrollIntoView();
  }



  // public changeCurrency(currency){
  //   this.currency = currency;
  // }
  // public changeLang(flag){
  //   this.flag = flag;
  // }

//   onActivate(event) {
//     const scrollToTop = window.setInterval(() => {
//         const pos = window.pageYOffset;
//         if (pos > 0) {
//             window.scrollTo(0, pos - 20); // how far to scroll on each step
//         } else {
//             window.clearInterval(scrollToTop);
//         }
//     }, 16);
// }


}
