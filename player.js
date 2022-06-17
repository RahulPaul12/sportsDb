const searchBtn = document.getElementById('search')
searchBtn.addEventListener('click',function(){

    const playerinput = document.getElementById('player-input');
    const playername = playerinput.value.split(' ').join('%20');
    playerinput.value=''
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playername}`
    console.log(url);

    fetch(url)
    .then(res=>res.json())
    .then(data=>playerload(data.player))

    
    const playerload =(players)=>{
        const detail= document.getElementById('detail-container')
        detail.innerHTML=''
        for(const player of players){
const img =(player.strCutout);
           console.log(img);
            detail.classList.add('d-flex');
            detail.classList.add('justify-content-between');
            detail.innerHTML=`<div class="text-white">
                      <img src=${player.strCutout} class="w-75" alt="poster">
                      <h1 >${player.strPlayer}</h1>
                      <h6 >Born: ${player.dateBorn}</h6>
                      <h6 >Location: ${player.strBirthLocation}</h6>
                      <h6 >Nationality: ${player.strNationality}</h6>
                      <h6 >Jersy: ${player.strNumber}</h6>
                      </div>
                      <div class="ms-0 tex-white">
                      
                      <h2 class="text-white">${player.strSport}</h2>
                      <h6 class="text-white">${player.strPosition}</h6>
                      
                      <p class="text-white">${player.strDescriptionEN}</p>
                      
                   </div>`;


        }
    }
});