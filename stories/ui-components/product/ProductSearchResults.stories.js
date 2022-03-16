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
    title: 'UI Components/Product/Product (stock) search results',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductSearchResults = () => `
<div class="kb-layout">

    <div class="kb-product-search-results">
        <h1>[static heading]</h1>

        <section
            aria-labelledby="products-search-filters"
        >
            <h2 id="products-search-filters">Modify search results</h2>

            <form
                class="kb-form kb-product-search-results__form"
                action="#"
            >

                <button
                    type="button"
                    class="kb-button kb-button--text-icon kb-button--small"
                    data-id="products-filter-button"
                    data-modal-open="modal"
                    data-modal-fetch-content="true"
                    data-modal-css-class="kb-product-search-results__modal"
                >
                    <span class="kb-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG073" />
                        </svg>
                        <span>Filter</span>
                    </span>
                </button>

                <a
                    href="#"
                    class="kb-button kb-button--text kb-button--small kb-button--toggle is-hidden-on-small is-selected has-no-condition"
                >
                    <span class="kb-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG011" />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG016" />
                        </svg>
                        <span>All Stock</span>
                    </span>
                </a>

                <a
                    href="#"
                    class="kb-button kb-button--text-icon kb-button--small kb-button--toggle is-hidden-on-small is-not-selected"
                >
                    <span class="kb-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG011" />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG016" />
                        </svg>
                        <span>New</span>
                    </span>
                </a>

                <a
                    href="#"
                    class="kb-button kb-button--text-icon kb-button--small kb-button--toggle is-hidden-on-small is-not-selected"
                >
                    <span class="kb-button__inner">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG011" />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG016" />
                        </svg>
                        <span>Used</span>
                    </span>
                </a>

                <div class="kb-form__field is-hidden-on-medium">
                    <label class="kb-form__label">
                        <span>Stock</span>
                        <select
                            class="kb-form__select"
                            id="Condition"
                        >
                            <option value="0">All Stock</option>
                            <option value="1">New</option>
                            <option value="2">Used</option>
                        </select>
                    </label>
                </div>

                <div class="kb-form__field">
                    <label class="kb-form__label">
                        <span>Sort</span>
                        <select
                            class="kb-form__select"
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
                    class="kb-button kb-button--text kb-button--small"
                    data-id="products-sort-button"
                >
                    Go
                </button>

                <div role="region" aria-live="polite">
                    <a
                        href="#"
                        class="kb-button kb-button--text-icon kb-button--small is-selected"
                        data-id="stock-compare"
                    >
                        <span class="kb-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG056" />
                            </svg>
                            <span>1 saved products</span>
                        </span>
                    </a>
                </div>

                <div
                    data-id="products-filter-content"
                    data-modal-ajax-content="modal"
                >
                    <div class="kb-product-filter kb-tabs kb-tabs--vertical">
                        <span class="kb-tabs__title">Filter 1</span>
                        <div class="kb-tabs__content">
                            <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox kb-form__fieldset--checkbox-custom">
                                <legend class="kb-form__legend sr-only">
                                    Filter 1
                                </legend>
                                <div class="kb-grid">
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                </div>
                            </fieldset>
                        </div>
                        <span class="kb-tabs__title">Filter 2</span>
                        <div class="kb-tabs__content">
                            ${htmlFragmentRangeInputMultiple}
                        </div>
                        <span class="kb-tabs__title">Filter 3</span>
                        <div class="kb-tabs__content">
                            <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox kb-form__fieldset--checkbox-custom">
                                <legend class="kb-form__legend sr-only">
                                    Filter 2
                                </legend>
                                <div class="kb-grid">
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                    ${htmlFragmentFilterCheckbox}
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div class="kb-form__buttons kb-button-group">
                        <button
                            type="submit"
                            class="kb-button kb-button--text kb-button--positive"
                            data-modal-close
                        >
                            Search
                        </button>

                        <button
                            type="reset"
                            class="kb-button kb-button--text-icon"
                        >
                            <span class="kb-button__inner kb-button__inner--reverse">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    class="kb-icon"
                                >
                                    <use href="${KBconfig.theme}.sprite.svg#SVG012" />
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
        <ul class="kb-product-card-grid kb-grid">
            <li>${htmlFragmentProductCard}</li>
            <li>${htmlFragmentProductCardShort}</li>
            <li>${htmlFragmentProductCard}</li>
        </ul>
    </section>

</div>

<div class="kb-modal__overlay is-hidden" id="modal">
    <div class="kb-modal">
        <div
            class="kb-modal__inner"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="kb-button kb-button--icon"
                data-modal-close
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="kb-icon kb-icon--medium"
                >
                    <title>Close</title>
                    <use href="${KBconfig.theme}.sprite.svg#SVG016" />
                </svg>
                <span class="sr-only">Close</span>
            </button>

            <div class="kb-modal__ajax"></div>

        </div>
    </div>
</div>
`;
