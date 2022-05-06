import docs from './ProductSearchResults.mdx';
import {
    htmlFragmentFilterCheckbox,
    htmlFragmentRangeInputMultiple,
} from './_htmlFragments';
import {
    htmlFragmentProductCard,
    htmlFragmentProductCardShort,
} from '../cards/_htmlFragments';

export default {
    title: 'UI Components/Product/Product search results',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductSearchResults = () => `
<div class="ui-layout">

    <div class="ui-product-search-results">
        <h1>[static heading]</h1>

        <section
            aria-labelledby="products-search-filters"
        >
            <h2 id="products-search-filters">Modify search results</h2>

            <form
                class="ui-form ui-product-search-results__form"
                action="#"
            >

                <button
                    type="button"
                    class="ui-button ui-button--text-icon ui-button--small"
                    data-id="products-filter-button"
                    data-modal-open="modal"
                    data-modal-fetch-content="true"
                    data-modal-css-class="ui-product-search-results__modal"
                >
                    <span class="ui-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG073" />
                        </svg>
                        <span>Filter</span>
                    </span>
                </button>

                <a
                    href="#"
                    class="ui-button ui-button--text ui-button--small ui-button--toggle is-hidden-on-small is-selected has-no-condition"
                >
                    <span class="ui-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG011" />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG016" />
                        </svg>
                        <span>All Products</span>
                    </span>
                </a>

                <a
                    href="#"
                    class="ui-button ui-button--text-icon ui-button--small ui-button--toggle is-hidden-on-small is-not-selected"
                >
                    <span class="ui-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG011" />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG016" />
                        </svg>
                        <span>New</span>
                    </span>
                </a>

                <a
                    href="#"
                    class="ui-button ui-button--text-icon ui-button--small ui-button--toggle is-hidden-on-small is-not-selected"
                >
                    <span class="ui-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG011" />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG016" />
                        </svg>
                        <span>Used</span>
                    </span>
                </a>

                <div class="ui-form__field is-hidden-on-medium">
                    <label class="ui-form__label">
                        <span>Products</span>
                        <select
                            class="ui-form__select"
                            id="Condition"
                        >
                            <option value="0">All Products</option>
                            <option value="1">New</option>
                            <option value="2">Used</option>
                        </select>
                    </label>
                </div>

                <div class="ui-form__field">
                    <label class="ui-form__label">
                        <span>Sort</span>
                        <select
                            class="ui-form__select"
                            data-id="products-sort-select"
                        >
                            <option value="">Sort by &hellip;</option>
                            <option value="option1">Sort by option 1</option>
                            <option value="option2">Sort by option 2</option>
                            <option value="option3">Sort by option 3</option>
                        </select>
                    </label>
                </div>

                <button
                    type="submit"
                    class="ui-button ui-button--text ui-button--small"
                    data-id="products-sort-button"
                >
                    Go
                </button>

                <div role="region" aria-live="polite">
                    <a
                        href="#"
                        class="ui-button ui-button--text-icon ui-button--small is-selected"
                        data-id="product-compare"
                    >
                        <span class="ui-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG056" />
                            </svg>
                            <span>1 saved products</span>
                        </span>
                    </a>
                </div>

                <div
                    data-id="products-filter-content"
                    data-modal-ajax-content="modal"
                >
                    <div class="ui-product-filter ui-tabs ui-tabs--vertical">
                        <span class="ui-tabs__title">Filter 1</span>
                        <div class="ui-tabs__content">
                            <fieldset class="ui-form__fieldset ui-form__fieldset--checkbox ui-form__fieldset--checkbox-custom">
                                <legend class="ui-form__legend sr-only">
                                    Filter 1
                                </legend>
                                <div class="ui-grid">
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                </div>
                            </fieldset>
                        </div>
                        <span class="ui-tabs__title">Filter 2</span>
                        <div class="ui-tabs__content">
                            ${htmlFragmentRangeInputMultiple}
                        </div>
                        <span class="ui-tabs__title">Filter 3</span>
                        <div class="ui-tabs__content">
                            <fieldset class="ui-form__fieldset ui-form__fieldset--checkbox ui-form__fieldset--checkbox-custom">
                                <legend class="ui-form__legend sr-only">
                                    Filter 2
                                </legend>
                                <div class="ui-grid">
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div class="ui-form__buttons ui-button-group">
                        <button
                            type="submit"
                            class="ui-button ui-button--text ui-button--positive"
                            data-modal-close
                        >
                            Search
                        </button>

                        <button
                            type="reset"
                            class="ui-button ui-button--text-icon"
                        >
                            <span class="ui-button__inner ui-button__inner--reverse">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    class="ui-icon"
                                >
                                    <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                                </svg>
                                <span>Reset</span>
                            </span>
                        </button>
                    </div>
                </div>

            </form>

        </section>
    </div>

    <section aria-labelledby="products-search-results">
        <h2 id="products-search-results"><span>3</span> results</h2>
        <ul class="ui-product-card-grid ui-grid">
            <li>${htmlFragmentProductCard}</li>
            <li>${htmlFragmentProductCardShort}</li>
            <li>${htmlFragmentProductCard}</li>
        </ul>
    </section>

</div>

<div class="ui-modal__overlay is-hidden" id="modal">
    <div class="ui-modal">
        <div
            class="ui-modal__inner"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="ui-button ui-button--icon"
                data-modal-close
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="ui-icon ui-icon--medium"
                >
                    <title>Close</title>
                    <use href="${UIconfig.theme}.sprite.svg#SVG016" />
                </svg>
                <span class="sr-only">Close</span>
            </button>

            <div class="ui-modal__ajax"></div>

        </div>
    </div>
</div>
`;
