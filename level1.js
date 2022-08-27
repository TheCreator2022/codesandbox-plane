class Level1 {
	constructor(id, array) {
		this.id = id

         this.html = ``
         this.css = ``

         this.template =`
         <h1>Level 1: Changes "none" to "#333333".</h1>
         <h2>index.html:</h2>
         <textarea rows="7"></textarea>
         <h2>style.css:</h2>
         <textarea rows="7"></textarea>
         <h2>Output</h2>
         <iframe class="demo" width="200" height="200" srcdoc></iframe>
         `
         
         document.getElementsByClassName(id)[array].innerHTML = this.template
	}
	
	update(dt) {
		collects[0] =
		(document.getElementsByTagName("textarea")[0].value.length / 10) + (document.getElementsByTagName("textarea")[1].value.length / 25)
		this.html = document.getElementsByTagName("textarea")[0].value + "<style>" + this.css + "</style>"
        this.css = document.getElementsByTagName("textarea")[1].value
	}
}