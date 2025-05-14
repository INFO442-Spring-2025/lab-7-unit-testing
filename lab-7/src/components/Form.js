import { React, useState } from 'react'

export default function Form(props) {

    const [inputValue, setInputValue] = useState("")
    const [formSuccess, setFormSuccess] = useState(false)


    const PROFS = props.data;

    const profsChecks = PROFS.flatMap((profElem) => [
        <div key={profElem.course + "_" + profElem.netId + "_input"}>
            <input type="checkbox" id={profElem.course + "_" + profElem.netId} name={profElem.course + "_" + profElem.netId} value={profElem.course + " with " + profElem.netId} required={profElem.isRequired}/>,
            <label htmlFor={profElem.course + "_" + profElem.netId}>{profElem.course + " with " + profElem.name}</label>
            <br/>
        </div>
    ])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(inputValue.length <= 2) {
            alert("This is less than 2!")
        }
        else {setFormSuccess(true)}
    }

    if(formSuccess) {
        return (
            <p>
                Thank you for submitting!
            </p>
        )
    }
    else {
        return (
            <form onSubmit={handleSubmit}>
                {profsChecks}
                <label>What was your favorite class?
                    <input type="text" id="favorite" value={inputValue} onChange={handleChange}></input>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    } 
}