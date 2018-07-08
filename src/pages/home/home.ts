import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataALL: any;
  todo = {
    firstname: null,
    lastname: null,
    email: null
  }

  constructor(public navCtrl: NavController, public apidata: ApiDataProvider) {
    console.log("home page");
    this.get_data();
  }
  get_data() {
    this.apidata.getData().subscribe(data => {
      this.dataALL = data
      console.log(this.dataALL)
    })
  }
  logForm() {
    this.apidata.addData(this.todo).subscribe(() => {
      this.get_data()
    })

  }
  del(id){
    this.apidata.delData(id).subscribe(data=>{
      console.log(id)
      this.get_data()
    })

  }

}
