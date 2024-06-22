import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { todosList } from "../../todosList";
import axios from "axios";

// export const todosAtom = atom({
//   key: "todosAtom",
//   default: [],
// });

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: id => {
//     return todosList.find(x => x.id === id)
//   }
// })

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: 'todoSelectorFamily',
    get: (id) => async ({get}) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.info('settimeout')
          resolve();
        }, 5000)});
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      return res.data.todo;
    }
  })
  }
)

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
