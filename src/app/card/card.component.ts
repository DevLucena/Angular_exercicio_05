import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  lista:string[] = []

  ngOnInit():void{
    this.recuperarLocalStorage()
  }

  @ViewChild('addElement')
  ipt!: ElementRef


  //add, remover e remover todos elementos do ToDo
  add(valor:string):void{
    this.lista.push(valor)
    this.ipt.nativeElement.value = ''
    this.salvarStorage ()
  }

  removeE (lista:string):void{
    this.lista.splice(this.lista.indexOf(lista),1)
    let arrStr = JSON.stringify(this.lista)
    localStorage.setItem('ToDo', arrStr)
    this.recuperarLocalStorage()
  }

  removeAll ():void{
    this.lista.length=0
    this.removerStorageAll()
  }

  //salvar, recuperar, e Remover todo o conteudo do LocalStorage

  salvarStorage ():void {
    const data = JSON.stringify(this.lista)
    localStorage.setItem('ToDo', data)
  }

  recuperarLocalStorage():void{
    let storage = localStorage.getItem('ToDo')
    let arr = JSON.parse(storage || '[]')
    this.lista = arr
  }

  removerStorageAll( ):void {
  localStorage.clear()
  }
}
