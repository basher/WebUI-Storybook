import docs from './Breadcrumb.mdx';

export default {
    title: 'UI Components/Breadcrumb',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Breadcrumb = () => `
<nav class="ui-breadcrumb" aria-label="breadcrumb">
    <ol
        class="ui-breadcrumb__list"
        itemscope
        itemtype="http://schema.org/BreadcrumbList"
    >
        <li
            class="ui-breadcrumb__item"
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
        >
            <a
                class="ui-breadcrumb__link"
                href="#"
                itemprop="item"
            >
                <span itemprop="name">
                    Home
                </span>
            </a>
            <meta itemprop="position" content="1">
        </li>
        <li
            class="ui-breadcrumb__item"
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
        >
            <a
                class="ui-breadcrumb__link"
                href="#"
                itemprop="item"
            >
                <span itemprop="name">
                    Parent link 1
                </span>
            </a>
            <meta itemprop="position" content="2">
        </li>
        <li
            class="ui-breadcrumb__item"
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
        >
            <a
                class="ui-breadcrumb__link"
                href="#"
                itemprop="item"
            >
                <span itemprop="name">
                    Another parent link
                </span>
            </a>
            <meta itemprop="position" content="3">
        </li>
        <li
            class="ui-breadcrumb__item"
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem"
        >
            <a
                class="ui-breadcrumb__link"
                href="#"
                aria-current="page"
                itemprop="item"
            >
                <span itemprop="name">
                    Current link
                </span>
            </a>
            <meta itemprop="position" content="4">
        </li>
    </ol>
</nav>
`;
