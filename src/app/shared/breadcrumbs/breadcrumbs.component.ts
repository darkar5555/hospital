import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  label: string  = "";

  constructor( private router: Router, private title: Title, public meta: Meta) { 

    this.getDataRoute()
      .subscribe( data =>{
        console.log(data);

        this.label = data.titulo;
        this.title.setTitle(this.label);
        let metaTag : MetaDefinition={
          name: 'description',
          content: this.label
        }
        this.meta.updateTag(metaTag);

      });
  }

  ngOnInit() {
  }

  getDataRoute(){

    return this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter( (evento:ActivationEnd) => evento.snapshot.firstChild === null)
      .map( (evento: ActivationEnd) => evento.snapshot.data); 

  }

}
