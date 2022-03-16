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
<article class="kb-quick-view">
    <div class="kb-grid--asymmetric">
        <div
            class="kb-quick-view__media kb-responsive-media"
            style="--themeMediaAspectRatio: 3/2; padding-top: 66.667%;"
        >
            <iframe src="https://www.youtube.com/embed/PEkrL0tY1Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="kb-quick-view__content">

            <div class="kb-toolbar kb-toolbar--stock">
                <div class="kb-button-group">
                    <a
                        href="https://www.google.com"
                        class="kb-button kb-button--text-icon"
                    >
                        <span class="kb-button__inner ">
                            <svg aria-hidden="true" focusable="false" class="kb-icon">
                                <use href="whitelabel.sprite.svg#SVG007"></use>
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
                                <use href="whitelabel.sprite.svg#SVG056"></use>
                            </svg>
                            <span class="sr-only">Compare</span>
                    </a>
                    ${htmlFragmentShare}
                </div>
            </div>

            <div class="kb-product-summary">
                <h2 class="kb-product-summary__name">
                    Product name
                    <span>which might be stupidly long and wrap to multiple lines</span>
                </h2>

                <div class="kb-product-specs">
                    <ul class="kb-product-specs__list">
                        <li class="kb-product-specs__item">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG041" />
                            </svg>
                            <span>5.0 V8</span>
                            <span>Engine</span>
                        </li>

                        <li class="kb-product-specs__item">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG050" />
                            </svg>
                            <span>5.7 Seconds</span>
                            <span>0-60 mph</span>
                        </li>

                        <li class="kb-product-specs__item">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG051" />
                            </svg>
                            <span>20"</span>
                            <span>Wheels</span>
                        </li>
                    </ul>
                </div>

                <p class="kb-product-summary__price">
                    &pound;19,999
                </p>

                <p class="kb-product-summary__finance">
                    &pound;300 per month
                </p>

                <p class="kb-product-summary__price--extra">
                    <span>Exclude VAT</span>
                </p>

                <div class="kb-product-summary__smallprint">
                    Product summary smallprint... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>

            <div class="kb-button-group">
                <a
                    href="#"
                    class="kb-button kb-button--text-icon kb-button--secondary"
                >
                    <span class="kb-button__inner kb-button__inner--reverse">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <use href="${KBconfig.theme}.sprite.svg#SVG012" />
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
<ul class="kb-product-card-grid kb-quick-view-grid kb-grid">
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
