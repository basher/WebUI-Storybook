import docs from './Contact.mdx';
import {
    htmlFragmentContactCardAddress,
    htmlFragmentContactCardPerson,
} from './_htmlFragments';

export default {
    title: 'UI Components/Cards/Contact',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ContactCardAddress = () => `
<article class="ui-card ui-contact-card">
    <div class="ui-card__content">
        <h3 class="ui-card__title">
            <a href="#">Contact name</a>
        </h3>
        <address>
            <p>
                Address line 1<br/>
                Address line 2<br/>
                Address line 3<br/>
            </p>
            <span>
                <a href="tel:0123456789">0123 456789</a>
            </span>
            <span>
                <a href="mailto:contact@Web.com">contact@Web.com</a>
            </span>
        </address>
    </div>
    <div class="ui-card__actions ui-button-group">
        <a href="#" class="ui-button ui-button--text ui-button--primary">
            Get directions
        </a>
    </div>

    <div class="ui-ratings">
        <div class="ui-ratings__stars" style="--rating: 68%;"></div>
        <p class="ui-ratings__text">
            <a href="#">
                <span>Rating</span>
                3.4 (based on 195 reviews)
            </a>
        </p>
    </div>
</article>
`;
ContactCardAddress.storyName = 'Contact card address';

export const ContactCardPerson = () => `
<article class="ui-card ui-contact-card ui-contact-card--person">
    <div class="ui-card__content">
        <h3 class="ui-card__title">
            <a href="#">Contact name</a>
        </h3>
        <p>Job title</p>
        <p>
            <a href="mailto:contact@Web.com">contact@Web.com</a>
        </p>
    </div>
    <figure class="ui-card__media">
        <img
            class="ui-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>
</article>
`;
ContactCardPerson.storyName = 'Contact card person';

export const ContactCardsInGrid = () => `
<ul class="ui-grid ui-contact-card-grid">
    <li>${htmlFragmentContactCardAddress}</li>
    <li>${htmlFragmentContactCardPerson}</li>
    <li>${htmlFragmentContactCardAddress}</li>
</ul>
`;
ContactCardsInGrid.storyName = 'In a grid';
