import docs from './ProductFilter.mdx';
import {
    htmlFragmentProductFilterCard,
    htmlFragmentFilterCheckbox,
} from './_htmlFragments';

export default {
    title: 'UI Components/Product/Product filter',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductFilter = () => `
<div class="ui-product-filter ui-tabs">
    <span class="ui-tabs__title">Filter 1</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>
                <a class="ui-card ui-product-card ui-product-card--filter" href="/">
                    <figure class="ui-card__media">
                        <img
                            class="ui-image"
                            src="https://via.placeholder.com/200x113.png"
                            alt=""
                            loading="lazy"
                            height="113"
                            width="200"
                        />
                    </figure>
                    <div class="ui-card__content">
                        <p class="ui-card__title">Product name</p>
                        <p class="ui-product-card__price">From &pound;19.999</p>
                    </div>
                </a>
            </li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="ui-tabs__title">Filter 2</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="ui-tabs__title">Filter 3</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
</div>
`;
ProductFilter.storyName = 'New product filter';

export const ProductFilterAlt = () => `
<div class="ui-product-filter ui-product-filter--alt ui-tabs" data-open="false">
    <span class="ui-tabs__title">Filter 1</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>
                <a class="ui-card ui-product-card ui-product-card--filter" href="/">
                    <figure class="ui-card__media">
                        <img
                            class="ui-image"
                            src="https://via.placeholder.com/200x113.png"
                            alt=""
                            loading="lazy"
                            height="113"
                            width="200"
                        />
                    </figure>
                    <div class="ui-card__content">
                        <p class="ui-card__title">Product name</p>
                        <p class="ui-product-card__price">From &pound;19.999</p>
                    </div>
                </a>
            </li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="ui-tabs__title">Filter 2</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="ui-tabs__title">Filter 3</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
</div>
`;
ProductFilterAlt.storyName = 'New product filter (alternate)';

export const ProductFilterVertical = () => `
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
        <fieldset class="ui-form__fieldset ui-form__fieldset--checkbox ui-form__fieldset--checkbox-custom">
            <legend class="ui-form__legend sr-only">
                Filter 2
            </legend>
            <div class="ui-grid">
                ${htmlFragmentFilterCheckbox}
                ${htmlFragmentFilterCheckbox}
            </div>
        </fieldset>
    </div>
    <span class="ui-tabs__title">Filter 3</span>
    <div class="ui-tabs__content">
        <fieldset class="ui-form__fieldset ui-form__fieldset--checkbox ui-form__fieldset--checkbox-custom">
            <legend class="ui-form__legend sr-only">
                Filter 3
            </legend>
            <div class="ui-grid">
                ${htmlFragmentFilterCheckbox}
                ${htmlFragmentFilterCheckbox}
                ${htmlFragmentFilterCheckbox}
            </div>
        </fieldset>
    </div>
</div>
`;
ProductFilterVertical.storyName = 'Product (stock) filter vertical';
