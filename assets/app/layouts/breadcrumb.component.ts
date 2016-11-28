import { Component }                                from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }    from '@angular/router';
import 'rxjs/add/operator/filter';
import { Auth }                     from './../services/auth.service';

@Component({
    selector: 'breadcrumbs',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbsComponent {
    breadcrumbs: Array<Object>;
    constructor(private router:Router, private route:ActivatedRoute, private auth: Auth) {}
    ngOnInit(): void {
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            this.breadcrumbs = [];
            let currentRoute = this.route.root,
            url = '';
            do {
                let childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(route => {
                    if(route.outlet === 'primary') {
                        let routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url:   url
                        });
                        currentRoute = route;
                    }
                })
            } while(currentRoute);
        })
    }
}