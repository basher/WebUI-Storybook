export const htmlFragmentTopLevelLink = `
<li class="kb-navigation__item">
    <a class="kb-navigation__link" href="/">Simple link</a>
</li>
`;

export const htmlFragmentButtonGroup = `
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

export const htmlFragmentTouchOpenSubMenuButton = `
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

/* Mobile */
export const htmlFragmentMobileMenuButton = `
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

export const htmlFragmentMobileBackButton = `
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

export const htmlFragmentMobileSubmenuTitle = `
<span class="kb-navigation__title is-hidden-on-medium">
    Submenu child - title
</span>
`;

/* Submenu + dependencies */
export const htmlFragmentSubMenuTitleAndButton = `
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

export const htmlFragmentDropdownMenu = `
<ul class="kb-navigation__list--nested">
    <li class="kb-navigation__item is-hoisted">
        <a class="kb-navigation__link" href="/">
            "Hoisted" grandchild
        </a>
    </li>
    <li class="kb-navigation__item" data-dropdown-open="false">
        ${htmlFragmentSubMenuTitleAndButton}
        <div class="kb-navigation__dropdown">
            ${htmlFragmentMobileBackButton}
            ${htmlFragmentMobileSubmenuTitle}

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
            ${htmlFragmentMobileSubmenuTitle}

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
`;

/* Dropdown overlay - 4th level navigation */
export const htmlFragmentDropdownOverlay = `
<div
    class="kb-navigation__dropdown kb-navigation__dropdown--overlay is-hidden"
>
    <div class="kb-navigation__dropdown--overlay__header">
        <button
            type="button"
            class="kb-button kb-button--text-icon"
            data-overlay-close
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
        <span class="kb-navigation__dropdown--overlay__title"></span>
    </div>

    <div class="kb-navigation__dropdown--overlay__content"></div>
</div>
`;
