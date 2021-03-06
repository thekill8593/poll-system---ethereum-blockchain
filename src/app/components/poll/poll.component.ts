import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-poll",
  templateUrl: "./poll.component.html",
  styleUrls: ["./poll.component.scss"],
})
export class PollComponent implements OnInit {
  @Input() question: string;
  @Input() image: string;
  @Input() votes: number[];
  @Input() voted: boolean;

  numberOfVotes: number;

  constructor() {}

  ngOnInit() {
    if (this.votes.length) {
      this.numberOfVotes = this.votes.reduce((acc, current) => {
        return (acc += current);
      });
    }
  }
}
