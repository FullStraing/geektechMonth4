import React, {useState} from "react";
import { LangContext } from "../contansts/context";
import ChangeLang from "./changeLangComponent";

const LangProvider = () => {
    const [lang, setLang] = useState('English')

    const changeLangToFrench = () => {
        setLang('French')
        console.log('hop') 
    }
    const changeLangToEnglish = () => {
        setLang('English')
    }
    // const changeLang = () => {
    //     if(lang == 'Spain'){
    //         setLang('French')
    //     }else{
    //         setLang('Spain')
    //     }
    // }

    return(
        <LangContext.Provider value={{changeLangToEnglish, changeLangToFrench}}>
             <div>
                {lang}
             </div>
             <ChangeLang/>
             
        </LangContext.Provider>
    )
}
export default LangProvider