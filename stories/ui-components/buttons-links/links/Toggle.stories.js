import docs from '../ToggleButton.mdx';

export default {
    title: 'UI Components/Buttons & links/Links/Toggle',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Toggle = () => `
<div class="ui-button-group">
    <a
        href="#"
        class="ui-button ui-button--text ui-button--toggle is-selected"
    >
        Selected
    </a>
    <a
        href="#"
        class="ui-button ui-button--text ui-button--toggle"
    >
        Default
    </a>
</div>
`;
