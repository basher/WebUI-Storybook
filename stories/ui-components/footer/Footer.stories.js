import docs from './Footer.mdx';
import { htmlFragmentLink } from './_htmlFragments';

export default {
    title: 'UI Components/Footer/Footer',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Footer = () => `
<footer id="footer" class="ui-layout__footer">
    <div class="ui-layout__inner">

        <div class="ui-footer">
            <div class="ui-footer__group">
                <h2 class="ui-footer__group-title">Group 1</h2>
                <ul class="ui-footer__list">
                    <li class="ui-footer__item">
                        <a class="ui-footer__link" href="#">Some link</a>
                    </li>
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                </ul>
            </div>

            <div class="ui-footer__group">
                <h2 class="ui-footer__group-title">Group 2</h2>
                <ul class="ui-footer__list">
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                </ul>
            </div>

            <div class="ui-footer__group">
                <h2 class="ui-footer__group-title">Group 3</h2>
                <ul class="ui-footer__list">
                    ${htmlFragmentLink}
                </ul>
                <p class="ui-footer__group-content">
                    Some other content...
                </p>
                <address>
                    <p class="ui-footer__group-content">
                        Address line 1<br/>
                        Address line 2<br/>
                        Postcode
                    </p>
                </address>
            </div>

            <div class="ui-footer__group">
                <h2 class="ui-footer__group-title">Group 4</h2>
            </div>
        </div>

        <div class="ui-footer--supplementary ui-footer--supplementary-social">
            <div class="ui-social">
                <h2 class="ui-social__title">
                    Follow Us
                </h2>
                <ul class="ui-social__icons">
                    <li class="ui-social__icon">
                        <a href="#" target="_blank" title="link opens in a new tab">
                            <img
                                class="ui-image"
                                src="https://via.placeholder.com/40x40.png"
                                alt="Facebook"
                                height="40"
                                width="40"
                            />
                        </a>
                    </li>
                    <li class="ui-social__icon">
                        <a href="#" target="_blank" title="link opens in a new tab">
                            <img
                                class="ui-image"
                                src="https://via.placeholder.com/40x40.png"
                                alt="Twitter"
                                height="40"
                                width="40"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <a class="ui-footer__manufacturer" href="#" target="_blank">
                <img class="ui-image" src="https://via.placeholder.com/250x100.png" alt="dealer" />
            </a>
        </div>

        <div class="ui-footer--supplementary">
            <ul class="ui-footer__list">
                <li class="ui-footer__item ui-footer__item--copyright">
                    &copy; Web Ltd 2010-2020
                </li>
                ${htmlFragmentLink}
                ${htmlFragmentLink}
                ${htmlFragmentLink}
            </ul>
            <div class="ui-footer__smallprint">
                Smallprint goes here...
            </div>
        </div>

    </div>
</footer>
`;
Footer.storyName = 'Footer';
