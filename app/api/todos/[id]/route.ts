import { NextResponse } from "next/server";

const URL = "https://jsonplaceholder.typicode.com/todos"

type Params = {
    id: string
}

export async function GET(_response: Response, context: {params: Params}){
    const id:string = context.params?.id

    const res = await fetch(`${URL}/${id}`);
    const todo: Todo = await res.json();

    if(!todo.id) return NextResponse.json({
        message: `No Todo found with id: ${id}`
    })

    return NextResponse.json(todo)

}