import docs from './SkipLinks.mdx';

export default {
    title: 'UI Components/Skiplinks',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Skiplinks = () => `
<nav class="ui-skiplinks" aria-label="skiplinks">
    <a class="ui-skiplinks__link" href="#navigation">Skip to navigation</a>
    <a class="ui-skiplinks__link" href="#site-search">Skip to search</a>
    <a class="ui-skiplinks__link" href="#main">Skip to main content</a>
    <a class="ui-skiplinks__link" href="#footer">Skip to footer</a>
</nav>
`;
