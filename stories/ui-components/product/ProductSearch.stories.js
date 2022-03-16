export default {
    title: 'UI Components/Product/Product (stock) search',
};

export const ProductSearch = () => `
<div class="ui-product-search">
    <form
        class="ui-form"
        action="#"
    >
        <fieldset class="ui-form__fieldset">
            <legend class="ui-form__legend">
                Search 10 vehicles for sale
            </legend>
            <div class="ui-grid">
                <div class="ui-form__field">
                    <label class="ui-form__label">
                        <span>Make</span>
                        <select
                            class="ui-form__select"
                        >
                            <option value="option1">All makes</option>
                            <option value="option2">Option 1</option>
                            <option value="option3">Option 2</option>
                        </select>
                    </label>
                </div>
                <div class="ui-form__field">
                    <label class="ui-form__label">
                        <span>Model</span>
                        <select
                            class="ui-form__select"
                        >
                            <option value="option1">All models</option>
                            <option value="option2">Option 1</option>
                            <option value="option3">Option 2</option>
                        </select>
                    </label>
                </div>
                <div class="ui-form__buttons ui-button-group">
                    <button
                        type="button"
                        class="ui-button ui-button--text-icon ui-button--positive"
                    >
                        <span class="ui-button__inner ui-button__inner--reverse">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG012" />
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
