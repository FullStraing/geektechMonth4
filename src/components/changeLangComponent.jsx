import React from "react";
import { useContext } from "react";
import { LangContext } from "../contansts/context";

const ChangeLang = () => {
    const {changeLangToEnglish,changeLangToFrench} = useContext(LangContext)
    return(
        <div>
            <div>
                <button onClick={changeLangToFrench}>change to French</button>
                <button onClick={()=> changeLangToEnglish()}>change to English</button>
             </div>
        </div>
    )
}
export default ChangeLang