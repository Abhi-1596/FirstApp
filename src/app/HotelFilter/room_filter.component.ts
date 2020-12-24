import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-room_filter',
    templateUrl: './room_filter.component.html'
})

export class RoomFilterComponent {
    @Input() filterName: string;
    
    roomType;

    @Output() roomClicked: EventEmitter<string> = new EventEmitter<string>();

    onSelectRoom(): void {
        this.roomClicked.emit(this.roomType);
    }
}