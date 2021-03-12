import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css',
              '../../assets/css/bootstrap.min.css'
]
})
export class GroceryListComponent implements OnInit {

  // @Output() task = new EventEmitter<string>();
  task :string;
  list : string[];

  constructor() { 
    this.task = ''
    this.list = []
    }
  
  
  ngOnInit(): void {
  }

  onClick(){
    this.list.push(this.task);
    this.task ='';
  }


}
