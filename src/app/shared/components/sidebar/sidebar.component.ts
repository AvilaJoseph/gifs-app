import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule]
})
export class SidebarComponent { 

  constructor(private gifsService: GifsService) { }

  get searchTags(): string[] {
    return this.gifsService.tagHistory; // Asegúrate de que `tagsHistory` existe en `GifsService`
  }

  public searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
