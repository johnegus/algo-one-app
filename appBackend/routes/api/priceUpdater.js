
 const fetchCompanyInfo = async () =>{

    // positions.map(position => { 
    const API_Key = 'f04ddc95561236e9dccd1ffa355ad55b';
    let stockSymbol = 'BA'
    let API_CALL = `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${API_Key}`;
    
  
    fetch(API_CALL)
    .then(
        function(response){
            return response.json()
        }
    )
    .then(
        function(data){
         
          console.log(data['price'])
            
        }
    ).catch(error => 
      console.log(error)
    )
// })
}

fetchCompanyInfo();

//   setInterval(fetchCompanyInfo(), 900000);