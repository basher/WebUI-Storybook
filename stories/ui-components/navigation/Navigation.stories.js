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
    .sb-show-main .kb-layout {
        min-height: 0;
    }
</style>
`;

/* Full navigation, but importing fragment template literals to make HTML easier to read. */
export const Navigation = () => `
${style1}
<div class="kb-layout">
    <header
    class="kb-layout__header kb-layout__sticky kb-layout__sticky--header" id="header"
    >
        <div class="kb-layout__header__overlay"></div>

        <div class="kb-layout__inner">
            <div class="kb-header">

                <nav
                    id="navigation"
                    class="kb-navigation kb-header__nav"
                    aria-label="site header navigation"
                >
                    ${htmlFragmentMobileMenuButton}

                    <div id="navigation-wrap">
                        <ul class="kb-navigation__list">
                            <li class="kb-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="kb-button kb-button--text-icon kb-navigation__link kb-navigation__link--has-submenu"
                                >
                                    <span class="kb-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="kb-icon"
                                        >
                                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Filtered sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="kb-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentFilteredSubMenu}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>

                                ${htmlFragmentDropdownOverlay}
                            </li>

                            <li class="kb-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="kb-button kb-button--text-icon kb-navigation__link kb-navigation__link--has-submenu"
                                >
                                    <span class="kb-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="kb-icon"
                                        >
                                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Static sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="kb-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>
                            </li>

                            <li class="kb-navigation__item">
                                <a class="kb-navigation__link" href="/">Simple link 1</a>
                            </li>
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}

                            <li class="kb-navigation__item--buttons is-hidden-on-medium">
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
Navigation.storyName = 'Site navigation';

/* Full navigation, but importing fragment template literals to make HTML easier to read. */
export const VerticalNavigation = () => `
${style1}
<div class="kb-layout kb-layout--has-vertical-header">
    <header
    class="kb-layout__header" id="header"
    >
        <div class="kb-layout__header__overlay"></div>

        <div class="kb-layout__inner">
            <div class="kb-header kb-header--vertical">

                <nav
                    id="navigation"
                    class="kb-navigation kb-navigation--vertical kb-header__nav"
                    aria-label="site header navigation"
                >
                    ${htmlFragmentMobileMenuButton}
                    <div id="navigation-wrap">
                        <ul class="kb-navigation__list">
                            <li class="kb-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="kb-button kb-button--text-icon kb-navigation__link kb-navigation__link--has-submenu"
                                >
                                    <span class="kb-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="kb-icon"
                                        >
                                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Filtered sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="kb-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentFilteredSubMenu}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>

                                ${htmlFragmentDropdownOverlay}
                            </li>

                            <li class="kb-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="kb-button kb-button--text-icon kb-navigation__link kb-navigation__link--has-submenu"
                                >
                                    <span class="kb-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="kb-icon"
                                        >
                                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Static sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="kb-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>
                            </li>

                            <li class="kb-navigation__item">
                                <a class="kb-navigation__link" href="/">Simple link 1</a>
                            </li>
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}

                            <li class="kb-navigation__item--buttons is-hidden-on-medium">
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
VerticalNavigation.storyName = 'Vertical site navigation';

/* Full navigation, but without product filter tabs. */
export const NavigationWithoutFilterTabs = () => `
${style1}
<div class="kb-layout">
    <header
    class="kb-layout__header kb-layout__sticky kb-layout__sticky--header" id="header"
    >
        <div class="kb-layout__header__overlay"></div>

        <div class="kb-layout__inner">
            <div class="kb-header">

                <nav
                    id="navigation"
                    class="kb-navigation kb-header__nav"
                    aria-label="site header navigation"
                >
                    ${htmlFragmentMobileMenuButton}

                    <div id="navigation-wrap">
                        <ul class="kb-navigation__list">
                            <li class="kb-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="kb-button kb-button--text-icon kb-navigation__link kb-navigation__link--has-submenu"
                                >
                                    <span class="kb-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="kb-icon"
                                        >
                                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Filtered sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="kb-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}

                                    <div class="kb-product-filter kb-product-filter--no-tabs">
                                        <ul class="kb-grid">
                                            <li>${htmlFragmentProductFilterCard}</li>
                                            <li>${htmlFragmentProductFilterCard}</li>
                                            <li>${htmlFragmentProductFilterCard}</li>
                                            <li>${htmlFragmentProductFilterCard}</li>
                                            <li>${htmlFragmentProductFilterCard}</li>
                                        </ul>
                                        <small>Smallprint goes here...</small>
                                    </div>

                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>

                                ${htmlFragmentDropdownOverlay}
                            </li>

                            <li class="kb-navigation__item" data-dropdown-open="false">
                                <a
                                    href="/"
                                    class="kb-button kb-button--text-icon kb-navigation__link kb-navigation__link--has-submenu"
                                >
                                    <span class="kb-button__inner">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="kb-icon"
                                        >
                                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                                        </svg>
                                        <span>Static sub-menu</span>
                                    </span>
                                </a>
                                ${htmlFragmentTouchOpenSubMenuButton}

                                <div class="kb-navigation__dropdown">
                                    ${htmlFragmentMobileBackButton}
                                    ${htmlFragmentMobileSubmenuTitle}
                                    ${htmlFragmentDropdownMenu}
                                    ${htmlFragmentButtonGroup}
                                </div>
                            </li>

                            <li class="kb-navigation__item">
                                <a class="kb-navigation__link" href="/">Simple link 1</a>
                            </li>
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}
                            ${htmlFragmentTopLevelLink}

                            <li class="kb-navigation__item--buttons is-hidden-on-medium">
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
NavigationWithoutFilterTabs.storyName =
    'Site navigation without product filter tabs';
