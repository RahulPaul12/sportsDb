const bannerfunction=()=>{
    const banner = document.getElementById('banner-inner')
    fetch('	https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=133602')
    .then(res=>res.json())
    .then(data=>bannerload(data.results));

     const bannerload =(events)=>{
         {
            const div=document.createElement('div');
              div.innerHTML=`<div class="carousel-item active">
              <img src='https://www.thesportsdb.com/images/media/event/thumb/pkfeox1651858174.jpg' class="d-block w-100 h-75" alt="...">
              <div class="carousel-caption  d-md-block">
                <h1 >Football Play</h1>
                <p>Some representative placeholder content for the.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.thesportsdb.com/images/media/event/thumb/4aeqm51626519771.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
              <h1 >Football Play</h1>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.thesportsdb.com/images/media/event/thumb/7hy1gz1626519762.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
              <h1 >Football Play</h1>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.thesportsdb.com/images/media/event/thumb/rmlz8p1650025399.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
              <h1 >Football Play</h1>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.thesportsdb.com/images/media/event/thumb/su3u4q1650825490.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
              <h1 >Football Play</h1>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>`

            banner.appendChild(div);
         }
        
     }



}

const sportsfunction =()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res=>res.json())
    .then(data=>sportsload(data.sports));
     
    const sportsload=(sports)=>{
         const sportcontainer=  document.getElementById('sport')
         console.log(sports)
          for(const sport of sports){
            const img= (sport.strSport).toLowerCase().split(' ').join('_');
            
            
            
            const div=document.createElement('div');
            div.innerHTML=`<div class="col">
            <div class="card bg-dark text-white">
              <img src='https://www.thesportsdb.com/images/sports/${img}.jpg' class="card-img-top" alt="Preview Not available">
              <div class="card-body">
                <h5 class="card-title text-black">${sport.strSport}</h5>
                <p class="card-text">${(sport.strSportDescription).substring(0,100)}</p>
              </div>
            </div>
          </div>`

          sportcontainer.appendChild(div);
          }
    }
}

bannerfunction();
sportsfunction();