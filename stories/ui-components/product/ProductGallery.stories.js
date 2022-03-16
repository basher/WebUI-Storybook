import docs from './ProductGallery.mdx';
import { htmlFragmentFigureGallery } from '../gallery/_htmlFragment';

export default {
    title: 'UI Components/Product/Product gallery',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductGallery = () => `
<section
    class="ui-product-gallery"
    aria-labelledby="product-gallery-title"
>
    <h2
        class="ui-product-gallery__title"
        id="product-gallery-title"
    >
        Product gallery
    </h2>

    <div class="ui-tabs ui-gallery__tabs">
        <h3 class="ui-tabs__title">Gallery 1</h3>
        <div class="ui-tabs__content">
            <ul class="ui-gallery ui-grid">
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
            </ul>
        </div>
        <h3 class="ui-tabs__title">Gallery 2</h3>
        <div class="ui-tabs__content">
            <ul class="ui-gallery ui-grid">
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
            </ul>
        </div>
    </div>
</section>
`;
ProductGallery.storyName = 'Product gallery';
