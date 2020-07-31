import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Poll, PollForm } from "../types";
import { Web3Service } from "../blockchain/web3.service";
import { fromAscii } from "web3-utils";

@Injectable({
  providedIn: "root",
})
export class PollService {
  constructor(private web3: Web3Service) {}

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: "Do you like dogs or cats?",
        results: [2, 5, 7],
        thumbnail: "http://lorempixel.com/g/1200/600/",
        options: ["Cats", "Dogs", "None"],
        voted: true,
      },
      {
        id: 2,
        question: "Best month for summer holidays?",
        results: [1, 6, 4],
        thumbnail: "http://lorempixel.com/g/1200/600/",
        options: ["June", "July", "August"],
        voted: false,
      },
    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    this.web3.executeTransaction("vote", pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    this.web3.executeTransaction(
      "createPoll",
      poll.question,
      poll.thumbnail || "",
      poll.options.map((option) => fromAscii(option))
    );
  }
}
