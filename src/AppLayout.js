function AppLayout (){
    return (
    <div className="App">
    <div className="container">
      <div className="generator">
        <h2 className="generator__header">Password Generator</h2>
        
        <div className="generator__password">
          <h3>Password</h3>
          <button className="copy__btn">
            <i className="far fa-clipboard"></i>
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="password-strength">Password Strength</label>
          <input type="number" id="password-strength" className="password-strength" max="20" min="8" />
        </div>
        
        <div className="form-group">
          <label htmlFor="uppercase-letters">Include UpperCase Letter</label>
          <input type="checkbox" id="uppercase-letters" className="uppercase-letters" />
        </div>

        <div className="form-group">
          <label htmlFor="lowercase-letters">Include LowerCase Letter</label>
          <input type="checkbox" id="lowercase-letters" className="lowercase-letters" />
        </div>

        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input type="checkbox" id="include-numbers" className="include-numbers" />
        </div>

        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input type="checkbox" id="include-symbols" className="include-symbols" />
        </div>

        <button className="generator__btn">Generate Password</button>
      </div>
    </div>
  </div>
)}

export default AppLayout