import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'

export default function FeedbackForm() {
    const [text,setText] = useState('');
    const handleTextChange = (e)=>{
        setText(e.target.value)
    }
  return (
      <div>
            <Card>
                <form>
                    <h2>How would you rate your service with us??</h2>
                    {/* {todo-rating select component} */}
                    <div className='input-group'>
                        <input onChange={handleTextChange} 
                        type='text' 
                        placeholder='Write your opinion..'
                        value={text}
                        />
                        <button type='submit'> Send</button>
                    </div>
                </form>
            </Card>
      </div>
  )
}
