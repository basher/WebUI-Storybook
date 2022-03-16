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
<div class="kb-button-group">
    <a
        href="#"
        class="kb-button kb-button--text kb-button--toggle is-selected"
    >
        Selected
    </a>
    <a
        href="#"
        class="kb-button kb-button--text kb-button--toggle"
    >
        Default
    </a>
</div>
`;
