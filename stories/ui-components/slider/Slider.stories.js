import docs from './Slider.mdx';

export default {
    title: 'UI Components/Slider (or carousel)',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        autoPlay: { control: 'boolean' },
        showTabControls: { control: 'boolean' },
        stopAnimations: { control: 'boolean' },
        slideCount: {
            control: {
                type: 'select',
                options: ['2', '3', '4'],
            },
        },
        slideWidth: {
            control: {
                type: 'select',
                options: ['40%', '60%', '400px'],
            },
        },
    },
};

const style = `
<style>
    @media (prefers-color-scheme: dark) {
        .demo {
            color: #222;
        }
    }
    .demo {
        border: 4px solid;
        height: 100%;
        padding: 1rem;
    }
    .ui-slider__slide:nth-child(odd) .demo {
        border-color: #27a9e1;
    }
</style>
`;

export const Slider = (args) => `
${style}
<section
    class="ui-slider"
    aria-label="[meaningful label for slider]"
    data-slide-autoplay="${args.autoPlay}"
    ${args.showTabControls === true ? 'data-slide-tabbed="true"' : ''}
    data-slide-no-animations="${args.stopAnimations}"
    data-slide-count="${args.slideCount}"
    data-slide-width="${args.slideWidth}"
>
    <ul class="ui-slider__slides">
        <li class="ui-slider__slide">
            <div class="demo">
                <p>Slide 1 content...</p>
                <p>Component inside slide should dictate its own visual styles such as color | height | padding | etc.</p>
                <p>Test <a href="/">internal link</a> is focusable.</p>
            </div>
        </li>
        <li class="ui-slider__slide">
            <div class="demo">
                <p>Slide 2 content...</p>
                <p>More content...</p>
                <p>More content...</p>
            </div>
        </li>
        <li class="ui-slider__slide">
            <div class="demo">
                <p>Slide 3 content...</p>
            </div>
        </li>
        <li class="ui-slider__slide">
            <div class="demo">
                <p>Slide 4 content...</p>
            </div>
        </li>
        <li class="ui-slider__slide">
            <div class="demo">
                <p>Slide 5 content...</p>
            </div>
        </li>
    </ul>
</section>
`;
Slider.args = {
    autoPlay: true,
};
