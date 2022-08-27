class SelectLevel {
	constructor(id, array) {
		this.id = id

       this.template = `
        <h1 class="center">Select a Level</h1>
        <div class="level-row">
        <input id="level1" value="1" type="button">
        </div>
       `
       
       document.getElementsByClassName(id)[array].innerHTML= this.template
	}
}