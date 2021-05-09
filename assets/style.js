const style = `

html, body {
    max-width: 100%;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.hero-body {
    background-color: rgba(53, 124, 109, 0.842);
    width: 98.5vw;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
h1 {
    font-family: 'Noto Serif JP', serif;
    font-size: 35px;
}
p {
    font-family: 'Noto Serif JP', serif;
    position: relative;
    left: 12px;
    color: black;
}
h2 {
    font-family: 'Noto Serif JP', serif;
    position: relative;
    font-size: 30px;
    left: 12px;
}
.team-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-radius: 10px;
}
.card-container {
    position: absolute;
    top: 41vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-body {
    background-color: rgb(76, 207, 228);
    border: 2px solid rgb(76, 207, 228);
    width: 246px;
    border-radius: 10px;
}
.card-footer {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;