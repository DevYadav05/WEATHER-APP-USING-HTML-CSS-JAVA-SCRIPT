const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://validate-phone-by-api-ninjas.p.rapidapi.com/v1/validatephone?number=%2B12065550100');
xhr.setRequestHeader('x-rapidapi-key', 'db3e474384mshfa905fcac02ce05p1c9dfbjsnb34e21b109b2');
xhr.setRequestHeader('x-rapidapi-host', 'validate-phone-by-api-ninjas.p.rapidapi.com');

xhr.send(data);