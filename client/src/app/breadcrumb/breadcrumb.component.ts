import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  // variable publica de tipo breadcrumb[], es decir, almacena varios objetos
  public breadcrumbs: Breadcrumb[];
  public data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // iniciamos una variable de tipo BreadCrumb y la iniciaizamos
    const breadcrumb: Breadcrumb = { label: '', url: '' };

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {

        // configurar breadcrumb
        const root: ActivatedRoute = this.route.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs.slice(0, this.breadcrumbs.length - 1)];
      });

  }


  // obtenemos los breadcrumbs
  getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {

    // dato guardado en la ruta de cada enlace o ruta.
    const ROUTE_DATA_BREADCRUM = 'breadcrumb';

    // obtienes las rutas hijas.
    const children: ActivatedRoute[] = route.children;

    // regresa si no hay mas hijos
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {

      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length === 0) {
        continue;
      }

      // verifica que la propiedad 'breadcrumb' este especificada en la ruta
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUM)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // obtiene el nombre de la url si hay un dato en la propiedad 'breadcrumb' de la ruta
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // agrega la ruta URL
      url += `/${routeURL}`;

      // chil.snapshot.data[ROUTE_DATA_BREADCRUMB]: es el valor que hay en la propiedad 'breadcrumb' de la ruta
      const breadcrumb: Breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUM],
        url
      };

      breadcrumbs.push(breadcrumb);

      this.data = breadcrumb.label;

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}

export interface Breadcrumb {
  label: string;
  url: string;
}
