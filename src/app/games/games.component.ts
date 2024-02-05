import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>Los juegos favoritos de {{ nombreUsuario }} son estos: </p>
    <ul>
      @for (game of games; track game.id){
        <li (click)="juegoFav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() nombreUsuario: string ='';
  @Output() comunicadorEventoHP = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Metro 2033'
    },
    {
      id: 2,
      name: 'Hitman'
    },
    {
      id: 3,
      name: 'Cyberpunk 2077'
    }
  ]

  juegoFav(j: string): void{
    alert(`A ${this.nombreUsuario} le gusta jugar a ${j}`);
    this.comunicadorEventoHP.emit(j);
  }
}