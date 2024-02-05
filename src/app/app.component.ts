import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template: `
    //   <h1>Hola</h1>
    //   {{ title }}
    //   {{ city }}
    // `,
    styleUrl: './app.component.css'
    // styles: `
    //   h1{
    //     color: green;
    //   }
    // `
    ,
    imports: [RouterOutlet, UserComponent, CommentsComponent]
})
export class AppComponent {
  title = 'Tutorial';
  city: string = "Casa Blanca";
}
