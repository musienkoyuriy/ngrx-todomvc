import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TodoComponent } from './components/todo/todo.component';
import { filtersReducer } from './reducers/filters.reducer';
import { todosReducer } from './reducers/todos.reducer';
import { TodosEffects } from './effects/todos.effects';
import { TodosActions } from './actions/todos.actions';
import { FiltersActions } from './actions/filters.actions';
import { TodosService } from './services/todos.service';
import { TodosContainer } from './containers/todos.container';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    FiltersComponent,
    TodosContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      todos: todosReducer,
      visibilityFilter: filtersReducer
    }),
    EffectsModule.run(TodosEffects)
  ],
  providers: [TodosActions, FiltersActions, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
