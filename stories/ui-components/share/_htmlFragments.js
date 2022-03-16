export const htmlFragmentShare = `
<div class="ui-share">
    <button
        type="button"
        class="ui-button ui-button--icon ui-share__button"
        data-share-url="https://www.google.com"
        data-share-title="google"
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="ui-icon"
        >
            <title>Share</title>
            <use href="${UIconfig.theme}.sprite.svg#SVG035" />
        </svg>
        <span class="sr-only">Share</span>
    </button>

    <div class="ui-share__fallback">
        <label class="ui-form__label">
            <span>Share [page title]</span>
            <input
                class="ui-form__input"
                type="text"
                value=""
            />
        </label>
        <button
            type="button"
            class="ui-button ui-button--text ui-button--secondary"
        >
            Copy
        </button>
    </div>
</div>
`;
