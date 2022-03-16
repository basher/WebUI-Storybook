import docs from './Product.mdx';
import {
    htmlFragmentProductCard,
    htmlFragmentProductCardShort,
    htmlFragmentProductOverviewCard,
} from './_htmlFragments';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Cards/Product & stock',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductCard = () => `
<article class="kb-card kb-product-card">
    <figure
        class="kb-card__media kb-responsive-media"
        style="--themeMediaAspectRatio: 4/3; padding-top: 75%;"
    >
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>
    <div class="kb-toolbar kb-toolbar--stock">
        <div class="kb-button-group">
            <a
                href="https://www.google.com"
                class="kb-button kb-button--text-icon"
            >
                <span class="kb-button__inner ">
                    <svg aria-hidden="true" focusable="false" class="kb-icon">
                        <use href="${KBconfig.theme}.sprite.svg#SVG007"></use>
                    </svg>
                    <span>Location</span>
                </span>
            </a>
            <a
                href="https://www.google.com"
                class="kb-button kb-button--icon kb-toolbar--stock__compare"
            >
                    <svg aria-hidden="true" focusable="false" class="kb-icon">
                        <title>Compare</title>
                        <use href="${KBconfig.theme}.sprite.svg#SVG056"></use>
                    </svg>
                    <span class="sr-only">Compare</span>
            </a>
            ${htmlFragmentShare}
        </div>
    </div>
    <div class="kb-card__content">
        <h2 class="kb-card__title">
            <a href="/">
                Product name
                <span>which might be stupidly long and wrap to multiple lines</span>
            </a>
        </h2>

        <div class="kb-product-card__specs">
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

        <p class="kb-product-card__price">&pound;19,999</p>
        <p class="kb-product-card__price--discount">
            &pound;19,999
        </p>
        <p class="kb-product-card__price--was">
            <del>Was &pound;21,999</del>
        </p>
        <p class="kb-product-card__price--text">From &pound;199 per month</p>
        <small class="kb-product-card__legal kb-product-card__legal--extra">
            <span>Excluding road tax</span>
            <span>Excluding VAT</span>
        </small>
        <small class="kb-product-card__legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</small>

        <table class="kb-table kb-table--striped kb-product-card__table">
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
ProductCard.storyName = 'Product (stock) card';

export const ProductCardGrid = () => `
<ul class="kb-grid kb-product-card-grid ">
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCardShort}</li>
    <li>${htmlFragmentProductCard}</li>
</ul>
`;
ProductCardGrid.storyName = 'In a grid';

export const ProductOverviewCard = () => `
<article class="kb-card kb-product-card kb-product-card--overview">
    <div class="kb-card__content">
        <a class="kb-product-card__block-link" href="/">
            <h2 class="kb-card__title">Product name</h2>
            <p>Explore the product name</p>
            <p>From &pound;14,999</p>
        </a>

    </div>
    <figure class="kb-card__media">
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>
    <div class="kb-card__actions kb-button-group">
        <a
            href="https://www.google.com"
            class="kb-button kb-button--text kb-button--primary"
        >
            Test drive
        </a>
        <a
            href="https://www.google.com"
            class="kb-button kb-button--text kb-button--primary"
        >
            Enquire
        </a>
    </div>
</article>
`;
ProductOverviewCard.storyName = 'New product overview card';

export const ProductOverviewCardGrid = () => `
<ul class="kb-grid kb-product-card-grid">
    <li>${htmlFragmentProductOverviewCard}</li>
    <li>${htmlFragmentProductOverviewCard}</li>
    <li>${htmlFragmentProductOverviewCard}</li>
</ul>
`;
ProductOverviewCardGrid.storyName = 'New product overview card in a grid';
