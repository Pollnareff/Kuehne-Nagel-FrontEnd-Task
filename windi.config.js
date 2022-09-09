export default {
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            sidebar: '#f4f4f4',
        }),
        textColor: {
            sidebarFont: '#003369',
        },
        extend: {
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui'],
                serif: ['ui-serif', 'Georgia'],
                mono: ['ui-monospace', 'SFMono-Regular'],
                display: ['Oswald'],
                body: ['Open Sans'],
            },
            borderColor: theme => ({
                ...theme('colors'),
                default: '#f4f4f4',
                underline: '#003369',
            }),
        },
    },
}