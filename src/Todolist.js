import React from 'react';

export default function Todolist(props) {
  return (
    <div className="display-list">
      {props.lists.map((list) => {
        return (
          <li key={list.id}>
            <i
              className="fas fa-trash-alt"
              onClick={() => props.deleteItem(list.id)}
            ></i>
            {list.title}---
            {list.dateAndTime}
          </li>
        );
      })}
    </div>
  );
}
