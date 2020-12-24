import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../Listing/hotel.model';

@Pipe({
    name: 'hotelSearch'
})

export class HotelSearch implements PipeTransform {
    transform(value: IHotel[], userInput:string, roomUser: string) {
        if (userInput) {
            userInput = userInput ? userInput.toLowerCase() : null;
            
            return userInput ? value.filter((data) =>
            ((data.name.toLowerCase().indexOf(userInput) !== -1) || 
            (data.city_name.toLowerCase().indexOf(userInput) !== -1))
            ) : value;
        } else if(roomUser) {
            return roomUser.toString ? value.filter( (data) =>
            ((data.roomtype.toString() == roomUser.toString()))
            ) : value;
        } else {
            return value;
        }       
    }
}