export default {
    title: 'UI Components/Buttons & links/Buttons/Text',
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
        disabled: { control: 'boolean' },
    },
};

export const TextButton = (args) => `
<button
    type="button"
    class="kb-button kb-button--text kb-button--${args.buttonType} kb-button--${
    args.buttonSize
}"
    ${args.disabled === true ? 'disabled' : ''}
>
    ${args.label}
</button>
`;
TextButton.args = {
    label: 'Text button',
};
TextButton.storyName = 'Text';