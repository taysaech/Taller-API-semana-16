document.getElementById("fetchCharacters").addEventListener("click", fetchCharacters);

async function fetchCharacters() {
    const url = "https://rickandmortyapi.com/api/character";
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const container = document.getElementById("charactersContainer");
        container.innerHTML = "";

        data.results.forEach(character => {
            const characterDiv = document.createElement("div");
            characterDiv.classList.add("character");

            characterDiv.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
            `;

            container.appendChild(characterDiv);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}