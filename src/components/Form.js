import React, { useState } from 'react';

const Form = ({ pay }) => {

    const [carta, changeHandler] = useState("");
    const [email, emailChangeHandler] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            pay({ carta, email })
        }}>
            <input value={carta} onChange={e => changeHandler(e.target.value)} />
            <input value={email} onChange={e => emailChangeHandler(e.target.value)} />
            <button onClick={() => pay({ carta, email })} disabled={!carta || !email} >
                Paga di nuovo
            </button>
        </form>
    )
}

export default Form;