import docs from './ProductSummary.mdx';

export default {
    title: 'UI Components/Product/Product summary',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductSummary = () => `
<section class="ui-product-summary" aria-labelledby="product-summary-title">
    <h2 class="ui-product-summary__name" id="product-summary-title">
        Product name
        <span>which might be stupidly long and wrap to multiple lines</span>
    </h2>

    <p class="ui-product-summary__price">
        &pound;19,999
    </p>

    <p class="ui-product-summary__finance">
        &pound;300 per month
    </p>

    <p class="ui-product-summary__price--extra">
        <span>Exclude VAT</span>
        <span>Exclude road tax</span>
    </p>

    <div class="ui-product-summary__smallprint">
        Product summary smallprint... Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>

    <p class="ui-product-summary__description">
        Product summary description... Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.
    </p>
</section>
`;
ProductSummary.storyName = 'Product summary';
