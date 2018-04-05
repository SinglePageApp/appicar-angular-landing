import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MailService } from '../../../services/mail.service';


@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
/**
 * class :: HomeContactComponent
 *
 * Represents the contact form that sends an e-mail with the user's message.
 */
export class HomeContactComponent implements OnDestroy {
  /** Attribute used by the form tag. */
  public form: FormGroup;
  private request;
  /** It's true if the form was submitted. */
  private sent: boolean;
  /** Determines if an e-mail was sent successfully. */
  private sentSuccessfully: boolean;
  /** Determines if alert message is hidden. */
  private hidden: boolean;
  /** Form's input controls list. */
  public inputControls: Array<string>;

  /**
   * Constructor.
   *
   * @param mailService The injected MailService instance.
   * @param formBuilder The injected FormBuilder instance.
   */
  constructor(private mailService: MailService, private formBuilder: FormBuilder) {
    this.inputControls = ['name', 'email', 'subject'];
    this.sent = false;
    this.hidden = false;
    this.createForm();
  }

  ngOnDestroy() {
    // clean subscription when component destroy
    if (this.request) {
      this.request.unsubscribe();
    }
  }

  /**
   * Submit event.
   */
  onSubmit() {
    const { name, email, subject, message } = this.form.value;
    this.request = this.mailService.send(name, email, subject, message);
    // Subscribes to the send e-mail's request.
    this.request.subscribe(({ data }) => {
      this.sent = true;
      this.sentSuccessfully = data.sendEmail;
      this.form.reset();
      this.fadeInAndOutAlert();
    });
  }

  /**
   * Determines if the form was submitted.
   *
   * @returns boolean True if the form was submitted.
   */
  public wasSent(): boolean {
    return this.sent;
  }

  /**
   * Determines if the e-mail was sent succesfully.
   *
   * @returns boolean True if the form was submitted.
   */
  public wasSuccessful(): boolean {
    return this.sentSuccessfully;
  }

  /**
   * Determines if the alert box is hidden.
   *
   * @returns boolean True if the alert box is hidden.
   */
  public isHidden(): boolean {
    return this.hidden;
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
      captcha: ['', Validators.required]
    });
  }

  /**
   * Shows an alert message for a duration of 5".
   */
  private fadeInAndOutAlert() {
    if (this.wasSuccessful()) {
      setTimeout(() => {
        this.hidden = true;
        setTimeout(() => {
          this.sent = false;
        }, 2000);
      }, 5000);
    }
  }
}
