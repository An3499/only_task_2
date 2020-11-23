import barba from '@barba/core';
import { getComponent } from './component';
import Header from '../../components/header/header';
import TodoItem from '../../components/todoItem/todoItem';
import Fab from '../../components/fab/fab';
import ModalAdd from '../../components/modalAdd/modalAdd';

let header = new Header(getComponent('header'));
let todoItem = new TodoItem(getComponent('todoItem'));
let fab = new Fab(getComponent('fab'));
let modalAdd = new ModalAdd(getComponent('modalAdd'));

// Init functions
barba.hooks.beforeEnter(data => {
    header = new Header(getComponent('header'));
    todoItem = new TodoItem(getComponent('todoItem'));
    fab = new Fab(getComponent('fab'));
    modalAdd = new ModalAdd(getComponent('modalAdd'));
});

// Destroy functions
barba.hooks.beforeLeave(data => {
    scrollbar.destroy();
    header.destroy();
    todoItem.destroy();
    fab.destroy();
    modalAdd.destroy();
});