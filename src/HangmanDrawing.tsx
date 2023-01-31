import {useEffect, useState} from 'react';
// import { styles } from './ThemeButton';

type HangmanDrawingProps = {
    numberOfGuesses: number,
    isLoser: boolean
}

export function HangmanDrawing({ numberOfGuesses, isLoser = false } : HangmanDrawingProps) {

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
            transformOrigin: "right bottom",
            visibility: 'hidden'
            }}
        />
    )

    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG]

    if (isLoser) {
        BODY_PARTS.forEach((el, i) => {
            BODY_PARTS[i].props.style.transition = 'all 1s ease-in'
            BODY_PARTS[i].props.style.background = '#cc0000'
        });

        HEAD.props.style.border = '10px solid #cc0000'
    
        RIGHT_ARM.props.style.rotate = '70deg'
        RIGHT_ARM.props.style.right = '-91px'
        RIGHT_ARM.props.style.top = '135px'

        LEFT_ARM.props.style.rotate = '-70deg'
        LEFT_ARM.props.style.right = '1px'
        LEFT_ARM.props.style.top = '135px'

        RIGHT_LEG.props.style.rotate = '80deg'
        
        LEFT_LEG.props.style.rotate = '-80deg'
        LEFT_LEG.props.style.visibility = 'visible'
        LEFT_LEG.props.style.transition = 'all 1s ease-in'
        LEFT_LEG.props.style.background = '#cc0000'

    }    
    // console.log(BODY_PARTS[2].props.style.rotate)

    return (
        <div style={{ position: "relative" }}>
            { BODY_PARTS.slice(0, numberOfGuesses) }

            {LEFT_LEG}

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