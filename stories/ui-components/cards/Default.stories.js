import docs from './Default.mdx';
import {
    htmlFragmentDefaultCard,
    htmlFragmentDefaultCard2,
    htmlFragmentDefaultCardButtons,
} from './_htmlFragments';

export default {
    title: 'UI Components/Cards/Default',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        cardOrientation: {
            control: {
                type: 'select',
                options: ['media-top', 'media-inline', 'media-inline-alt'],
            },
        },
    },
};

export const DefaultCard = (args) => `
<article class="kb-card kb-card--${args.cardOrientation}">
    <div class="kb-card__content">
        <h3 class="kb-card__title">Card title</h3>
        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
    <figure class="kb-card__media">
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x225.png"
            alt=""
            loading="lazy"
            height="225"
            width="400"
        />
    </figure>
</article>
`;
DefaultCard.storyName = 'Default card';

export const QuietCard = (args) => `
<article class="kb-card kb-card--quiet kb-card--${args.cardOrientation}">
    <div class="kb-card__content">
        <h3 class="kb-card__title">Card title</h3>
        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
    <figure class="kb-card__media">
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x225.png"
            alt=""
            loading="lazy"
            height="225"
            width="400"
        />
    </figure>
</article>
`;
QuietCard.storyName = 'Quiet card';

export const CardWithButtons = (args) => `
<article class="kb-card kb-card--${args.cardOrientation}">
    <div class="kb-card__content">
        <h3 class="kb-card__title">Card title</h3>
        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
    <figure class="kb-card__media">
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x225.png"
            alt=""
            loading="lazy"
            height="225"
            width="400"
        />
    </figure>
    <div class="kb-card__actions kb-button-group">
        <a href="#" class="kb-button kb-button--text kb-button--primary">
            Primary text link
        </a>
        <a href="#" class="kb-button kb-button--text kb-button--secondary">
            Secondary text link
        </a>
    </div>
</article>
`;
CardWithButtons.storyName = 'Card with buttons';

export const CardFullwidth = () => `
<article class="kb-card kb-card--fullwidth kb-card--media-inline">
    <div class="kb-card__content">
        <h3 class="kb-card__title">Card title</h3>
        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
    <figure class="kb-card__media">
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
    </figure>
</article>
`;
CardFullwidth.storyName = 'Fullwidth card';

export const CardsInGrid = (args) => `
<ul class="kb-grid kb-card-grid">
    <li>
        <article class="kb-card kb-card--${args.cardOrientation}">
            ${htmlFragmentDefaultCard}
            ${htmlFragmentDefaultCardButtons}
        </article>
    </li>
    <li>
        <article class="kb-card kb-card--${args.cardOrientation}">
            ${htmlFragmentDefaultCard2}
            ${htmlFragmentDefaultCardButtons}
        </article>
    </li>
    <li>
        <article class="kb-card kb-card--${args.cardOrientation}">
            ${htmlFragmentDefaultCard}
            ${htmlFragmentDefaultCardButtons}
        </article>
    </li>
</ul>
`;
CardsInGrid.storyName = 'Cards in a grid';
