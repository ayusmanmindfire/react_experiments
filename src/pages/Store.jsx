import { useState } from "react";
import { Navbar } from "../components/Navbar";

export function Store() {
    const [item, setItem] = useState("");
    const [arrayItems, setArrayItems] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();
       
            setArrayItems([...arrayItems, item]); 
            setItem("");

    };

    function showItems() {
        return (
            <ul>
                {arrayItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label>Enter your item:
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>

            {/* <button onClick={() => showItems()}>Show items</button> */}
            {showItems()} 
        </div>
    );
}
