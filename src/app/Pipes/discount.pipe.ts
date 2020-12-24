import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'discountPipe'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number, myDiscount: number) {
        value = value - (value * (myDiscount/100));
        return value;
    }
}