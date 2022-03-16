export default {
    title: 'UI Components/Buttons & links/Button group/Links',
    argTypes: {
        centeredButtons: {
            control: 'boolean',
        },
    },
};

export const Links = (args) => `
<div class="ui-button-group ${
    args.centeredButtons === true ? 'ui-button-group--centered' : ''
}">
    <a
        href="#"
        class="ui-button ui-button--text ui-button--primary"
    >
        Primary
    </a>
    <a
        href="#"
        class="ui-button ui-button--text ui-button--secondary"
    >
        Secondary
    </a>
    <a
        href="#"
        class="ui-button ui-button--text"
    >
        Default
    </a>
</div>
`;
