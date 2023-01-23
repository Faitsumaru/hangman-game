const HEAD = (
    <div style={{
        height: "50px", 
        width: "50px",
        borderRadius: "100%",
        border: "10px solid black",
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
        background: "black",
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
        background: "black",
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
        background: "black",
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
        background: "black",
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
        background: "black",
        position: "absolute",
        right: 0,
        top: "210px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
        }}
    />
)

export function HangmanDrawing() {
    return (
        <div style={{ position: "relative" }}>
            {HEAD}

            {BODY}

            {RIGHT_ARM}

            {LEFT_ARM}

            {RIGHT_LEG}

            {LEFT_LEG}

            <div style={{ 
                height: "50px", 
                width: "10px", 
                background: "black",
                position: "absolute",
                right: 0,
                top: 0,
                }} 
            />
            
            <div style={{ 
                height: "10px", 
                width: "200px", 
                background: "black",
                marginLeft: "120px" 
                }} 
            />

            <div style={{ 
                height: "400px", 
                width: "10px", 
                background: "black",
                marginLeft: "120px" 
                }} 
            />

            <div style={{ 
                height: "10px", 
                width: "250px", 
                background: "black" 
                }} 
            />
        </div>
    )
}