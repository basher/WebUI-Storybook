export default {
    title: 'UI Components/Buttons & links/Button group/Links',
    argTypes: {
        centeredButtons: {
            control: 'boolean',
        },
    },
};

export const Links = (args) => `
<div class="kb-button-group ${
    args.centeredButtons === true ? 'kb-button-group--centered' : ''
}">
    <a
        href="#"
        class="kb-button kb-button--text kb-button--primary"
    >
        Primary
    </a>
    <a
        href="#"
        class="kb-button kb-button--text kb-button--secondary"
    >
        Secondary
    </a>
    <a
        href="#"
        class="kb-button kb-button--text"
    >
        Default
    </a>
</div>
`;
