function loadEvent() {
    console.log("The Beer Data");
    let rootElement = document.getElementById("root")
    
    fetch("./pub/data.json")
            .then(response => response.json())
            .then(data => {
                data.cards.forEach(card => {
                    let beerCard = `
                    <div class="card">
                        <h2>Name: ${card.title}</h2>
                        <h4>Company: ${card.sub}</h4>
                        <p>Description: ${card.text}</p>
                    </div>`;
                    rootElement.insertAdjacentHTML("beforeend", beerCard)
                });
            })  
}
window.addEventListener("load", loadEvent);
