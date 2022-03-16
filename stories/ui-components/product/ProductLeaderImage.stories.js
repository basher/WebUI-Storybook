import docs from './ProductLeaderImage.mdx';

export default {
    title: 'UI Components/Product/Product leader image',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ProductLeaderImage = () => `
<div class="kb-product-leader-image">
    <img
        class="kb-image"
        src="https://via.placeholder.com/1024x655.png"
        srcset="https://via.placeholder.com/480x307.png 480w,
                https://via.placeholder.com/768x492.png 768w,
                https://via.placeholder.com/1024x655.png 1024w"
        sizes="(min-width: 768px) 1024px,
                (min-width: 480px) 768px,
                100vw"
        alt=""
        loading="lazy"
        height="655"
        width="1024"
    />
    <img
        class="kb-image"
        src="https://via.placeholder.com/1024x655.png"
        srcset="https://via.placeholder.com/480x307.png 480w,
                https://via.placeholder.com/768x492.png 768w,
                https://via.placeholder.com/1024x655.png 1024w"
        sizes="(min-width: 768px) 1024px,
                (min-width: 480px) 768px,
                100vw"
        alt=""
        loading="lazy"
        height="655"
        width="1024"
    />
</div>
`;
ProductLeaderImage.storyName = '2 images';

export const ProductLeaderImageSingle = () => `
<div class="kb-product-leader-image kb-product-leader-image--single-image">
    <img
        class="kb-image"
        src="https://via.placeholder.com/1024x655.png"
        srcset="https://via.placeholder.com/768x492.png 768w,
                https://via.placeholder.com/1024x655.png 1024w,
                https://via.placeholder.com/2000x1280.png 2000w"
        sizes="(min-width: 1024px) 2000px,
                (min-width: 768px) 1024px,
                100vw"
        alt="[banner alt]"
        loading="lazy"
        height="1280"
        width="2000"
    />
</div>
`;
ProductLeaderImageSingle.storyName = '1 image';
