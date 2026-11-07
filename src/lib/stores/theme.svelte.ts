type Theme = 'light' | 'dark';

let theme = $state<Theme>('light');
let initialized = false;

function applyTheme(value: Theme) {
    theme = value;
    document.documentElement.dataset.theme = value;
    localStorage.setItem('theme', value);
}

function initTheme() {
    if (initialized || typeof window === 'undefined') return;

    const saved = localStorage.getItem('theme');

    const initial: Theme =
        saved === 'light' || saved === 'dark'
            ? saved
            : window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light';

    theme = initial;
    document.documentElement.dataset.theme = initial;
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