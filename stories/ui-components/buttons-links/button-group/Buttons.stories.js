export default {
    title: 'UI Components/Buttons & links/Button group/Buttons',
    argTypes: {
        centeredButtons: {
            control: 'boolean',
        },
    },
};

export const Buttons = (args) => `
<div class="kb-button-group ${
    args.centeredButtons === true ? 'kb-button-group--centered' : ''
}">
    <button
        type="button"
        class="kb-button kb-button--text"
    >
        Cancel
    </button>
    <button
        type="button"
        class="kb-button kb-button--text kb-button--positive"
    >
        Yes please
    </button>
    <button
        type="button"
        class="kb-button kb-button--text kb-button--negative"
    >
        No thanks
    </button>
</div>
`;
