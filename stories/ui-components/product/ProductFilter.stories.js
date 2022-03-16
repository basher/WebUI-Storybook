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
<div class="kb-product-filter kb-tabs">
    <span class="kb-tabs__title">Filter 1</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
            <li>
                <a class="kb-card kb-product-card kb-product-card--filter" href="/">
                    <figure class="kb-card__media">
                        <img
                            class="kb-image"
                            src="https://via.placeholder.com/200x113.png"
                            alt=""
                            loading="lazy"
                            height="113"
                            width="200"
                        />
                    </figure>
                    <div class="kb-card__content">
                        <p class="kb-card__title">Product name</p>
                        <p class="kb-product-card__price">From &pound;19.999</p>
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
    <span class="kb-tabs__title">Filter 2</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="kb-tabs__title">Filter 3</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
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
<div class="kb-product-filter kb-product-filter--alt kb-tabs" data-open="false">
    <span class="kb-tabs__title">Filter 1</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
            <li>
                <a class="kb-card kb-product-card kb-product-card--filter" href="/">
                    <figure class="kb-card__media">
                        <img
                            class="kb-image"
                            src="https://via.placeholder.com/200x113.png"
                            alt=""
                            loading="lazy"
                            height="113"
                            width="200"
                        />
                    </figure>
                    <div class="kb-card__content">
                        <p class="kb-card__title">Product name</p>
                        <p class="kb-product-card__price">From &pound;19.999</p>
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
    <span class="kb-tabs__title">Filter 2</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="kb-tabs__title">Filter 3</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
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
        <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox kb-form__fieldset--checkbox-custom">
            <legend class="kb-form__legend sr-only">
                Filter 2
            </legend>
            <div class="kb-grid">
                ${htmlFragmentFilterCheckbox}
                ${htmlFragmentFilterCheckbox}
            </div>
        </fieldset>
    </div>
    <span class="kb-tabs__title">Filter 3</span>
    <div class="kb-tabs__content">
        <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox kb-form__fieldset--checkbox-custom">
            <legend class="kb-form__legend sr-only">
                Filter 3
            </legend>
            <div class="kb-grid">
                ${htmlFragmentFilterCheckbox}
                ${htmlFragmentFilterCheckbox}
                ${htmlFragmentFilterCheckbox}
            </div>
        </fieldset>
    </div>
</div>
`;
ProductFilterVertical.storyName = 'Product (stock) filter vertical';
