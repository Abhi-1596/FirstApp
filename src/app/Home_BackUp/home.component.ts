import { from } from 'rxjs';
import { Component } from '@angular/core'

@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    pageTitle: String = "Home Page"
    description: String = "This is angular app data binding"
    imagePath: String = "https://i.ibb.co/pv8Kf4m/roseate.jpg"
    myText_1: String = "Text before click..."
    myText_2: String = "Button already Clicked!!!"
    condition: Boolean = true

    toggleText(): void {
        this.condition = !this.condition
    }
}