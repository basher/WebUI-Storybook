export const htmlFragmentButtons = `
<div class="kb-form__buttons kb-button-group">
    <button
        type="submit"
        class="kb-button kb-button--text kb-button--positive"
    >
        Submit
    </button>
    <button
        type="reset"
        class="kb-button kb-button--text"
    >
        Reset
    </button>
</div>
`;

export const htmlFragmentTextInputRequired = `
<div class="kb-form__field">
    <label class="kb-form__label">
        <span>Text input</span>
        <input
            class="kb-form__input"
            type="text"
            placeholder="placeholder..."
            required
        />
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon kb-form__icon--error"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG074" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG075" />
        </svg>
        <span
            class="kb-form__error"
            id="error1-text"
        >
            Error 1 text
        </span>
    </label>
</div>
`;

export const htmlFragmentSelectRequired = `
<div class="kb-form__field">
    <label class="kb-form__label">
        <span>Select</span>
        <select
            class="kb-form__select"
            required
        >
            <option></option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon kb-form__icon--error"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG074" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG075" />
        </svg>
        <span
            class="kb-form__error"
            id="error2-text"
        >
            Error 2 text
        </span>
    </label>
</div>
`;

export const htmlFragmentEmailInputRequired = `
<div class="kb-form__field">
    <label class="kb-form__label">
        <span>Email input</span>
        <input
            class="kb-form__input"
            type="email"
            autocomplete="email"
            placeholder="email@domain.com"
            required
        />
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon kb-form__icon--error"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG074" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG075" />
        </svg>
        <span
            class="kb-form__error"
            id="error3-text"
        >
            Error 3 text
        </span>
    </label>
</div>
`;

export const htmlFragmentTelInputRequired = `
<div class="kb-form__field">
    <label class="kb-form__label">
        <span>Tel input</span>
        <input
            class="kb-form__input"
            type="tel"
            autocomplete="tel"
            pattern="^[0-9-+\s()]*$"
            placeholder="tel number, including +-() and spaces"
            required
        />
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon kb-form__icon--error"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG074" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG075" />
        </svg>
        <span
            class="kb-form__error"
            id="error4-text"
        >
            Error 4 text
        </span>
    </label>
</div>
`;

export const htmlFragmentTextareaRequired = `
<div class="kb-form__field">
    <label class="kb-form__label">
        <span>Textarea</span>
        <textarea
            class="kb-form__textarea"
            cols="30"
            rows="6"
            required
        ></textarea>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon kb-form__icon--error"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG074" />
        </svg>
        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon kb-form__icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG075" />
        </svg>
        <span
            class="kb-form__error"
            id="error5-text"
        >
            Error 5 text
        </span>
    </label>
</div>
`;
