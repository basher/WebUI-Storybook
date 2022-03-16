import docs from './Icons.mdx';

export default {
    title: 'UI Components/Icons',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        iconSize: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
};

const style = `
<style>
    [aria-labelledby='title-icon-logo-theme'] {
        height: 3rem;
        width: calc(3rem * 3.289);
    }
</style>
`;

export const Icons = (args) => `
${style}
<p>THEME = "${UIconfig.theme}"</p>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG001</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG001" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG007</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG007" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG011</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG011" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG012</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG012" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG013</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG013" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG014</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG014" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG015</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG015" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG016</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG016" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG018</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG018" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG019</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG019" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG021</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG021" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG028</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG028" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG034</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG034" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG035</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG035" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG036</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG036" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG041</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG041" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG050</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG050" />
</svg>


<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG051</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG051" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG054</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG054" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG056</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG056" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG072</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG072" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG073</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG073" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG074</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG074" />
</svg>

<svg
    role="img"
    focusable="false"
    class="ui-icon ui-icon--${args.iconSize}"
>
    <title>SVG075</title>
    <use href="${UIconfig.theme}.sprite.svg#SVG075" />
</svg>
`;
