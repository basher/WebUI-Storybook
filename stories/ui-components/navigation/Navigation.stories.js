import docs from './Navigation.mdx';
import {
    htmlFragmentMobileMenuButton,
    htmlFragmentTopLevelLink,
    htmlFragmentTouchOpenSubMenuButton,
    htmlFragmentMobileBackButton,
    htmlFragmentMobileSubmenuTitle,
    htmlFragmentButtonGroup,
    htmlFragmentDropdownMenu,
    htmlFragmentDropdownOverlay,
} from './_htmlFragments';
import {
    htmlFragmentFilteredSubMenu,
    htmlFragmentProductFilterCard,
} from '../product/_htmlFragments';

export default {
    title: 'UI Components/Navigation',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

/* Inline <style> blocks to allow components to be rendered in Storybook preview pane correctly. */
const style1 = `
<style>
    .sb-show-main .ui-layout {
        min-height: 0;
    }
</style>
`;

/* Full navigation, but importing fragment template literals to make HTML easier to read. */
export const Navigation = () => `
${style1}
<div class="ui-layout">
    <header
    class="ui-layout__header ui-layout__sticky ui-layout__sticky--header" id="header"
    >
        <div class="ui-layout__header__overlay"></div>

        <div class="ui-layout__inner">
            <div class="ui-header">

                <nav
                    id="navigation"
                    class="ui-navigation ui-header__nav"
                    aria-label="site header navigation"
                >
                    ${htmlFragmentMobileMenuButton}

                    <div id="navigation-wrap">
                        <ul class="ui-navigation__list">
                            <li class="ui-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="ui-button ui-button--text-icon ui-navigation__link ui-navigation__link--has-submenu"
                                >
                                    <span class="ui-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="ui-icon"
                                        >
                                            <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Filtered sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="ui-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentFilteredSubMenu}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>

                                ${htmlFragmentDropdownOverlay}
                            </li>

                            <li class="ui-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="ui-button ui-button--text-icon ui-navigation__link ui-navigation__link--has-submenu"
                                >
                                    <span class="ui-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="ui-icon"
                                        >
                                            <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Static sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="ui-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>
                            </li>

                            <li class="ui-navigation__item">
                                <a class="ui-navigation__link" href="/">Simple link 1</a>
                            </li>
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}

                            <li class="ui-navigation__item--buttons is-hidden-on-medium">
                                ${htmlFragmentButtonGroup}
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        </div>
    </header>
</div>
`;
Navigation.storyName = 'Site navigation (with mega dropdown)';

/* Full navigation, but importing fragment template literals to make HTML easier to read. */
export const VerticalNavigation = () => `
${style1}
<div class="ui-layout ui-layout--has-vertical-header">
    <header
    class="ui-layout__header" id="header"
    >
        <div class="ui-layout__header__overlay"></div>

        <div class="ui-layout__inner">
            <div class="ui-header ui-header--vertical">

                <nav
                    id="navigation"
                    class="ui-navigation ui-navigation--vertical ui-header__nav"
                    aria-label="site header navigation"
                >
                    ${htmlFragmentMobileMenuButton}
                    <div id="navigation-wrap">
                        <ul class="ui-navigation__list">
                            <li class="ui-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="ui-button ui-button--text-icon ui-navigation__link ui-navigation__link--has-submenu"
                                >
                                    <span class="ui-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="ui-icon"
                                        >
                                            <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Filtered sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="ui-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentFilteredSubMenu}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>

                                ${htmlFragmentDropdownOverlay}
                            </li>

                            <li class="ui-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="ui-button ui-button--text-icon ui-navigation__link ui-navigation__link--has-submenu"
                                >
                                    <span class="ui-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="ui-icon"
                                        >
                                            <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Static sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="ui-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>
                            </li>

                            <li class="ui-navigation__item">
                                <a class="ui-navigation__link" href="/">Simple link 1</a>
                            </li>
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}

                            <li class="ui-navigation__item--buttons is-hidden-on-medium">
                                ${htmlFragmentButtonGroup}
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    </header>
</div>
`;
VerticalNavigation.storyName = 'Vertical site navigation (with flyout)';
