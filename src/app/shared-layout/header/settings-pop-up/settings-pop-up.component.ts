import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/service/admin.service';
import { PoleManagerService } from 'src/app/core/service/pole-manager.service';
import { ProjectManagerService } from 'src/app/core/service/project-manager.service';

@Component({
  selector: 'app-settings-pop-up',
  templateUrl: './settings-pop-up.component.html',
  styleUrls: ['./settings-pop-up.component.scss']
})
export class SettingsPopUpComponent implements OnInit {

  editForm: FormGroup;
  token = "";
  role = "";
  error: string;
  success: string;

  constructor(public dialogRef: MatDialogRef<SettingsPopUpComponent>,
    private route: Router,
    private adminService: AdminService,
    private poleManagerService : PoleManagerService,
    private projectManagerService : ProjectManagerService) { }

  ngOnInit(): void {
    this.getCredentials();
    this.error = "";
    this.success = "";
    this.initForm();
  }

  private initForm() {
    this.editForm = new FormGroup({
      'oldPassword': new FormControl("", Validators.required),
      'newPassword': new FormControl("", Validators.required),
      'cPassword': new FormControl("", Validators.required),
    });
  }

  onCancel() {
    this.editForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    let oldPassword = "";
    let newPassword = "";
    oldPassword = this.editForm.value.oldPassword;
    newPassword = this.editForm.value.newPassword;
    if (this.role == "Admin") {
      this.adminService.updatePassword(oldPassword, newPassword, this.token).subscribe(
        (res) => {
          if (res) {
            this.success = "Your request has been sent successfuly ";
            setTimeout(() => {
              this.editForm.reset();
              this.dialogRef.close();
            }, 300)
            this.reloadPage();
          }
        },
        (error) => {
          this.error = error["error"]["message"];
          this.reloadPage();
        }
      );
    }
    if (this.role == "Project Manager") {
      this.projectManagerService.updatePassword(oldPassword, newPassword, this.token).subscribe(
        (res) => {
          if (res) {
            this.success = "Your request has been sent successfuly ";
            setTimeout(() => {
              this.editForm.reset();
              this.dialogRef.close();
            }, 300)
            this.reloadPage();
          }
        },
        (error) => {
          this.error = error["error"]["message"];
          this.reloadPage();
        }
      );
    }
    if (this.role == "Pole Manager") {
      this.poleManagerService.updatePassword(oldPassword, newPassword, this.token).subscribe(
        (res) => {
          if (res) {
            this.success = "Your request has been sent successfuly ";
            setTimeout(() => {
              this.editForm.reset();
              this.dialogRef.close();
            }, 300)
            this.reloadPage();
          }
        },
        (error) => {
          this.error = error["error"]["message"];
          this.reloadPage();
        }
      );
    }
  }

  getCredentials() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser["accessToken"];
    this.role = currentUser["user"]["role"]["roleName"];
  }

  reloadPage() {
    let currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl])
  }

}
