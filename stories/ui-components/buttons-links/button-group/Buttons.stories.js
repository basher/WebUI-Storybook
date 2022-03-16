export default {
    title: 'UI Components/Buttons & links/Button group/Buttons',
    argTypes: {
        centeredButtons: {
            control: 'boolean',
        },
    },
};

export const Buttons = (args) => `
<div class="ui-button-group ${
    args.centeredButtons === true ? 'ui-button-group--centered' : ''
}">
    <button
        type="button"
        class="ui-button ui-button--text"
    >
        Cancel
    </button>
    <button
        type="button"
        class="ui-button ui-button--text ui-button--positive"
    >
        Yes please
    </button>
    <button
        type="button"
        class="ui-button ui-button--text ui-button--negative"
    >
        No thanks
    </button>
</div>
`;
