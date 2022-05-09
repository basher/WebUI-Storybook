import docs from './ProductSpecs.mdx';

export default {
    title: 'UI Components/Product/Product specs',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductSpecs = () => `
<section
    class="ui-product-specs"
    aria-labelledby="product-specs"
>
    <h2
        class="sr-only"
        id="product-specs"
    >
        Specifications
    </h2>

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
</section>
`;
ProductSpecs.storyName = 'Product specs';
