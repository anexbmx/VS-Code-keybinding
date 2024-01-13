customElements.define(
	'key-symbol',
	class KeySymbol extends HTMLElement {

        get symbol( ) {
            return this.keys[this.getAttribute('keys')] || '';
        }

		constructor() {
			super();
			this.keys = {
				cmd: '⌘',
				option: '⌥',
				ctrl: '⌃',
				shift: '⇧',
				up: '↑',
				down: '↓',
				left: '←',
				right: '→',
				backspace: '⌫',
				enter: '↩',
			};

            this.innerHTML = this.symbol;
		}
	}
);
