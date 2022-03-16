import docs from './Swatch.mdx';
import {
    htmlFragmentSwatch2,
    htmlFragmentSwatch3,
    htmlFragmentSwatch4,
    htmlFragmentThumb2,
    htmlFragmentThumb3,
    htmlFragmentThumb4,
} from './_htmlFragments.js';

export default {
    title: 'UI Components/Swatch',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Swatch = () => `
<section
    class="ui-swatch ui-slider"
    data-slide-autoplay="false"
    data-slide-tabbed="true"
    data-slide-no-animations="true"
    data-slide-custom-tabs="true"
>
    <h2 class="ui-swatch__title">Colour swatch</h2>
    <ul class="ui-slider__slides">
        <li class="ui-slider__slide">
            <span data-slide-tab="true">
                <img
                    class="ui-image"
                    src="/swatch/tn-orange.jpg"
                    alt=""
                    loading="lazy"
                    height="67"
                    width="67"
                />
            </span>

            <article class="ui-card ui-card--fullwidth ui-card--media-inline">
                <div class="ui-card__content">
                    <h3 class="ui-card__title">Exterior paint</h3>
                    <p>Hot zingy summer orange and here is some extra text</p>
                </div>
                <figure class="ui-card__media">
                    <img
                        class="ui-image"
                        src="/swatch/orange.png"
                        alt="orange"
                        loading="lazy"
                        height="348"
                        width="618"
                    />
                </figure>
            </article>
        </li>
        <li class="ui-slider__slide">
            ${htmlFragmentThumb2}
            ${htmlFragmentSwatch2}
        </li>
        <li class="ui-slider__slide">
            ${htmlFragmentThumb3}
            ${htmlFragmentSwatch3}
        </li>
        <li class="ui-slider__slide">
            ${htmlFragmentThumb4}
            ${htmlFragmentSwatch4}
        </li>
    </ul>
</section>
`;
