import docs from './Images.mdx';

export default {
    title: 'UI Components/Images',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ResponsiveImage = () => `
<img
    class="ui-image"
    src="https://via.placeholder.com/1024x655.png"
    srcset="https://via.placeholder.com/480x307.png 480w,
            https://via.placeholder.com/768x492.png 768w,
            https://via.placeholder.com/1024x655.png 1024w,
            https://via.placeholder.com/2000x1280.png 2000w"
    sizes="(min-width: 1024px) 2000px,
            (min-width: 768px) 1024px,
            (min-width: 480px) 768px,
            100vw"
    alt="[alt]"
    loading="lazy"
    height="1280"
    width="2000"
/>
`;
ResponsiveImage.storyName = 'Responsive images';

export const FixedSizeImage = () => `
<img
    class="ui-image"
    src="https://via.placeholder.com/400x300.png"
    alt="[alt]"
    loading="lazy"
    height="300"
    width="400"
/>
`;
FixedSizeImage.storyName = 'Fixed size images';
