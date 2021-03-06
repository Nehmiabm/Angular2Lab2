import { Product } from './product';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-product-detail',
    template: `<div *ngIf="product">
    <h2>{{product.name}} details!</h2>
    <div><label>id: </label>{{product.id}}
    </div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="product.name" placeholder="name">
    </div> </div>`
})
export class ProductDetailComponent {
    @Input()
    product: Product;
}
