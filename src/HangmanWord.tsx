type HangmanDrawingProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false } : HangmanDrawingProps ) {
    return ( 
        <div
            style={{ 
                display: "flex", 
                gap: ".25em", 
                fontSize: "6rem", 
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginBottom: '.25em'
                }}
            >
            {wordToGuess.split("").map((letter, idx) => (
                <span style={{ borderBottom: ".12em double #595959" }} key={idx}>
                    <span 
                        style={{  
                            visibility: guessedLetters.includes(letter) || reveal 
                            ? "visible"
                            : "hidden",
                            color: !guessedLetters.includes(letter) && reveal ? "red" : "#595959",
                            textShadow: '#ffff80 0 0 5px'
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}