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
    class="kb-swatch kb-slider"
    data-slide-autoplay="false"
    data-slide-tabbed="true"
    data-slide-no-animations="true"
    data-slide-custom-tabs="true"
>
    <h2 class="kb-swatch__title">Colour swatch</h2>
    <ul class="kb-slider__slides">
        <li class="kb-slider__slide">
            <span data-slide-tab="true">
                <img
                    class="kb-image"
                    src="/swatch/tn-orange.jpg"
                    alt=""
                    loading="lazy"
                    height="67"
                    width="67"
                />
            </span>

            <article class="kb-card kb-card--fullwidth kb-card--media-inline">
                <div class="kb-card__content">
                    <h3 class="kb-card__title">Exterior paint</h3>
                    <p>Hot zingy summer orange and here is some extra text</p>
                </div>
                <figure class="kb-card__media">
                    <img
                        class="kb-image"
                        src="/swatch/orange.png"
                        alt="orange"
                        loading="lazy"
                        height="348"
                        width="618"
                    />
                </figure>
            </article>
        </li>
        <li class="kb-slider__slide">
            ${htmlFragmentThumb2}
            ${htmlFragmentSwatch2}
        </li>
        <li class="kb-slider__slide">
            ${htmlFragmentThumb3}
            ${htmlFragmentSwatch3}
        </li>
        <li class="kb-slider__slide">
            ${htmlFragmentThumb4}
            ${htmlFragmentSwatch4}
        </li>
    </ul>
</section>
`;
