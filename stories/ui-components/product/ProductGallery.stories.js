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
    class="kb-product-gallery"
    aria-labelledby="product-gallery-title"
>
    <h2
        class="kb-product-gallery__title"
        id="product-gallery-title"
    >
        Product gallery
    </h2>

    <div class="kb-tabs kb-gallery__tabs">
        <h3 class="kb-tabs__title">Gallery 1</h3>
        <div class="kb-tabs__content">
            <ul class="kb-gallery kb-grid">
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
            </ul>
        </div>
        <h3 class="kb-tabs__title">Gallery 2</h3>
        <div class="kb-tabs__content">
            <ul class="kb-gallery kb-grid">
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
                <li>${htmlFragmentFigureGallery}</li>
            </ul>
        </div>
    </div>
</section>
`;
ProductGallery.storyName = 'Product gallery';
