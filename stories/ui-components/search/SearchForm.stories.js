export default {
    title: 'UI Components/Search',
};

export const Search = () => `
<form
    id="site-search"
    class="kb-header__search kb-form"
    action="#"
    role="search"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="kb-icon"
    >
        <use href="${KBconfig.theme}.sprite.svg#SVG001" />
    </svg>
    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Search</span>
            <input
                class="kb-form__input"
                type="search"
                placeholder="Search our vehicles"
            />
        </label>
    </div>
    <button
        type="submit"
        class="kb-button kb-button--text"
    >
        Go
    </button>
</form>
`;
