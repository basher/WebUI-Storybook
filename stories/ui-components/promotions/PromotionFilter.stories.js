import docs from './PromotionFilter.mdx';

export default {
    title: 'UI Components/Promotion/Promotion filter',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const PromotionFilter = () => `
<div class="ui-promotion-filter ui-button-group">
    <a
        href="#"
        class="ui-button ui-button--text ui-button--toggle is-selected"
    >
        Show all offers
    </a>
    <a
        href="#"
        class="ui-button ui-button--text ui-button--toggle"
    >
        Show all new offers
    </a>
    <a
        href="#"
        class="ui-button ui-button--text ui-button--toggle"
    >
        Show all used offers
    </a>
</div>
`;
PromotionFilter.storyName = 'Promotion filter';
