import React from 'react';

import "./InputForm.css"

const InputForm = (props) => {
    return <form id="formTodo">
        <input type="text" placeholder="Enter Todo..." value={props.inputValue} onChange={props.change} />
        <button onChange={props.submit}>✚</button>
    </form>
}

export default InputForm;