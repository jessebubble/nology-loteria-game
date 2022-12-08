const gameContainer = document.querySelector(".game-container");
const gameCards = document.querySelectorAll(".game-card");
const startGame = document.querySelector(".startgame");
const infoContainer = document.querySelector(".info-container");
const winningContainer = document.querySelector(".winning-container");
const hero = document.querySelector(".hero");
const loteriaCards = [
    "./assets/loteria-cards/01-El-Gallo.png",
    "./assets/loteria-cards/02-El-Diablito.png",
    "./assets/loteria-cards/03-La-Dama.png",
    "./assets/loteria-cards/04-El-Catrin.png",
    "./assets/loteria-cards/05-El-Paraguas.png",
    "./assets/loteria-cards/06-La-Sirena.png",
    "./assets/loteria-cards/07-La-Escalera.png",
    "./assets/loteria-cards/08-La-Botella.png",
    "./assets/loteria-cards/09-El-Barril.png",
    "./assets/loteria-cards/10-El-Arbol.png",
    "./assets/loteria-cards/11-El-Melon.png",
    "./assets/loteria-cards/12-El-Valiente.png",
    "./assets/loteria-cards/13-El-Gorrito.png",
    "./assets/loteria-cards/14-La-Muerte.png",
    "./assets/loteria-cards/15-La-Pera.png",
    "./assets/loteria-cards/16-La-Bandera.png",
    "./assets/loteria-cards/17-El-Bandolon.png",
    "./assets/loteria-cards/18-El-Violoncello.png",
    "./assets/loteria-cards/19-La-Garza.png",
    "./assets/loteria-cards/20-El-Pajaro.png",
    "./assets/loteria-cards/21-La-Mano.png",
    "./assets/loteria-cards/22-La-Bota.png",
    "./assets/loteria-cards/23-La-Luna.png",
    "./assets/loteria-cards/24-El-Cotorro.png",
    "./assets/loteria-cards/25-El-Borracho.png",
    "./assets/loteria-cards/26-El-Negrito.png",
    "./assets/loteria-cards/27-El-Corazon.png",
    "./assets/loteria-cards/28-La-Sandia.png",
    "./assets/loteria-cards/29-El-Tambor.png",
    "./assets/loteria-cards/30-El-Camaron.png",
    "./assets/loteria-cards/31-Las-Jaras.png",
    "./assets/loteria-cards/32-El-Musico.png",
    "./assets/loteria-cards/33-La-Arana.png",
    "./assets/loteria-cards/34-El-Soldado.png",
    "./assets/loteria-cards/35-La-Estrella.png",
    "./assets/loteria-cards/36-El-Cazo.png",
    "./assets/loteria-cards/37-El-Mundo.png",
    "./assets/loteria-cards/38-El-Apache.png",
    "./assets/loteria-cards/39-El-Nopal.png",
    "./assets/loteria-cards/40-El-Alacran.png",
    "./assets/loteria-cards/41-La-Rosa.png",
    "./assets/loteria-cards/42-La-Calavera.png",
    "./assets/loteria-cards/43-La-Campana.png",
    "./assets/loteria-cards/44-El-Cantarito.png",
    "./assets/loteria-cards/45-El-Venado.png",
    "./assets/loteria-cards/46-El-Sol.png",
    "./assets/loteria-cards/47-La-Corona.png",
    "./assets/loteria-cards/48-La-Chalupa.png",
    "./assets/loteria-cards/49-El-Pino.png",
    "./assets/loteria-cards/50-El-Pescado.png",
    "./assets/loteria-cards/51-La-Palma.png",
    "./assets/loteria-cards/52-La-Maceta.png",
    "./assets/loteria-cards/53-El-Arpa.png",
    "./assets/loteria-cards/54-La-Rana.png",
];
const loteriaBeans = [
    "./assets/loteria-tokens/token.png",
    "./assets/loteria-tokens/token-1.png",
    "./assets/loteria-tokens/token-2.png",
    "./assets/loteria-tokens/token-3.png",
    "./assets/loteria-tokens/token-4.png",
    "./assets/loteria-tokens/token-5.png",
    "./assets/loteria-tokens/token-6.png",
    "./assets/loteria-tokens/token-7.png",
    "./assets/loteria-tokens/token-8.png",
    "./assets/loteria-tokens/token-9.png",
    "./assets/loteria-tokens/token-10.png",
    "./assets/loteria-tokens/token-11.png",
    "./assets/loteria-tokens/token-12.png",
    "./assets/loteria-tokens/token-13.png",
    "./assets/loteria-tokens/token-14.png",
    "./assets/loteria-tokens/token-15.png",
    "./assets/loteria-tokens/token-16.png",
    "./assets/loteria-tokens/token-17.png",
    "./assets/loteria-tokens/token-18.png",
    "./assets/loteria-tokens/token-19.png",  
];

startGame.addEventListener("click", () => {
    gameCards.forEach((card) => {
        const audio = new Audio("./assets/loteria.mp3");
            audio.loop = true;
            audio.play();

        infoContainer.innerHTML = 
        `<div> 
            <h2 style="color: cyan">Game Started!</h2>
            <img class="nology" src="./assets/loteria.png" alt="loteria-card" style="width: 300px" />
        </div>
        <div class="loteria-beans">
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />            
        </div>
        <div class="loteria-beans">
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />            
        </div>
        <div class="loteria-beans">
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />
            <img src="${loteriaBeans[Math.floor(Math.random() * loteriaBeans.length)]}" alt="loteria-token" style="width: 40px" />            
        </div>`;

        document.querySelector(".nology").addEventListener("click", () => {
            audio.pause();
        });

        card.innerHTML = 
        `<div class="loteria-cards">
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
        </div>
        <div class="loteria-cards">
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
        </div>
        <div class="loteria-cards">
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
        </div>
        <div class="loteria-cards">
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
            <img src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" />
        </div>`;

        winningContainer.innerHTML = 
        `<div class="winning-card">
            <h2 style="color: cyan">Card in play</h2>
            <img class="card-in-play" src="${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}" alt="loteria-card" style="width: 300px" />
        </div>
        <div class="winning-button">
            <button class="loteria-button">LOTERIA!</button>
        </div>`;

        setInterval(() => {
            document.querySelector(".card-in-play").src =
            `${loteriaCards[Math.floor(Math.random() * loteriaCards.length)]}`;
        }, 5000);

        /* end game when loteria button clicked */
        document.querySelector(".loteria-button").addEventListener("click", () => {
            gameContainer.innerHTML =
            `<div class="end-game">
                <img class="nology" src="./assets/loteria.png" alt="loteria-card" style="width: 300px" />
                <video 
                    autoplay 
                    muted 
                    loop 
                    id="loteriaVideo">
                    <source src="./assets/loteria.mp4" type="video/mp4">
                </video>
            </div>
            <div class="play-again">
                <button class="play-again">Congratulations!, un juego más?</button>
            </div>`;

            infoContainer.style.display = "none";
            winningContainer.style.display = "none";
            hero.style.backgroundColor = "PaleVioletRed";
            clearInterval();

            document.querySelector(".play-again").addEventListener("click", () => {
                location.reload();

            });  
        });
    });
});