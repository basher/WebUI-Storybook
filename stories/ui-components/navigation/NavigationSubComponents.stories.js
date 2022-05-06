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
    .ui-navigation__dropdown {
        display: block;
        position: static;
        top: 0;
        width: 100%;
    }
    [data-dropdown-open],
    .ui-navigation__item--no-grandchild {
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
    #root > .ui-navigation__button--back,
    #story--ui-components-navigation-site-navigation-sub-components--mobile-back-button .ui-navigation__button--back {
        display: inline-block;
    }
</style>
`;

/* Fully-expanded HTML from the imported fragment template literals. */
export const DropdownContent = () => `
${style1}
<div class="ui-navigation__dropdown">
    <ul class="ui-navigation__list--nested">
        <li class="ui-navigation__item" data-dropdown-open="false">
            ${htmlFragmentSubMenuTitleAndButton}
            <div class="ui-navigation__dropdown">
                ${htmlFragmentMobileBackButton}

                <span class="ui-navigation__title is-hidden-on-medium">
                    Submenu child - title
                </span>

                <ul class="ui-navigation__list--nested">
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
                            Submenu grandchild link
                        </a>
                    </li>
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
                            Link hasaverylongwordintitlethatneedstobreak
                        </a>
                    </li>
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
                            link
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="ui-navigation__item" data-dropdown-open="false">
            ${htmlFragmentSubMenuTitleAndButton}
            <div class="ui-navigation__dropdown">
                ${htmlFragmentMobileBackButton}

                <span class="ui-navigation__title is-hidden-on-medium">
                    Submenu child - title
                </span>

                <ul class="ui-navigation__list--nested">
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
                            Submenu grandchild link that wraps to multiple lines
                        </a>
                    </li>
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
                            link
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="ui-navigation__item" data-dropdown-open="false">
            ${htmlFragmentSubMenuTitleAndButton}
            <div class="ui-navigation__dropdown">
                ${htmlFragmentMobileBackButton}

                <span class="ui-navigation__title is-hidden-on-medium">
                    Submenu child - title
                </span>

                <ul class="ui-navigation__list--nested">
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
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
<div class="ui-navigation__dropdown">
    <ul class="ui-navigation__list--nested">
        <li class="ui-navigation__item ui-navigation__item--no-grandchild">
            <span class="ui-navigation__title is-hidden-on-small">
                No grandchild
            </span>
            <a class="ui-navigation__link is-hidden-on-medium" href="/">
                "Faux" grandchild
            </a>

            <div class="ui-navigation__dropdown is-hidden-on-small">
                <ul class="ui-navigation__list--nested">
                    <li class="ui-navigation__item">
                        <a class="ui-navigation__link" href="/">
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
    class="ui-button ui-button--icon ui-button--toggle is-hidden-on-medium"
    aria-expanded="false"
>
    <svg
        aria-hidden="true"
        focusable="false"
            class="ui-icon ui-icon--medium"
        >
        <title>show menu</title>
        <use href="${UIconfig.theme}.sprite.svg#SVG018" />
    </svg>
    <svg
        aria-hidden="true"
        focusable="false"
            class="ui-icon ui-icon--medium"
    >
        <title>close menu</title>
        <use href="${UIconfig.theme}.sprite.svg#SVG016" />
    </svg>
    <span class="sr-only">show menu</span>
</button>
`;
MobileMenuButton.storyName = 'Mobile menu button';

export const MobileBackButton = () => `
${style3}
<button
    type="button"
    class="ui-navigation__button--back ui-button ui-button--text-icon"
    data-back-button
>
    <span class="ui-button__inner">
        <svg
            aria-hidden="true"
            focusable="false"
            class="ui-icon"
        >
            <use href="${UIconfig.theme}.sprite.svg#SVG013" />
        </svg>
        <span>Back</span>
    </span>
</button>
`;
MobileBackButton.storyName = 'Mobile back button';

export const TouchOpenSubMenuButton = () => `
<button
    type="button"
    class="ui-button ui-button--icon is-hidden-on-small"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="ui-icon ui-icon--small"
    >
        <title>open menu</title>
        <use href="${UIconfig.theme}.sprite.svg#SVG015" />
    </svg>
    <span class="sr-only">open menu</span>
</button>
`;
TouchOpenSubMenuButton.storyName = 'Open sub-menu on touch button';

export const SubMenuTitleAndButton = () => `
<span class="ui-navigation__title is-hidden-on-small">
    Submenu child - title
</span>
<button
    type="button"
    class="ui-navigation__link ui-button ui-button--text-icon is-hidden-on-medium"
>
    <span class="ui-button__inner ui-button__inner--reverse">
        <svg
            aria-hidden="true"
            focusable="false"
            class="ui-icon is-hidden-on-medium"
        >
            <use href="${UIconfig.theme}.sprite.svg#SVG012" />
        </svg>
        <span>Submenu child - title</span>
    </span>
</button>
`;
SubMenuTitleAndButton.storyName = 'Sub-menu title & button';
