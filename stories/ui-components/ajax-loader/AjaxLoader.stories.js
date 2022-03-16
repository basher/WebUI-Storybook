import docs from './AjaxLoader.mdx';

export default {
    title: 'UI Components/Ajax loader',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const AjaxLoader = () => `
<div class="ui-ajax__loader">
    <svg
        role="img"
        aria-labelledby="title-icon-loading"
        focusable="false"
        class="ui-icon ui-ajax__icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
    >
        <title id="title-icon-loading">loading...</title>
        <circle cx="50" cy="50" r="47"/>
    </svg>
</div>
`;
AjaxLoader.storyName = 'Spinner';
