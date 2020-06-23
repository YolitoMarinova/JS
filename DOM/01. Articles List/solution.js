function createArticle() {

	let title = document.getElementById('createTitle');
	let content = document.getElementById('createContent');

	if (!title.value || !content.value) {
		return;
	}

	let articles = document.getElementById('articles');
	let articleElement = document.createElement("article");
	let titleElement = document.createElement("h3");
	let contentElement = document.createElement("p");

	titleElement.textContent = title.value;
	contentElement.textContent = content.value;

	articleElement.appendChild(titleElement);
	articleElement.appendChild(contentElement);

	articles.appendChild(articleElement)

	title.value = '';
	content.value = '';
}