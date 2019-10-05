import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from "react-redux"

function Todos() {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      {!todos ? [] : todos.map((todo, idx) => <TodoItem key={idx} idx={idx} todo={todo} />)}
    </div>
  );
}

export default Todos



// ls6OVnKsmjurPDd1siN2k2wVWw43uienKsbWmdAZlniNEQom0bd9MJK59RvEz2FZqcOy8jG0Zl-Dq_uYCP8uzmZc7ygfMdDc4YnYtHAeiz_nNPGwGczxAoLaUR8gXHYx

https://api.yelp.com/v3/businesses/search?location=San%20Francisco&api+key=ls6OVnKsmjurPDd1siN2k2wVWw43uienKsbWmdAZlniNEQom0bd9MJK59RvEz2FZqcOy8jG0Zl-Dq_uYCP8uzmZc7ygfMdDc4YnYtHAeiz_nNPGwGczxAoLaUR8gXHYx