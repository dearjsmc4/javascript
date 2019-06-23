import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container.component'
import { TodoFormComponent } from './todo-form.component';
import { TodoNavComponent } from './todo-nav.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFooterComponent } from './todo-footer.component';
import { TodofilterPipe } from './todofilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodofilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
