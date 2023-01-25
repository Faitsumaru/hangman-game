type HangmanDrawingProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess } : HangmanDrawingProps ) {
    return ( 
        <div
            style={{ 
                display: "flex", 
                gap: ".25em", 
                fontSize: "6rem", 
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
                }}
            >
            {wordToGuess.split("").map((letter, idx) => (
                <span style={{ borderBottom: ".1em solid black" }} key={idx}>
                    <span 
                        style={{  
                            visibility: guessedLetters.includes(letter) 
                            ? "visible"
                            : "hidden",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}