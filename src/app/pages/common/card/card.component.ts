import { Component, Input, OnInit } from "@angular/core";
import { SiteModel } from "src/app/models/sitemodel";
// import { CardSchema } from "../../../cardschema";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() job: SiteModel.Jobs;
  constructor() {}
  ngOnInit() {}
  dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
} 