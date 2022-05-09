import docs from './Header.mdx';

export default {
    title: 'UI Components/Header',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

const style = `
<style>
    .ui-header > * {
        border: 2px dashed rgb(235, 201, 90);
    }
</style>
`;

export const Header = () => `
${style}
<header class="ui-layout__header ui-layout__sticky ui-layout__sticky--header" id="header">
    <div class="ui-layout__header__overlay"></div>
    <div class="ui-layout__inner">

        <div class="ui-header">
            <a href="/" class="ui-button ui-button--icon ui-header__home">
                <img class="ui-image is-hidden-on-large" src="https://via.placeholder.com/100x100.png" alt="home" />
                <img class="ui-image" src="https://via.placeholder.com/250x100.png" alt="home" />
            </a>

            <nav
                id="navigation"
                class="ui-navigation ui-header__nav"
                aria-label="main"
            >
                Site navigation...
            </nav>

            <div class="ui-header__other1">
                Other content...
            </div>

            <form
                id="site-search"
                class="ui-header__search ui-form"
                action="#"
                role="search"
            >
                Site search...
            </form>

            <div class="ui-header__other2">
                Other content...
            </div>
        </div>

    </div>
</header>
`;

export const VerticalHeader = () => `
${style}
<header class="ui-layout__header" id="header">
    <div class="ui-layout__header__overlay"></div>
    <div class="ui-layout__inner">

        <div class="ui-header ui-header--vertical">
            <a href="/" class="ui-button ui-button--icon ui-header__home">
                <img class="ui-image is-hidden-on-large" src="https://via.placeholder.com/100x100.png" alt="home" />
                <img class="ui-image" src="https://via.placeholder.com/250x100.png" alt="home" />
            </a>

            <nav
                id="navigation"
                class="ui-navigation--vertical ui-header__nav"
                aria-label="site header navigation"
            >
                Site navigation...
            </nav>
        </div>
    </div>
</header>
`;
