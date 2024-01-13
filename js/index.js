const shortcuts = {
	essentials: {
		title: 'Essentials',
		keybindings: [
			{
				command: 'Find File',
				keybinding: '⌘ + P',
			},
			{
				command: 'Switch Project',
				keybinding: '⌘ + ;',
			},
			{
				command: 'Command Palette',
				keybinding: '⌘ + ⇧ + P',
			},
		],
	},
	editorSpliting: {
		title: 'Editor Spliting',
		keybindings: [
			{command: 'Split Pane',keybinding: '⌃ + N',},
			{command: 'Close Pane',keybinding: '⌃ + W',},
			{command: 'Focus Left Pane', keybinding: '⌃ + H',},
			{command: 'Focus Right Pane', keybinding: '⌃ + L',},
			{command: 'Expand Pane', keybinding: '⌃ + =',},
			{command: 'Contract Pane', keybinding: '⌃ + -',},
		],
	},
	terminal: {
		title: 'Terminal',
		keybindings: [
			{command: 'New Terminal',keybinding: '⌃ + N',},
			{command: 'Focus Next Pane', keybinding: '⌃ + L',},
			{command: 'Focus Prev Pane', keybinding: '⌃ + H',},
			{command: 'Kill Terminal', keybinding: '⌃ + w',},
		],
	},
	window: {
		title: 'Window',
		keybindings: [
			{command: 'Close File',keybinding: '⌘ + W',},
			{command: 'Close All Files',keybinding: '⌘ + K + W',},
			{command: 'Close Window', keybinding: '⌘ + ⇧ + W',},
			{command: 'Quit VS Code', keybinding: '⌘ + Q',},
			{command: 'Focus Prev Tab', keybinding: '⌘ + ⌥ + ←',},
			{command: 'Focus Next Tab', keybinding: '⌘ + ⌥ + →',},
		],
	},
	Panels: {
		title: 'Panels',
		keybindings: [
			{command: 'Find',keybinding: '⌘ + F',},
			{command: 'Global Find',keybinding: '⌘ + ⇧ + F',},
			{command: 'Show/Hide Terminal',keybinding: '⌘ + T',},
			{command: 'Editor',keybinding: '⌘ + E',},
			{command: 'File Explorer',keybinding: '⌘ + ⇧ + E',},
			{command: 'Git',keybinding: '⌘ + ⇧ + G',},
			{command: 'Debugger',keybinding: '⌘ + ⇧ + D',},
			{command: 'Extensions',keybinding: '⌘ + ⇧ + X',},
			{command: 'Hide/Show Sidebar',keybinding: '⌘ + B',},

		],
	},
	explorerPanel: {
		title: 'Explorer Panel',
		keybindings: [
			{command: 'New File',keybinding: '⌘ + N',},
			{command: 'New Folder',keybinding: '⌘ + ⇧ + N',},
			{command: 'Duplicate',keybinding: '⌘ + D',},
			{command: 'Delete',keybinding: '⌘ + ⌫',},
			{command: 'Rename',keybinding: '↩',},
			{command: 'Open File',keybinding: '⌘ + ↩',},
			{command: 'Expand Folder',keybinding: '→',},
			{command: 'Collapse Folder',keybinding: '←',},
			{command: 'Collapse Everything',keybinding: '⌘ + ←',},

		],
	},
    lineManipulation: {
		title: 'Line Manipulation',
		keybindings: [
			{command: 'Select Line',keybinding: '⌘ + L',},
			{command: 'Join Lines',keybinding: '⌘ + J',},
			{command: 'Delete Line',keybinding: '⌘ + ⇧ + K',},
			{command: 'Move Selection Up',keybinding: '⇧ + ↑',},
			{command: 'Move Selection Down',keybinding: '⇧ + ↓',},

		],
	},
    multiCursor: {
		title: 'Multi Cursor',
		keybindings: [
			{command: 'Select Word',keybinding: '⌘ + D',},
			{command: 'Select All Occurences',keybinding: '⌘ + ⇧ + L',},
			{command: 'Next Occurence',keybinding: '⌘ + D',},
			{command: 'Skip Occurence',keybinding: '⌘ + K ⌘ + D',},
			{command: 'Undo Selection',keybinding: '⌘ + ⌫',},
			{command: 'Add Cursor To End',keybinding: '⌘ + →',},
			{command: 'Add Cursor Above',keybinding: '⌘ + ⌥ + ↑',},
			{command: 'Add Cursor Below',keybinding: '⌘ + ⌥ + ↓',},

		],
	},
    emmet: {
		title: 'Emmet',
		keybindings: [
			{command: 'Wrap In Tag',keybinding: '⌘ + M  ⌘ + W',},
			{command: 'Select Tag Inward',keybinding: '⌘ + M  ⌘ + I',},
			{command: 'Select Tag Outward',keybinding: '⌘ + M  ⌘ + O',},
			{command: 'Rename Tag',keybinding: '⌘ + M  ⌘ + R',},
			{command: 'Jump To Match',keybinding: '⌘ + M  ⌘ + M',},
			{command: 'Remove Tag',keybinding: '⌘ + M  ⌘ + ⌫',},
		],
	},
    intelliSense: {
		title: 'IntelliSense',
		keybindings: [
			{command: 'Find Method',keybinding: '⌘ + R',},
			{command: 'Global Find Method',keybinding: '⌘ + ⇧ + R',},
			{command: 'GOTO Definition',keybinding: '⌘ + K ⌘ + ↩',},
			{command: 'Import Namespace',keybinding: '⌘ + K ⌘ + I',},
			{command: 'Run Test',keybinding: '⌘ + K ⌘ + R',},
			{command: 'Run Previous',keybinding: '⌘ + K ⌘ + P',},

		],
	},
    indentFold: {
		title: 'Indent/Fold',
		keybindings: [
			{command: 'Increase Indent',keybinding: '⌘ + [',},
			{command: 'Decrease Indent',keybinding: '⌘ + ]',},
			{command: 'Fold',keybinding: '⌘ + ⇧ + [',},
			{command: 'Expand',keybinding: '⌘ + ⇧ + ]',},
		],
	},
    others: {
		title: 'Others',
		keybindings: [
			{command: 'Turbo Log',keybinding: '⌃ + ⇧ + L',},
			{command: 'Start Live Server',keybinding: '⌘ + G ⌘ + L',},
			{command: 'Stop Live Server',keybinding: '⌘ + G ⌘ + O',},
			{command: 'Expand',keybinding: '⌘ + ⇧ + ]',},
		],
	},
};


document.querySelector('.main').insertAdjacentHTML(
	'beforeend',
	Object.keys(shortcuts)
		.map(
			(k) =>
				`<shortcut-card title='${
					shortcuts[k].title
				}' keybindings='${JSON.stringify(
					shortcuts[k].keybindings
				)}'></shortcut-card>`
		)
		.join('')
);
