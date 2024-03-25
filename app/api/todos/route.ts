import { NextResponse } from "next/server";
const URL = "https://jsonplaceholder.typicode.com/todos"
const DATA_API_KEY:string = process.env.DATA_API_KEY as string;

export async function GET() {
  const res = await  fetch(URL)
  const data: Todo[] = await res.json()

    return NextResponse.json({results: data.length, data})
}

export async function DELETE(response: Response) {
    
    const {id}: Partial<Todo> = await response.json();
   
    if(!id) return NextResponse.json({status: "Failed", message: "Id required"})
    console.log("ID: ", id)

    const res =  await fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "API-KEY": DATA_API_KEY
        }
    })

    if(res.ok){
        return NextResponse.json({
            message: "Todo deleted"
        })
    }

    return NextResponse.json({
        message: "Failed to delete"
    })
}

export async function POST(request: Request){
    const {userId, title, completed}:Partial<Todo> = await request.json()

    if(!userId || !title) return NextResponse.json({
        status: "Failed",
        message: "Please provide all required data."
    })
    const res = await fetch(URL, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "API-KEY": DATA_API_KEY
        },
        body: JSON.stringify({
          userId, title, completed
        })
    })

    const newTodo: Todo = await res.json()

    return NextResponse.json({newTodo})
}

export async function PUT(response: Response){
const {id, userId, title, completed}: Todo = await response.json()

const res  = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
id, userId, title, completed
    })
})

if(!res.ok) return NextResponse.json({message: "Failed to update!"})

const updateTodo: Todo = await res.json()

return NextResponse.json(updateTodo)

}