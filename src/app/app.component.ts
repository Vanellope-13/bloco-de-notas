import { Component } from "@angular/core";
import{Model1,Model2,Model3,TodoItem} from "./model";

@Component({
 selector: "todo-app",
 templateUrl: "app.component.html",
})
export class AppComponent  {
 model1=new Model1 ();
model2=new Model2 ();
model3=new Model3 (); 


 

 getTodoItensMaximos(){
    return this.model1.itensMaximos.filter(item => !item.done);
 }
 getTodoItensMedios(){
    return this.model2.itensMedios.filter(item => !item.done);
 }
 getTodoItensMinimos(){
    return this.model3.itensMinimos.filter(item => !item.done);
 }


addItemMaximo(newItem,data){
 if(newItem !=""){
   this.model1.itensMaximos.push(new TodoItem(newItem,false,data) );
 }
this.model1.itensMaximos.sort((a: TodoItem, b: TodoItem) => {
        return +new Date(a.data) - +new Date(b.data);
    });

}

addItemMedio(newItem,data){
 if(newItem !=""){
   this.model2.itensMedios.push(new TodoItem(newItem,false,data) );
 }
 this.model2.itensMedios.sort((a: TodoItem, b: TodoItem) => {
        return +new Date(a.data) - +new Date(b.data);
    });
}
addItemMinimo(newItem,data){
 if(newItem !=""){
   this.model3.itensMinimos.push(new TodoItem(newItem,false,data) );
 }
 this.model3.itensMinimos.sort((a: TodoItem, b: TodoItem) => {
        return +new Date(a.data) - +new Date(b.data);
    });
}




getTodoItensFeitosMaximo(){
    return this.model1.itensMaximos.filter(item => item.done);
    }
 
getTodoItensFeitosMedio(){
    
     return this.model2.itensMedios.filter(item => item.done);
      }
 getTodoItensFeitosMinimo(){
    
      return this.model3.itensMinimos.filter(item => item.done);
      }

}

