document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", startRound);

});

function startRound() {

    document.body.innerHTML = `

    <div class="app">

        <header>

            <h1>🥏 Round Started</h1>

            <p>Hole 1 of 18</p>

        </header>

        <div class="courseMap">

            <h2>Hole 1</h2>

            <p>Par 3 • 195 ft</p>

            <br>

            <h1 id="score">3</h1>

            <br>

            <button class="bigButton" onclick="increaseScore()">
                +
            </button>

            <button class="bigButton" onclick="decreaseScore()">
                −
            </button>

            <br><br>

            <button class="menuButton" onclick="alert('Next hole coming soon!')">
                Next Hole →
            </button>

        </div>

    </div>

    `;

}

function increaseScore(){

    let score=document.getElementById("score");

    score.innerText=parseInt(score.innerText)+1;

}

function decreaseScore(){

    let score=document.getElementById("score");

    if(parseInt(score.innerText)>1){

        score.innerText=parseInt(score.innerText)-1;

    }

}
