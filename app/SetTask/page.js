'use client'
import React, { useState } from 'react'


const page = () => {

    const [title, setTitle] = useState("")
    const [disc, setDisc] = useState("")
    const [task, setTask] = useState([])

    const submitHandler = (elm) => {
        elm.preventDefault()
        setTask([...task, { title, disc }])
        setTitle("")
        setDisc("")
        console.log(task)
    }
    const complete = (i) =>{
        let update = [...task]
        update.splice(i,1)
        setTask(update)
    }
    const delet = (i) =>{
        let update = [...task]
        update.splice(i,1)
        setTask(update)
    }

    let card = <h3 className='notask'>No Task available</h3>

if(task.length > 0){
    card = task.map((elm, i) => {
        return (
            <div className='card'>
                <div className='tdiv'>
                    <h7>{elm.title}</h7>
                    <hr></hr>
                    <h7>{elm.disc}</h7>
                </div>
                <div className='bdiv'>
                    <button className='c' onClick={()=>{
                        complete(i)
                    }}>Complet</button>
                    <button className='d' key={i} onClick={()=>{
                        delet(i)
                    }}>Delete</button>
                </div>
            </div> 
        )
    })
}

    return (
        <>
            <div className='setTask'>
                <form onSubmit={submitHandler}>
                    <h1>SetTask from</h1>
                    <div>
                        <input placeholder='Creat new Task' value={title} onChange={(elm) => {
                            setTitle(elm.target.value)
                        }} ></input>
                        <textarea placeholder='Add Discription' value={disc}
                            onChange={(elm) => {
                                setDisc(elm.target.value)
                            }}></textarea>
                    </div>
                    <button>Submit</button>
                </form>
                <div className='veiwTask'>
                    <div className='firstdiv'>
                        <h1>Task List</h1>

                        <div className='cdiv'>
                            {card}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default page