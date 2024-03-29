import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }
  denger(msg){
    this.showNotification('danger', msg)
  }
  info(msg){
    this.showNotification('info', msg)
  }
  warning(msg){
    this.showNotification('warning', msg)
  }
  success(msg){
    this.showNotification('success', msg)
  }

  showNotification(mdgtype, msg){
      const type = ['','info','success','warning','danger'];

      let color = 0;

      if(mdgtype === "info"){
        color = 1;
      }else if(mdgtype === "success"){
        color = 2;
      }else if(mdgtype === "warning"){
        color = 3;
      }else if(mdgtype === "danger"){
        color = 4;
      }
      
      $.notify({
          icon: "notifications",
          message: msg

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: 'top',
              align: 'right'
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
  ngOnInit() {
  }

}
