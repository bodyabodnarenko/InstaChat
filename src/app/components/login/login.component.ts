import { Component, OnInit } from "@angular/core";
import { LoginService } from "@services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  public isAuth: boolean;

  private loginUrl: string =
    "https://www.instagram.com/oauth/authorize/?client_id=389654896f884ec8bf642313b72d4943&redirect_uri=http://localhost:4200/profile&response_type=token";

  onClick(): void {
    window.location.href = this.loginUrl;
  }

  ngOnInit() {
  }
}
