import docs from './Product.mdx';
import {
    htmlFragmentProductCard,
    htmlFragmentProductCardShort,
    htmlFragmentProductOverviewCard,
} from './_htmlFragments';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Cards/Product',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductCard = () => `
<article class="ui-card ui-product-card">
    <figure
        class="ui-card__media ui-responsive-media"
        style="--themeMediaAspectRatio: 4/3; padding-top: 75%;"
    >
        <img
            class="ui-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>
    <div class="ui-toolbar ui-toolbar--product">
        <div class="ui-button-group">
            <a
                href="https://www.google.com"
                class="ui-button ui-button--text-icon"
            >
                <span class="ui-button__inner ">
                    <svg aria-hidden="true" focusable="false" class="ui-icon">
                        <use href="${UIconfig.theme}.sprite.svg#SVG007"></use>
                    </svg>
                    <span>Location</span>
                </span>
            </a>
            <a
                href="https://www.google.com"
                class="ui-button ui-button--icon ui-toolbar--product__compare"
            >
                    <svg aria-hidden="true" focusable="false" class="ui-icon">
                        <title>Compare</title>
                        <use href="${UIconfig.theme}.sprite.svg#SVG056"></use>
                    </svg>
                    <span class="sr-only">Compare</span>
            </a>
            ${htmlFragmentShare}
        </div>
    </div>
    <div class="ui-card__content">
        <h2 class="ui-card__title">
            <a href="/">
                Product name
                <span>which might be stupidly long and wrap to multiple lines</span>
            </a>
        </h2>

        <div class="ui-product-card__specs">
            <span>
                2020
            </span>
            <span>
                Manual
            </span>
            <span>
                15000 KM
            </span>
            <span>
                Petrol
            </span>
        </div>

        <p class="ui-product-card__price">&pound;19,999</p>
        <p class="ui-product-card__price--discount">
            &pound;19,999
        </p>
        <p class="ui-product-card__price--was">
            <del>Was &pound;21,999</del>
        </p>
        <p class="ui-product-card__price--text">From &pound;199 per month</p>
        <small class="ui-product-card__legal ui-product-card__legal--extra">
            <span>Excluding road tax</span>
            <span>Excluding VAT</span>
        </small>
        <small class="ui-product-card__legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</small>

        <table class="ui-table ui-table--striped ui-product-card__table">
            <caption class="sr-only">Meaningful <code>&lt;caption&gt;</code></caption>
            <tbody>
                <tr>
                    <th scope="row">Make</th>
                    <td>Ford</td>
                </tr>
                <tr>
                    <th scope="row">Model</th>
                    <td>Fiesta</td>
                </tr>
                <tr>
                    <th scope="row">Variant</th>
                    <td>Titanium</td>
                </tr>
                <tr>
                    <th scope="row">Mileage</th>
                    <td>15000 KM</td>
                </tr>
                <tr>
                    <th scope="row">Transmission</th>
                    <td>Manual</td>
                </tr>
            </tbody>
        </table>
    </div>
</article>
`;
ProductCard.storyName = 'Product card';

export const ProductCardGrid = () => `
<ul class="ui-grid ui-product-card-grid ">
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCardShort}</li>
    <li>${htmlFragmentProductCard}</li>
</ul>
`;
ProductCardGrid.storyName = 'In a grid';

export const ProductOverviewCard = () => `
<article class="ui-card ui-product-card ui-product-card--overview">
    <div class="ui-card__content">
        <a class="ui-product-card__block-link" href="/">
            <h2 class="ui-card__title">Product name</h2>
            <p>Explore the product name</p>
            <p>From &pound;14,999</p>
        </a>

    </div>
    <figure class="ui-card__media">
        <img
            class="ui-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>
    <div class="ui-card__actions ui-button-group">
        <a
            href="https://www.google.com"
            class="ui-button ui-button--text ui-button--primary"
        >
            Enquire
        </a>
    </div>
</article>
`;
ProductOverviewCard.storyName = 'Product overview card';

export const ProductOverviewCardGrid = () => `
<ul class="ui-grid ui-product-card-grid">
    <li>${htmlFragmentProductOverviewCard}</li>
    <li>${htmlFragmentProductOverviewCard}</li>
    <li>${htmlFragmentProductOverviewCard}</li>
</ul>
`;
ProductOverviewCardGrid.storyName = 'Product overview card in a grid';
