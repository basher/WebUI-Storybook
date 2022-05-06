import docs from './QuickView.mdx';
import {
    htmlFragmentProductCard,
    htmlFragmentProductCardShort,
} from '../cards/_htmlFragments';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Quick view',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const QuickView = () => `
<article class="ui-quick-view">
    <div class="ui-grid--asymmetric">
        <div
            class="ui-quick-view__media ui-responsive-media"
            style="--themeMediaAspectRatio: 3/2; padding-top: 66.667%;"
        >
            <iframe src="https://www.youtube.com/embed/U94wDbctu1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="ui-quick-view__content">

            <div class="ui-toolbar ui-toolbar--product">
                <div class="ui-button-group">
                    <a
                        href="https://www.google.com"
                        class="ui-button ui-button--text-icon"
                    >
                        <span class="ui-button__inner ">
                            <svg aria-hidden="true" focusable="false" class="ui-icon">
                                <use href="whitelabel.sprite.svg#SVG007"></use>
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
                                <use href="whitelabel.sprite.svg#SVG056"></use>
                            </svg>
                            <span class="sr-only">Compare</span>
                    </a>
                    ${htmlFragmentShare}
                </div>
            </div>

            <div class="ui-product-summary">
                <h2 class="ui-product-summary__name">
                    Product name
                    <span>which might be stupidly long and wrap to multiple lines</span>
                </h2>

                <div class="ui-product-specs">
                    <ul class="ui-product-specs__list">
                        <li class="ui-product-specs__item">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG041" />
                            </svg>
                            <span>5.0 V8</span>
                            <span>Engine</span>
                        </li>

                        <li class="ui-product-specs__item">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG050" />
                            </svg>
                            <span>5.7 Seconds</span>
                            <span>0-60 mph</span>
                        </li>

                        <li class="ui-product-specs__item">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG051" />
                            </svg>
                            <span>20"</span>
                            <span>Wheels</span>
                        </li>
                    </ul>
                </div>

                <p class="ui-product-summary__price">
                    &pound;19,999
                </p>

                <p class="ui-product-summary__finance">
                    &pound;300 per month
                </p>

                <p class="ui-product-summary__price--extra">
                    <span>Exclude VAT</span>
                </p>

                <div class="ui-product-summary__smallprint">
                    Product summary smallprint... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>

            <div class="ui-button-group">
                <a
                    href="#"
                    class="ui-button ui-button--text-icon ui-button--secondary"
                >
                    <span class="ui-button__inner ui-button__inner--reverse">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                        </svg>
                        <span>View full details</span>
                    </span>
                </a>
            </div>

        </div>
    </div>
</article>
`;
QuickView.storyName = 'Quick view item';

export const QuickViewGrid = () => `
<ul class="ui-product-card-grid ui-quick-view-grid ui-grid">
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCardShort}</li>
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCardShort}</li>
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCard}</li>
    <li>${htmlFragmentProductCard}</li>
</ul>
`;
QuickViewGrid.storyName = 'Quick view grid';
