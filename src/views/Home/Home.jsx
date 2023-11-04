import { useSearchParams } from "react-router-dom";
import "./Home.css"

const greet = [
    "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
    "यशाची रोषणाई कीर्तीचे अभ्यंग स्नान मनाचे लक्ष्मिपुजनसमृद्धीचे फराळप्रेमाची भाऊबीजअशा मंगल दिवाळीच्या शुभेच्छा",
    "फटाके, कंदील अन् पणत्यांची रोषणाई,चिवडा-चकली, लाडू-करंजीची ही लज्जतच न्यारी,नव्यानवलाईची दिवाळी येता, आनंदली दुनिया सारी!दिवाळीच्या हार्दिक शुभेच्छा!",
    "पहीला दिवा आज लागला दारी,सुखाची किरणे येई घरी,पूर्ण होवो तुमच्या सर्व इच्छा,दिपावलीच्या हार्दिक शुभेच्छा."
]
function Home() {

    const [searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const g = searchParams.get("g") >= greet.length ? 0 : searchParams.get("g") || 0;
  return (
    <div>

        <h1>Dear {to} 🥳</h1>
        <h2>{greet[g]}</h2>
        <h2>From {from}</h2>

    </div>
  )
}

export default Home
