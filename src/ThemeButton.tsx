import React, { useState, useEffect } from "react";
import { BsMoonStars } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';


export function ThemeButton() {
    const [isDark, setIsDark] = useState(false);

    const themes = {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(23, 21, 34)'
    }

    useEffect (() => {
        if (isDark) {
            document.body.className = 'dark'
            document.body.style.backgroundColor = themes.dark
            document.body.style.color = themes.light
        } 
        else {
            document.body.className = 'light'
            document.body.style.backgroundColor = themes.light
            document.body.style.color = themes.dark
        }
        // isDark ? document.body.style.backgroundColor = themes.dark : document.body.style.backgroundColor = themes.light
      },
    )

    return ( 
        <button className="themeBtn" style={{
            width: "50px",
            height: "50px",
            alignSelf: "end",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            // background: isDark ? "black" : "white"
          }}
          onClick={() => setIsDark(!isDark)}
        >
           {isDark 
           ? <BsMoonStars style={{ width: "100%", height: "100%", fill: "#e6e6e6" }} /> 
           : <FiSun style={{ width: "100%", height: "100%" }} />}

        </button>
    )
}

console.log(ThemeButton)

// const HangmanDrawingStyle = {
//     height: "50px", 
//     width: "10px", 
//     background: "white",
//     position: "absolute",
//     right: 0,
//     top: 0,
// }

// const HangmanDrawingStyle2 = {
//     height: "50px", 
//     width: "10px", 
//     background: "black",
//     position: "absolute",
//     right: 0,
//     top: 0,
// }

// export const styles = {
//     HangmanDrawingStyle: HangmanDrawingStyle,
//     HangmanDrawingStyle2: HangmanDrawingStyle2
// }