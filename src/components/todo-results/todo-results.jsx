import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

const calculateChecked = () => {
  if ([...todos]?.length > 0) {
    return [...todos]?.filter((item) => item?.checked)?.length;
  }
  return 0;
};
    // Fix an ability to calculate completed tasks

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
