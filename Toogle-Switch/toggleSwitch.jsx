import react from 'react'
import {useState} from 'react'
import './toggleSwitch.css'

export default function ToggleSwitch(){
    let [ controller, setController] = useState("Off")

    function control(){
        setController(prev => (prev === "Off" ? "On" : "Off"))
    }
    return (
        <>
        <div className="container" onClick={control}>
            <div className={`slider ${controller === "On" ? "slide-right" : "slide-left"}`}>
                <span className="text">{controller}</span>
            </div>
        </div>
        </>
    )
}
