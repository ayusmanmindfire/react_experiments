import { useNavigate } from "react-router-dom"
import { Card } from "../components/Card";

export function Home({name}){

    const navigate=useNavigate();
    return (
        <div className="homeDiv">
            HI, welcome {name}
            <p className="designP">You can go to store to add items</p>
            <div>The nav bar is linked with "a" tag, so it is refreshing</div>
            <p className="designP">Click the button below to navigate without refreshing to about section</p>
            <button style={{height: "40px", width: "60px"}} onClick={()=>navigate('/about')}>About</button><br/>
            Reusable components using props with default value as profile:<br/>
            <Card name="any"/>
            <Card name="Ayusman"/>
            <Card/>
        </div>
    )
}