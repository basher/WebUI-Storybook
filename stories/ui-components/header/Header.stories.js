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
    .kb-header > * {
        border: 2px dashed rgb(235, 201, 90);
    }
</style>
`;

export const Header = () => `
${style}
<header class="kb-layout__header kb-layout__sticky kb-layout__sticky--header" id="header">
    <div class="kb-layout__header__overlay"></div>
    <div class="kb-layout__inner">

        <div class="kb-header">
            <a href="/" class="kb-button kb-button--icon kb-header__home">
                <img class="kb-image is-hidden-on-large" src="https://via.placeholder.com/100x100.png" alt="home" />
                <img class="kb-image" src="https://via.placeholder.com/250x100.png" alt="home" />
            </a>

            <nav
                id="navigation"
                class="kb-navigation kb-header__nav"
                aria-label="site header navigation"
            >
                Site navigation...
            </nav>

            <div class="kb-header__logo">
                Dealer logo...
            </div>

            <form
                id="site-search"
                class="kb-header__search kb-form"
                action="#"
                role="search"
            >
                Site search...
            </form>

            <a class="kb-header__offers" href="#">
                Offers link...
            </a>

            <div class="kb-branch-rotator kb-header__contact">
                Branch rotator...
            </div>
        </div>

    </div>
</header>
`;

export const VerticalHeader = () => `
${style}
<header class="kb-layout__header" id="header">
    <div class="kb-layout__header__overlay"></div>
    <div class="kb-layout__inner">

        <div class="kb-header kb-header--vertical">
            <a href="/" class="kb-button kb-button--icon kb-header__home">
                <img class="kb-image is-hidden-on-large" src="https://via.placeholder.com/100x100.png" alt="home" />
                <img class="kb-image" src="https://via.placeholder.com/250x100.png" alt="home" />
            </a>

            <nav
                id="navigation"
                class="kb-navigation--vertical kb-header__nav"
                aria-label="site header navigation"
            >
                Site navigation...
            </nav>
        </div>
    </div>
</header>
`;
