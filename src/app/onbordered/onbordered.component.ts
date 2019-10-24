import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-onbordered',
  templateUrl: './onbordered.component.html',
  styleUrls: ['./onbordered.component.css']
})
export class OnborderedComponent implements OnInit {
  result: Object;

  constructor(private ht:HttpClient) { }

  ngOnInit() {
    this.ht.get("http://localhost:3000/posts ").subscribe(resp=>{console.log(resp)
    this.result=resp})
  }

}
