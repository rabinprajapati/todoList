import React, { useEffect, useState } from 'react';
import Todolist from './Todolist';

function App() {
  const [pending, setPending] = useState(true);
  let [data, setData] = useState('');
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/todoLists')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
        setPending(false);
      });
  }, []);
  const deleteItem = (id) => {
    const todolist = list.filter((item) => {
      return item.id !== id;
    });
    setList(todolist);
  };
  setData = (e) => {
    data = e.target.value;
  };
  const addItem = () => {
    console.log('added');
    setList([
      ...list,
      {
        id: Math.random(),
        title: data,
        dateAndTime: new Date().toLocaleString(),
      },
    ]);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h2>todo list</h2>
        </div>
        <div className="input-field">
          <input type="text" placeholder="add item" onChange={setData} />
          <i className="fas fa-plus" onClick={addItem}></i>
        </div>
        <div className="todo-list">
          {pending && <div>loading</div>}
          <ul>{<Todolist lists={list} deleteItem={deleteItem} />}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
