/* WHO'S THAT POKEMON? */

const pokemonSprite = document.getElementById("pokemonSprite");
    document.addEventListener("keydown", event => {
        if(event.key == "Enter"){
            document.getElementById("fetchBtn").click();
        }
    });
    
    async function fetchData(){
        try{
            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if(!response.ok){
                throw new Error("Can't locate resource")
            }

            const pokeData = await response.json();
            const spriteImg = pokeData.sprites.front_default;
            pokemonSprite.src = spriteImg;
            pokemonSprite.alt = `Image of ${pokemonName}`;
            pokemonSprite.style.display = "block";
        }catch(error){
            pokemonSprite.src = `NO IMAGE TO DISPLAY`;
            pokemonSprite.alt = `Image not found`;
            pokemonSprite.style.display = "block";
            console.error(error);
        }
    };