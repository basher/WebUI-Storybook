import docs from '../IconButton.mdx';

export default {
    title: 'UI Components/Buttons & links/Buttons/Icon',
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
                options: [
                    'SVG001',
                    'SVG011',
                    'SVG012',
                    'SVG016',
                    'SVG018',
                ],
            },
        },
        disabled: { control: 'boolean' },
    },
};

export const IconButton = (args) => `
<button
    type="button"
    class="kb-button kb-button--icon"
    ${args.disabled === true ? 'disabled' : ''}
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="kb-icon kb-icon--${args.iconSize}"
    >
        <title>[title]</title>
        <use href="${KBconfig.theme}.sprite.svg#${args.iconRef}" />
    </svg>
    <span class="sr-only">[screenreader label]</span>
</button>
`;
IconButton.args = {
    iconRef: 'SVG001',
};
IconButton.storyName = 'Icon';
