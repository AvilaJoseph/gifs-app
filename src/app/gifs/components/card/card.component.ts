import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Gif } from "../../interfaces/gifs.interfaces";


@Component({
    selector: "gifs-card",
    templateUrl: "./card.component.html",
    imports: [
        CommonModule,
    ]
})

export class CardComponent implements OnInit {
    @Input()
    public gif!: Gif; // Ahora recibe un solo Gif

    ngOnInit(): void {
        if (!this.gif) {
            throw new Error("El componente CardComponent requiere un gif");
        }
    }
}