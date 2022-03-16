export const htmlFragmentShare = `
<div class="kb-share">
    <button
        type="button"
        class="kb-button kb-button--icon kb-share__button"
        data-share-url="https://www.google.com"
        data-share-title="google"
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon"
        >
            <title>Share</title>
            <use href="${KBconfig.theme}.sprite.svg#SVG035" />
        </svg>
        <span class="sr-only">Share</span>
    </button>

    <div class="kb-share__fallback">
        <label class="kb-form__label">
            <span>Share [page title]</span>
            <input
                class="kb-form__input"
                type="text"
                value=""
            />
        </label>
        <button
            type="button"
            class="kb-button kb-button--text kb-button--secondary"
        >
            Copy
        </button>
    </div>
</div>
`;
