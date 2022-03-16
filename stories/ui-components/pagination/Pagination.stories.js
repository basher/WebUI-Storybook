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
<div class="ui-pagination ui-button-group">
    <a
        href="#"
        class="ui-button ui-button--text ui-button--positive"
    >
        Next page
    </a>
</div>
`;
