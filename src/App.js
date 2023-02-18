import { useState } from "react"
import "./App.css"
import { numbers, specailCharacters, upperCaseLetters, lowerCaseLetters } from "./Characters"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { COPY_SUCESS } from "./message";


function App() {
  const [password, setPassword]= useState('')
  const [passwordLength, setPasswordLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratePassword = (e) => {

    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
      notify('You must select one option', true)
    }

    let characterList = ''

    if(includeLowercase){
      characterList = characterList + lowerCaseLetters
    }

    if(includeUppercase){
      characterList = characterList + upperCaseLetters
    }

    if(includeNumbers){
      characterList = characterList + numbers
    }

    if(includeSymbols){
      characterList = characterList + specailCharacters
    }

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i =0; i < passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password +characterList.charAt(characterIndex)
    }
    return password

  }

  const copyToClipboard =() =>{
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  const notify =(message, hasError = false) =>{
    if(hasError){
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else
    { toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    }
  }

  const handleCopyPassword = (e) => {
    if(password ===''){
      notify('Nothing to Copy',true)
    }else{
      copyToClipboard()
      notify(COPY_SUCESS)
    }
    
  }
 
  return (
    <div className="App">
    <div className="container">
      <div className="generator">
        <h2 className="generator__header">Password Generator</h2>
        
        <div className="generator__password">
          <h3>{password}</h3>
          <button onClick={handleCopyPassword} className="copy__btn">
            <i className="far fa-clipboard"></i> Copy
          </button>
        </div>


        <div className="form-group-value">
          <label htmlFor="password-strength">Password Length</label>
          <div className="password-value">{passwordLength}</div>
          <input defaultValue={passwordLength} onChange={(e)=> setPasswordLength(e.target.value)} type="range" id="password-strength" className="password-slider" max="20" min="5" step="1"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="uppercase-letters">Include UpperCase Letter</label>
          <input checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} type="checkbox" id="uppercase-letters" className="uppercase-letters" />
        </div>

        <div className="form-group">
          <label htmlFor="lowercase-letters">Include LowerCase Letter</label>
          <input checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} type="checkbox" id="lowercase-letters" className="lowercase-letters" />
        </div>

        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" className="include-numbers" />
        </div>

        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" className="include-symbols" />
        </div>

        <button onClick={handleGeneratePassword} className="generator__btn">Generate Password</button>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </div>
    </div>
  </div>
)
}

export default App

