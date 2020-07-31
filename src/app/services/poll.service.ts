import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Poll, PollForm } from "../types";

@Injectable({
  providedIn: "root",
})
export class PollService {
  constructor() {}

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
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
