import docs from './Pagination.mdx';

export default {
    title: 'UI Components/Pagination',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Pagination = () => `
<div class="kb-pagination kb-button-group">
    <a
        href="#"
        class="kb-button kb-button--text kb-button--positive"
    >
        Next page
    </a>
</div>
`;
