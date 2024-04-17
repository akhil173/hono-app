import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { todosList } from "../../todosList";

// export const todosAtom = atom({
//   key: "todosAtom",
//   default: [],
// });

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return todosList.find(x => x.id === id)
  }
})

export const filterTodosAtom = atom({
  key: "filterTodosAtom",
  default: "",
});

export const renderedTodos = selectorFamily({
  key: "renderedTodos",
  get: (id) => ({ get }) => {
    const todos = get(todosAtomFamily(id));
    const filterString = get(filterTodosAtom);

    return filterString
      ? todos.filter((todo) => {
          return todo.title.toLowerCase().includes(filterString.toLowerCase()) ||
            todo.description.toLowerCase().includes(filterString.toLowerCase());
        })
      : todos;
  },
});
