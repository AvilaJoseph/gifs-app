import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Gif } from "../../interfaces/gifs.interfaces";

@Component({
    selector: "gifs-card-list",
    imports: [
        CommonModule
    ],
    templateUrl: "./card-list.component.html",
    styleUrls: ["./card-list.component.css"]
})

export class CardListComponent { 

    @Input()
    public gifs: Gif[] = [];
}
