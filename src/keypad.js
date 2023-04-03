import { useState } from "react"

function Keypad({ handleClick, handleClear, calculate,input,setinput }) {
    
    //this state is used to toggle between plus and minus buttons
    
    const[addminus,setaddminus]=useState("+");
    //we will call handclick on all numbers,calculate on "=" and clear on "c" buttons 
    return (
        <div className="keypad">
            <div className="row">
                <button onClick={
                    () => {
                        handleClick("7")
                    }
                } className="digit">7</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("8")
                    }
                }>8</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("9")
                    }
                }>9</button>
                <button className="operator" onClick={
                    () => {
                        handleClick("/")
                    }
                }>/</button>

            </div>
            <div className="row">
                <button className="digit" onClick={
                    () => {
                        handleClick("4")
                    }
                }>4</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("5")
                    }
                }>5</button>
                <button className="digit" onClick={
                    () => { handleClick("6") }
                }>6</button>
                <button className="operator" onClick={
                    () => {
                        handleClick("*")
                    }
                }>*</button>

            </div>
            <div className="row">
                <button className="digit" onClick={
                    () => {
                        handleClick("1")
                    }
                }>1</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("2")
                    }
                }>2</button>
                <button className="digit" onClick={
                    () => {
                        handleClick("3")
                    }
                }>3</button>
                <button className="operator" onClick={
                    () => {
                        handleClick(".")
                    }
                }>.</button>

            </div>
            <div className="row">
                <button className="digit" onClick={
                    () => {
                        handleClick("0")
                    }
                }>0</button>
                <button className="fun-keys" onClick={() => {
                    calculate()
                }
                }>=</button>
                <button className="fun-keys" onClick={() => {
                    handleClear()
                }
                }>C</button>
                <button className="operator" onClick={
                    () => {
                        if(input.charAt(input.length-1)==="+" || input.charAt(input.length-1)==="-"){
                            alert("enter valid number");
                            return;
                        }
                        if(addminus==="+"){
                            handleClick("+")
                            setaddminus("-")
                        }
                        else{
                            handleClick("-")
                            setaddminus("+")
                        }

                        
                    }
                }>+/-</button>

            </div>

        </div>
    )
}

export default Keypad

