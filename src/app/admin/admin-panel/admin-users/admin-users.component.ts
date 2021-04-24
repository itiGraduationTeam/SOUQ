import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/Shared/class/user-data';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  loading=true;
  remainder=false;
  select=false;
  usersList=[];
  selectedUser:UserData ={
    email: "",
     password: "",
     firstName: "",
     lastName: ""
  };
  constructor(private authServ:AuthenticateService) { }

  ngOnInit(): void {

    this.getAllUsers();
  }
  getAllUsers(){
    this.authServ.getAllUsers().subscribe(
      data=>{
        this.usersList=data;
        this.loading=false;
        console.log("all users data: ",data);
      },
      err=>{
        console.log(err);    
      }
    )
  }
  removeUser(id:any){
    console.log("id: ",id);
    
    this.authServ.removeUser(id).subscribe(
      data=>{
        console.log("user deleted: ", data);
        this.usersList=this.usersList.filter((user:any)=>user._id!=id)
      },
      err=>{
        console.log("user not deleted: ",err);
        
      }
    )
  }
  showRemainder(){
    this.remainder=!this.remainder;
  }
  selectUser(user:any){
    this.selectedUser=user;
    console.log("select user: ", this.selectedUser);
    
    this.select=!this.select;
  }
}
