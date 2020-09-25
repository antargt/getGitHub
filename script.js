let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let myRepos = JSON.parse(this.responseText);
		for ( let i = 0; i < myRepos.length; i++) {
			
			var node = document.createElement("li");				// Create a <li> node
			var namePlusDescNode = document.createTextNode(
				myRepos[i].name + " -- " + myRepos[i].description); //  Create a text node
			node.appendChild(namePlusDescNode);						// Append the text to <li>
			document.getElementById("gitRepos").appendChild(node);
		}
		  
	}
};
gitHubRequest.open("GET", "https://api.github.com/users/antargt/repos", true);
gitHubRequest.send();

