import docs from './ResponsiveMedia.mdx';

export default {
    title: 'UI Components/Responsive media',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ResponsiveIframe = () => `
<div
    class="kb-responsive-media"
    style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39951.90126657198!2d-1.1423310291663946!3d51.25602297609176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487404c180a05953%3A0x682dc7216eb9702a!2sBasingstoke!5e0!3m2!1sen!2suk!4v1598600998938!5m2!1sen!2suk" frameborder="0" allowfullscreen aria-hidden="false" tabindex="0" title="[meaningful title]"></iframe>
</div>
`;
ResponsiveIframe.storyName = 'Iframe';

export const ResponsiveVideo = () => `
<div
    class="kb-responsive-media"
    style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
>
    <iframe src="https://www.youtube.com/embed/PEkrL0tY1Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
`;
ResponsiveVideo.storyName = 'Video';
