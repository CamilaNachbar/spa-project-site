import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { LoginService } from '../service/login.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};


  constructor(private loginService: LoginService, private router: Router, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
 }
  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model.nickname, this.model.password).subscribe(data => {
      this.router.navigate(["/home"])
    }, Error => { this.toastr.error('Check your credentials', 'alert') });
  }

}
