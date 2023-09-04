import React from 'react'

const page = () => {
    return (
        <>
            <div className='veiwTask'>
                <div className='firstdiv'>
                    <h1>Task List</h1>
                    <div className='card'>
                       <div className='tdiv'>
                       <h7>Task Title</h7>
                       <hr></hr>
                        <h7>Task Description </h7>
                       </div>
                        <div className='bdiv'>
                            <button>Complete</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page