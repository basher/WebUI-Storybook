import docs from '../IconButton.mdx';

export default {
    title: 'UI Components/Buttons & links/Links/Icon',
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
        iconRef: {
            control: {
                type: 'select',
                options: ['SVG001', 'SVG011', 'SVG012', 'SVG016', 'SVG018'],
            },
        },
    },
};

export const IconLink = (args) => `
<a
    href="#"
    class="ui-button ui-button--icon"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="ui-icon ui-icon--${args.iconSize}"
    >
        <title>[title]</title>
        <use href="${UIconfig.theme}.sprite.svg#${args.iconRef}" />
    </svg>
    <span class="sr-only">[screenreader label]</span>
</a>
`;
IconLink.args = {
    iconRef: 'SVG001',
};
IconLink.storyName = 'Icon';
