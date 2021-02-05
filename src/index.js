import React from 'react';
import ReactDOM from 'react-dom';

const listItem = React.createElement("li", {}, "Перший елемент списку")
const listItem1 = React.createElement("li", {}, "Другий елемент списку")
const listItem2 = React.createElement("li", {}, "Третій елемент списку")
const listItem3 = React.createElement("li", {}, "Четвертий елемент списку")

const unmarkedList = React.createElement("ul", {}, listItem, listItem1, listItem2, listItem3)

const navigation = React.createElement("nav", {}, unmarkedList)

ReactDOM.render(navigation, document.getElementById("root"));


