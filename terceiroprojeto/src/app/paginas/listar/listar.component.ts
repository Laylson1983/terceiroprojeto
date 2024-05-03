import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
constructor(private http: HttpClient){

}
listaHerois: any = null
getList(){
  this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .subscribe({
    next: (data: any)=>{ 
      console.log(data)
      this.listaHerois = data
    },
    error: (error:any)=>{console.log(error)}
  }

  )
}
}
