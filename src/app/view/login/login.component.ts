import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "yaba-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
/**
 * @title Input with a clear button
 */
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  btnClick() {
    //if (email === 'ok' && password === 'ok') {
    this.router.navigateByUrl("/beer-selection");
    //} else {
    //  console.log('Invalid email or password');
    //}
  }
}
