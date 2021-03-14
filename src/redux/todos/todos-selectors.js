import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.todos.loading;

export const getFilter = state => state.todos.filter;

export const getAllTodos = state => state.todos.items;

// export const getVisibleTodos = state => {
//   const todos = getAllTodos(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

export const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    console.log('Составляю новый массив видимых туду');
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

// export const getCompletedTodosCount = createSelector([getAllTodos], todos => {
//   console.log('Высчитываю новое колво комплитед тудуз');
//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// });

export const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  console.log('Высчитываю новое колво комплитед тудуз');
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});
