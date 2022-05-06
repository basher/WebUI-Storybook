export const htmlFragmentTopLevelLink = `
<li class="ui-navigation__item">
    <a class="ui-navigation__link" href="/">Simple link</a>
</li>
`;

export const htmlFragmentButtonGroup = `
<div class="ui-button-group">
    <a href="/"
        class="ui-button ui-button--text"
    >
        Custom button
    </a>
    <a href="/"
        class="ui-button ui-button--text"
    >
        Custom button
    </a>
    <a href="/"
        class="ui-button ui-button--text ui-button--primary"
    >
        Explore all promotions
    </a>
    <a href="/"
        class="ui-button ui-button--text ui-button--primary"
    >
        Explore all vehicles
    </a>
</div>
`;

export const htmlFragmentTouchOpenSubMenuButton = `
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

/* Mobile */
export const htmlFragmentMobileMenuButton = `
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

export const htmlFragmentMobileBackButton = `
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

export const htmlFragmentMobileSubmenuTitle = `
<span class="ui-navigation__title is-hidden-on-medium">
    Submenu child - title
</span>
`;

/* Submenu + dependencies */
export const htmlFragmentSubMenuTitleAndButton = `
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

export const htmlFragmentDropdownMenu = `
<ul class="ui-navigation__list--nested">
    <li class="ui-navigation__item" data-dropdown-open="false">
        ${htmlFragmentSubMenuTitleAndButton}
        <div class="ui-navigation__dropdown">
            ${htmlFragmentMobileBackButton}
            ${htmlFragmentMobileSubmenuTitle}

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
            ${htmlFragmentMobileSubmenuTitle}

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
`;

/* Dropdown overlay - 4th level navigation */
export const htmlFragmentDropdownOverlay = `
<div
    class="ui-navigation__dropdown ui-navigation__dropdown--overlay is-hidden"
>
    <div class="ui-navigation__dropdown--overlay__header">
        <button
            type="button"
            class="ui-button ui-button--text-icon"
            data-overlay-close
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
        <span class="ui-navigation__dropdown--overlay__title"></span>
    </div>

    <div class="ui-navigation__dropdown--overlay__content"></div>
</div>
`;
