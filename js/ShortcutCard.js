class ShortcutCard extends HTMLElement {
	set title(title) {
		this.content.querySelector('.shortcut__title').textContent = title;
	}

    get keybindings () {

        return JSON.parse(this.getAttribute('keybindings'));
    }

	set keybinding(item) {
		const ul = this.content.querySelector('.shortcut__list');

		ul.insertAdjacentHTML(
			'beforeEnd',
			`<li class="shortcut__item">
                <span class="shortcut__cmd">${item.command}</span>
                <span class="shortcut__keys">${item.keybinding}</span>
            </li>`
		);
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		const template = document.getElementById('templ');
		this.content = template.content.cloneNode(true);

		this.title = this.getAttribute('name');

        for(let item of this.keybindings)
            this.keybinding = item;

		this.shadow.appendChild(this.content);
	}
}

customElements.define('shortcut-card', ShortcutCard);
