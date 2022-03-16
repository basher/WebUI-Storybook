import docs from './NavigationSubComponents.mdx';
import {
    htmlFragmentMobileBackButton,
    htmlFragmentSubMenuTitleAndButton,
} from './_htmlFragments';

export default {
    title: 'UI Components/Navigation/Site navigation sub-components',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

/* Inline <style> blocks to allow components to be rendered in Storybook preview pane correctly. */
const style1 = `
<style>
    .kb-navigation__dropdown {
        display: block;
        position: static;
        top: 0;
        width: 100%;
    }
    [data-dropdown-open],
    .kb-navigation__item--no-grandchild {
        display: block;
    }
</style>
`;

const style2 = `
<style>
    #root > #toggle-mobile-nav,
    #story--ui-components-navigation-site-navigation-sub-components--mobile-menu-button #toggle-mobile-nav {
        display: inline-block !important;
    }
</style>
`;

const style3 = `
<style>
    #root > .kb-navigation__button--back,
    #story--ui-components-navigation-site-navigation-sub-components--mobile-back-button .kb-navigation__button--back {
        display: inline-block;
    }
</style>
`;

/* Fully-expanded HTML from the imported fragment template literals. */
export const DropdownContent = () => `
${style1}
<div class="kb-navigation__dropdown">
    <ul class="kb-navigation__list--nested">
        <li class="kb-navigation__item" data-dropdown-open="false">
            ${htmlFragmentSubMenuTitleAndButton}
            <div class="kb-navigation__dropdown">
                ${htmlFragmentMobileBackButton}

                <span class="kb-navigation__title is-hidden-on-medium">
                    Submenu child - title
                </span>

                <ul class="kb-navigation__list--nested">
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            Submenu grandchild link
                        </a>
                    </li>
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            Link hasaverylongwordintitlethatneedstobreak
                        </a>
                    </li>
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            link
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="kb-navigation__item" data-dropdown-open="false">
            ${htmlFragmentSubMenuTitleAndButton}
            <div class="kb-navigation__dropdown">
                ${htmlFragmentMobileBackButton}

                <span class="kb-navigation__title is-hidden-on-medium">
                    Submenu child - title
                </span>

                <ul class="kb-navigation__list--nested">
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            Submenu grandchild link that wraps to multiple lines
                        </a>
                    </li>
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            link
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="kb-navigation__item" data-dropdown-open="false">
            ${htmlFragmentSubMenuTitleAndButton}
            <div class="kb-navigation__dropdown">
                ${htmlFragmentMobileBackButton}

                <span class="kb-navigation__title is-hidden-on-medium">
                    Submenu child - title
                </span>

                <ul class="kb-navigation__list--nested">
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            Submenu grandchild link
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
`;
DropdownContent.storyName = 'Dropdown content';

export const DropdownContentNoGrandchild = () => `
${style1}
<div class="kb-navigation__dropdown">
    <ul class="kb-navigation__list--nested">
        <li class="kb-navigation__item kb-navigation__item--no-grandchild">
            <span class="kb-navigation__title is-hidden-on-small">
                No grandchild
            </span>
            <a class="kb-navigation__link is-hidden-on-medium" href="/">
                "Faux" grandchild
            </a>

            <div class="kb-navigation__dropdown is-hidden-on-small">
                <ul class="kb-navigation__list--nested">
                    <li class="kb-navigation__item">
                        <a class="kb-navigation__link" href="/">
                            "Faux" grandchild
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
`;
DropdownContentNoGrandchild.storyName = 'Dropdown content - no grandchild';

export const MobileMenuButton = () => `
${style2}
<button
    type="button"
    id="toggle-mobile-nav"
    class="kb-button kb-button--icon kb-button--toggle is-hidden-on-medium"
    aria-expanded="false"
>
    <svg
        aria-hidden="true"
        focusable="false"
            class="kb-icon kb-icon--medium"
        >
        <title>show menu</title>
        <use href="${KBconfig.theme}.sprite.svg#SVG018" />
    </svg>
    <svg
        aria-hidden="true"
        focusable="false"
            class="kb-icon kb-icon--medium"
    >
        <title>close menu</title>
        <use href="${KBconfig.theme}.sprite.svg#SVG016" />
    </svg>
    <span class="sr-only">show menu</span>
</button>
`;
MobileMenuButton.storyName = 'Mobile menu button';

export const MobileBackButton = () => `
${style3}
<button
    type="button"
    class="kb-navigation__button--back kb-button kb-button--text-icon"
    data-back-button
>
    <span class="kb-button__inner">
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG013" />
        </svg>
        <span>Back</span>
    </span>
</button>
`;
MobileBackButton.storyName = 'Mobile back button';

export const TouchOpenSubMenuButton = () => `
<button
    type="button"
    class="kb-button kb-button--icon is-hidden-on-small"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="kb-icon kb-icon--small"
    >
        <title>open menu</title>
        <use href="${KBconfig.theme}.sprite.svg#SVG015" />
    </svg>
    <span class="sr-only">open menu</span>
</button>
`;
TouchOpenSubMenuButton.storyName = 'Open sub-menu on touch button';

export const SubMenuTitleAndButton = () => `
<span class="kb-navigation__title is-hidden-on-small">
    Submenu child - title
</span>
<button
    type="button"
    class="kb-navigation__link kb-button kb-button--text-icon is-hidden-on-medium"
>
    <span class="kb-button__inner kb-button__inner--reverse">
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon is-hidden-on-medium"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
        </svg>
        <span>Submenu child - title</span>
    </span>
</button>
`;
SubMenuTitleAndButton.storyName = 'Sub-menu title & button';

export const NavButtonGroup = () => `
<div class="kb-button-group">
    <a href="/"
        class="kb-button kb-button--text"
    >
        Custom button
    </a>
    <a href="/"
        class="kb-button kb-button--text"
    >
        Custom button
    </a>
    <a href="/"
        class="kb-button kb-button--text kb-button--primary"
    >
        Explore all promotions
    </a>
    <a href="/"
        class="kb-button kb-button--text kb-button--primary"
    >
        Explore all vehicles
    </a>
</div>
`;
NavButtonGroup.storyName = 'Button group';
