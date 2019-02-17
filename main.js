{
  const ul = document.getElementById('author');
      fetch("https://api.openaq.org/v1/latest?country=PL&limit=200&parameter=pm25")
      .then(resp => resp.json())
      .then(resp => {
                console.log(resp);
              })
}