type Theme = 'light' | 'dark';

let theme = $state<Theme>('light');
let initialized = false;

function applyTheme(value: Theme) {
	theme = value;
	document.documentElement.dataset.theme = value;
}

function initTheme() {
	if (initialized || typeof window === 'undefined') return;

	const media = window.matchMedia('(prefers-color-scheme: dark)');

	const syncTheme = () => {
		applyTheme(media.matches ? 'dark' : 'light');
	};

	syncTheme();
	media.addEventListener('change', syncTheme);

	initialized = true;
}

function toggleTheme() {
	applyTheme(theme === 'light' ? 'dark' : 'light');
}

export const themeStore = {
	get current() {
		return theme;
	},
	get isDark() {
		return theme === 'dark';
	},
	init: initTheme,
	toggle: toggleTheme
};
