export default {
    title: 'UI Components/Search',
};

export const Search = () => `
<form
    id="site-search"
    class="ui-header__search ui-form"
    action="#"
    role="search"
>
    <svg
        aria-hidden="true"
        focusable="false"
        class="ui-icon"
    >
        <use href="${UIconfig.theme}.sprite.svg#SVG001" />
    </svg>
    <div class="ui-form__field">
        <label class="ui-form__label">
            <span>Search</span>
            <input
                class="ui-form__input"
                type="search"
                placeholder="Search our vehicles"
            />
        </label>
    </div>
    <button
        type="submit"
        class="ui-button ui-button--text"
    >
        Go
    </button>
</form>
`;
