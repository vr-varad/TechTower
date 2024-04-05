import {useSelector, useDispatch} from 'react-redux'
import {deleteTodo} from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map((todo)=>{
            return (
                <div key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 my-2">
                    <div>
                        <h1 className="text-xl text-gray-100">{todo.title}</h1>
                    </div>
                    <div>
                        <button onClick={()=>dispatch(deleteTodo(todo.id))} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Todos