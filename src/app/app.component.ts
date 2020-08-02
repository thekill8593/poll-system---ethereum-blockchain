import { Component, OnInit } from "@angular/core";
import { Poll, PollForm, PollVote } from "./types";
import { PollService } from "./services/poll.service";
import { log } from "console";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  showForm = false;
  activePoll: Poll = null;

  polls = this.ps.getPolls();

  constructor(private ps: PollService) {}

  pollCreationEvent: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.ps.onEvent("PollCreated").subscribe((e) => {
      this.polls = this.ps.getPolls();
    });

    this.ps.onEvent("VoteCreated").subscribe((e) => {
      console.log(e["payload"]._pollId);
      this.polls = this.ps.getPolls();
      this.activePoll = null;
    });
  }

  setActivePoll(poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll).then((_) => {
      this.pollCreationEvent.next();
    });
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote).then(async (v) => {
      console.log(v);
      this.polls = this.ps.getPolls();
    });
  }
}
