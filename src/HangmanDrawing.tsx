import {useEffect, useState} from 'react';
// import { styles } from './ThemeButton';

const HEAD = (
    <div style={{
        height: "50px", 
        width: "50px",
        borderRadius: "100%",
        border: "10px solid #595959",
        position: "absolute",
        right: "-30px",
        top: "50px",
        }}
    />
)

const BODY = (
    <div style={{
        height: "100px", 
        width: "10px",
        background: "#595959",
        position: "absolute",
        right: 0,
        top: "120px",
        }}
    />
)

const RIGHT_ARM = (
    <div style={{
        height: "10px", 
        width: "100px",
        background: "#595959",
        position: "absolute",
        right: "-100px",
        top: "150px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
        }}
    />
)

const LEFT_ARM = (
    <div style={{
        height: "10px", 
        width: "100px",
        background: "#595959",
        position: "absolute",
        right: "10px",
        top: "150px",
        rotate: "30deg",
        transformOrigin: "right bottom"
        }}
    />
)

const RIGHT_LEG = (
    <div style={{
        height: "10px", 
        width: "100px",
        background: "#595959",
        position: "absolute",
        right: "-90px",
        top: "210px",
        rotate: "60deg",
        transformOrigin: "left bottom"
        }}
    />
)

const LEFT_LEG = (
    <div style={{
        height: "10px", 
        width: "100px",
        background: "#595959",
        position: "absolute",
        right: 0,
        top: "210px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
        }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

// var theme = 'black';
// document.body.className == 'dark' ? theme = 'white' : theme = 'black';

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
    
    // useEffect (() => {
    //     const themeBtn = document.querySelector('.themeBtn');
    //     themeBtn?.addEventListener('click', () => {
    //         document.body.className == 'dark' ? theme = 'white' : theme = 'black';
    //     })
    //   },
    // )

    // let theme = false;
    // useEffect (() => {
    //     const themeBtn = document.querySelector('.themeBtn');
    //     document.body.className == 'dark' ? theme = true : theme = false;
    //   },
    // )

    return (
        <div style={{ position: "relative" }}>
            { BODY_PARTS.slice(0, numberOfGuesses) }

            <div style={{
                height: "50px", 
                width: "10px", 
                background: "#595959",
                position: "absolute",
                right: 0,
                top: 0,
            }} 
            />
            
            <div style={{ 
                height: "10px", 
                width: "200px", 
                background: "#595959",
                marginLeft: "120px" 
                }} 
            />

            <div style={{ 
                height: "400px", 
                width: "10px", 
                background: "#595959",
                marginLeft: "120px" 
                }} 
            />

            <div style={{ 
                height: "10px", 
                width: "250px", 
                background: "#595959" 
                }} 
            />
        </div>
    )
}