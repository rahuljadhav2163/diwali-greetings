import { useSearchParams } from "react-router-dom";
import "./Home.css"
import { useState } from "react";
import akshkandil from "./../Home/akashkandil.png"
import diva from "./../Home/dive.png"
import cracker from "./../Home/crackers.png"


const greet = [
  "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा...!",
  "यशाची रोषणाई कीर्तीचे अभ्यंग स्नान मनाचे लक्ष्मिपुजनसमृद्धीचे फराळप्रेमाची भाऊबीजअशा मंगल दिवाळीच्या शुभेच्छा",
  "फटाके, कंदील अन् पणत्यांची रोषणाई,चिवडा-चकली, लाडू-करंजीची ही लज्जतच न्यारी,आनंदली दुनिया सारी!दिवाळीच्या हार्दिक शुभेच्छा!",
  "पहीला दिवा आज लागला दारी,सुखाची किरणे येई घरी,पूर्ण होवो तुमच्या सर्व इच्छा,दिपावलीच्या हार्दिक शुभेच्छा."
]
function Home() {

  const [searchParams] = useSearchParams();

  const [to, setTo] = useState(searchParams.get("to"))
  const [from, setFrom] = useState(searchParams.get("from"))
  const [g, setG] = useState(searchParams.get("g") >= greet.length ? 0 : searchParams.get("g") || 0)
  const [themeNum, setThemeNum] = useState(searchParams.get("t"))

  const copyUrl = () => {
    const generatedUrl = `${import.meta.env.VITE_BASE_URL}/?from=${from}&to=${to}&g=${g}&t=${themeNum}`;
  
    navigator.clipboard.writeText(generatedUrl)
     
        alert("URL copied to clipboard!");
    

  };
  

  return (
    <div>

      <div className={`greet-container ${`theme-${themeNum}`}`}>
        <h1 className="to-name">प्रिय {to}...</h1>
        <img className="diva-imgg" src={akshkandil} />
        <img className="diva-imggg" src={akshkandil} />
        <img className="diva-imgggg" src= {akshkandil}/>
        <img className="diva-imggggg" src={akshkandil} />
        <img className="diva-img" src={diva}/>
        <h2 className="greetiline">{greet[g]}</h2>
        <h2 className="from-name">शुभेच्छुक {from} 💥</h2>
        <img className="crackers" src={cracker} />
      </div>

      <p className="ask-line">Do You Want To create Your Own Diwali Greeting..? Custumize It Here👇</p>

      <p className="copy-link">{import.meta.env.VITE_BASE_URL}/?from={from}&to={to}&g={g}&t={themeNum}
      <img onClick={copyUrl} className="copy-btn" src="https://www.pnx-spb.ru/images/copy-btn.svg"/>
      </p>

     <div className="input-container">
     <input className="input-box"
       type="text"
        placeholder="To"
        value={to}
        onChange={(e) => {
          setTo(e.target.value)
        }} />

      <input 
      className="input-box"
      type="text"
        placeholder="From"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value)
        }} />

        <select
        className="input-box"
        value={g}
        onChange={(e) => {
          setG(e.target.value)
        }}>

             <option value='0'>Greet 1</option>
             <option value='1'>Greet 2</option>
             <option value='2'>Greet 3</option>
             <option value='3'>Greet 4</option>
        </select>

        <select
        value={themeNum}
        className="input-box"
        onChange={(e) => {
          setThemeNum(e.target.value)
        }}>
             <option value='1'>Theme 1</option>
             <option value='2'>Theme 2</option>
             <option value='3'>Theme 3</option>
        </select>
     </div>

      
    </div>
  )
}
export default Home 