export default {
    title: 'UI Components/Product/Product (stock) search',
};

export const ProductSearch = () => `
<div class="kb-product-search">
    <form
        class="kb-form"
        action="#"
    >
        <fieldset class="kb-form__fieldset">
            <legend class="kb-form__legend">
                Search 10 vehicles for sale
            </legend>
            <div class="kb-grid">
                <div class="kb-form__field">
                    <label class="kb-form__label">
                        <span>Make</span>
                        <select
                            class="kb-form__select"
                        >
                            <option value="option1">All makes</option>
                            <option value="option2">Option 1</option>
                            <option value="option3">Option 2</option>
                        </select>
                    </label>
                </div>
                <div class="kb-form__field">
                    <label class="kb-form__label">
                        <span>Model</span>
                        <select
                            class="kb-form__select"
                        >
                            <option value="option1">All models</option>
                            <option value="option2">Option 1</option>
                            <option value="option3">Option 2</option>
                        </select>
                    </label>
                </div>
                <div class="kb-form__buttons kb-button-group">
                    <button
                        type="button"
                        class="kb-button kb-button--text-icon kb-button--positive"
                    >
                        <span class="kb-button__inner kb-button__inner--reverse">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                            </svg>
                            <span>Search</span>
                        </span>
                    </button>
                </div>
            </div>
        </fieldset>
    </form>
</div>
`;
ProductSearch.storyName = 'Search form';
