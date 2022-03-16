import docs from '../IconButton.mdx';

export default {
    title: 'UI Components/Buttons & links/Links/Text & icon',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        label: { control: 'text' },
        buttonType: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'positive', 'negative'],
            },
        },
        buttonSize: {
            control: {
                type: 'select',
                options: ['small'],
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
        swapIconPosition: { control: 'boolean' },
        verticalLayout: { control: 'boolean' },
    },
};

export const TextAndIconLink = (args) => `
<a
    href="#"
    class="kb-button kb-button--text-icon kb-button--${
        args.buttonType
    } kb-button--${args.buttonSize} ${
    args.verticalLayout === true ? 'kb-button--vertical' : ''
}"
>
    <span class="kb-button__inner ${
        args.swapIconPosition === true ? 'kb-button__inner--reverse' : ''
    }">
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#${args.iconRef}" />
        </svg>
        <span>${args.label}</span>
    </span>
</a>
`;
TextAndIconLink.args = {
    label: 'Text & icon link',
    iconRef: 'SVG001',
};
TextAndIconLink.storyName = 'Text & icon';
