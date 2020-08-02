import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PollForm } from "src/app/types";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "app-poll-create",
  templateUrl: "./poll-create.component.html",
  styleUrls: ["./poll-create.component.scss"],
})
export class PollCreateComponent implements OnInit {
  pollForm: FormGroup;

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group({
      question: this.fb.control("", [Validators.required]),
      image: this.fb.control(""),
      option1: this.fb.control(""),
      option2: this.fb.control(""),
      option3: this.fb.control(""),
    });
  }

  submitForm() {
    const formData: PollForm = {
      question: this.pollForm.get("question").value,
      thumbnail: this.pollForm.get("image").value,
      options: [
        this.pollForm.get("option1").value,
        this.pollForm.get("option2").value,
        this.pollForm.get("option3").value,
      ],
    };

    this.pollCreated.emit(formData);
  }

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe((e) => {
      this.pollForm.reset();
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
