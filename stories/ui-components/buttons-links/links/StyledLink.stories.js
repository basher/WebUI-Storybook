export default {
    title: 'UI Components/Buttons & links/Links/Text link styled like button',
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
    },
};

export const StyledLink = (args) => `
<a
    href="#"
    class="kb-button kb-button--text kb-button--${args.buttonType} kb-button--${args.buttonSize}"
>
    ${args.label}
</a>
`;
StyledLink.args = {
    label: 'Styled link',
};
StyledLink.storyName = 'Text link styled like button';
