import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'myTextPipe'
})

export class MyTextCasePipe implements PipeTransform {
    transform(value: String, myCase: String) {
        if (myCase == 'upper') {
            value = value.toUpperCase();
        } else if (myCase == 'lower') {
            value = value.toLowerCase();
        }
        value = "(" + value + ")";
        return value;
    }
}