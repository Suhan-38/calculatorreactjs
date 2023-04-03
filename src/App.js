import Keypad from "./keypad"

import './App.css'
import { useState } from "react"

function App() {

      // the above state is used to save the calculated value
      let [input, setInput] = useState("")
      //it is to operate between two values
      function handleClick(value) {

            setInput(input + value)

      }
      //it use eval to evaluate and then it adds to input
      function calculate(value) {

            let outputVal = eval(input)
            setInput(outputVal)

      }
      // clears value  by setting it to empty string
      function handleClear() {

            setInput("")

      }
      // we will send all this functions and state to keypad component and invoke it there

      return (
            <div className="container">
                  <h1>Calculator App using react</h1>
                  <div className="caculator">
                        <input type="text" value={input} className="output" readOnly />
                        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate} input={input} setInput={setInput}></Keypad>

                  </div>

            </div>
      )
}

export default App
