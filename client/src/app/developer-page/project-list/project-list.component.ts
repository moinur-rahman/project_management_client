import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  list = [
    {
      'id': 1,
      'img': "bf",
      'projectName': 'Learn Figma',
      'projectGiver': 'Christopher Morgan',
    },

    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    },
    {
      'id': 2,
      'img': "af",
      'projectName': 'Learn',
      'projectGiver': 'Christopher',
    }
  ]


  getData(data:NgForm){
    
    console.log(data)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
