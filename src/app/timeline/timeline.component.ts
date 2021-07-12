import {Component, OnInit} from '@angular/core';
import {TimelineService} from "../timeline.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timelineList = this.timelineService.getTimelineList() ;

  // timelineList = [
  //   {
  //     id: 1,
  //     name: "Numérique",
  //     category: "CNF",
  //     dateOfCreation: 12/12/2019,
  //     dateOfUpdate: 12/12/2019,
  //     numberOfCards: 22
  //   }]

  constructor(private timelineService : TimelineService) {
  }

  ngOnInit(): void {
  }

  deleteTimeline(timeline: any) {
    console.log("Suppresseion de la Timeline :" + timeline.id);
  }

}
