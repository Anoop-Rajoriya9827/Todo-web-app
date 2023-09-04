import React from 'react'

const page = () => {
    return (
        <>
            <div className='setTask'>
                <form>
                    <h1>SetTask from</h1>
                    <div>
                        <input placeholder='Creat new Task'></input>
                        <textarea placeholder='Add Discription'></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default page