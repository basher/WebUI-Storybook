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
<div class="kb-promotion-filter kb-button-group">
    <a
        href="#"
        class="kb-button kb-button--text kb-button--toggle is-selected"
    >
        Show all offers
    </a>
    <a
        href="#"
        class="kb-button kb-button--text kb-button--toggle"
    >
        Show all new offers
    </a>
    <a
        href="#"
        class="kb-button kb-button--text kb-button--toggle"
    >
        Show all used offers
    </a>
</div>
`;
PromotionFilter.storyName = 'Promotion filter';
