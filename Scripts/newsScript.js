

mydiv = '';
function getNewsByCountry(country){
	const ln='en';
    const url = 'https://news-api14.p.rapidapi.com/top-headlines?country='+country+'&language='+ln+'&pageSize=10&category=sports';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8aebb2b16cmsh89b5e5936342f7fp13e65ejsn6536026e8449',
		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
	}
};

try {
	const response =  fetch(url, options)
	.then(response => response.json())
	.then(data => {
		console.log(data)	
		for (const news of data.articles){
			mydiv += ` 
				<div class="col-lg-4 col-md-4 col-xs-12">
				  <div class="card mb-4 rounded-3 shadow-sm border-primary" style="max-height:273px"> 
					<div class="card-header py-3 text-bg-primary border-primary">
					<p class="my-0 fw-normal">${news.title.split(':')[0]}</p>
					</div>
						<p class="my-0 fw-normal">${news.title}</p>
						<div class="card-body">
						  <a href="${news.url}" class="btn btn-primary">Read More</a>
					  	  </h8>
					 	 <ul class="list-unstyled mt-3 mb-4">
							<li >Published on ${news.published_date.split('T')[0]}</li>
					  	 </ul>
				  		 </div> 
		  		</div>
				</div>
			`
		}
		$("#NewsDiv").html(mydiv);
			
	})
	.catch(err => console.error(err));
	//const result =  response.text();
} catch (error) {
	console.error(error);
}
}

