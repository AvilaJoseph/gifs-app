import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Gif } from "../../interfaces/gifs.interfaces";
import { CardComponent } from "../card/card.component";

@Component({
    selector: "gifs-card-list",
    imports: [
        CommonModule,
        CardComponent
    ],
    templateUrl: "./card-list.component.html",
    styleUrls: ["./card-list.component.css"]
})

export class CardListComponent { 

    @Input()
    public gifs: Gif[] = [];
}
