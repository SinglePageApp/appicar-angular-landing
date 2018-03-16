import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MailService } from '../../../services/mail.service';


@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
export class HomeContactComponent {
  /** Attribute used by the form tag. */
  public form: FormGroup;
  /** It's true if the form was submitted. */
  private sent: boolean;

  /**
   * Constructor.
   *
   * @param mailService The injected MailService instance.
   * @param formBuilder The injected FormBuilder instance.
   */
  constructor(private mailService: MailService, private formBuilder: FormBuilder) {
    this.sent = false;
    this.createForm();
  }

  /**
   * Submit event.
   */
  onSubmit() {
    console.log(this.form.value);
    const { name, email, subject, message } = this.form.value;
    const request = this.mailService.send(name, email, subject, message);
    // Subscribes to the send e-mail's request.
    request.subscribe(({ data }) => {
      this.sent = true;
      this.form.reset();
      alert(JSON.stringify(data));
    });
  }

  /**
   * Tells if the form was submitted.
   *
   * @returns boolean True if the form was submitted.
   */
  public wasSent(): boolean {
    return this.sent;
  }

  /**
   * Creates the contact form.
   */
  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
}
