class MainMenuTab {
	constructor(id, array) {
		this.id = id

        this.template = `
        <div class="codesandbox">
           <div class="logo-border"></div>
           <div class="label">CodeSandbox</div>
        </div>
        <div class="center">Codesandbox Plane 1.0</div>
        <input class="buttonerd" value="Play" type="button">
        `
        
        document.getElementsByClassName(id)[array].innerHTML = this.template
	}
}