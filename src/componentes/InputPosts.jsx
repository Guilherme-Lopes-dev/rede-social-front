import axios from 'axios';
import React from 'react'
import { useState } from 'react'


const InputPosts = () => {

    const [text, setText] = useState('')

    function change(e) {
        setText(e.target.value)

    }
    const content = text

    const postData = (e) => {
        axios.post('http://localhost:3000/users', {
            content
        }).then(res => console.log('postando', res)).catch(err => console.log(err))
    }
    return (
        <div>
            <input value={text} onChange={change} />
            <button onClick={postData}>Postar</button>
        </div>
    )
}

export default InputPosts