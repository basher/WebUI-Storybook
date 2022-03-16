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
<footer id="footer" class="kb-layout__footer">
    <div class="kb-layout__inner">

        <div class="kb-footer">
            <div class="kb-footer__group">
                <h2 class="kb-footer__group-title">Group 1</h2>
                <ul class="kb-footer__list">
                    <li class="kb-footer__item">
                        <a class="kb-footer__link" href="#">Some link</a>
                    </li>
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                </ul>
            </div>

            <div class="kb-footer__group">
                <h2 class="kb-footer__group-title">Group 2</h2>
                <ul class="kb-footer__list">
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                    ${htmlFragmentLink}
                </ul>
            </div>

            <div class="kb-footer__group">
                <h2 class="kb-footer__group-title">Group 3</h2>
                <ul class="kb-footer__list">
                    ${htmlFragmentLink}
                </ul>
                <p class="kb-footer__group-content">
                    Some other content...
                </p>
                <address>
                    <p class="kb-footer__group-content">
                        Address line 1<br/>
                        Address line 2<br/>
                        Postcode
                    </p>
                </address>
            </div>

            <div class="kb-footer__group">
                <h2 class="kb-footer__group-title">Group 4</h2>
            </div>
        </div>

        <div class="kb-footer--supplementary kb-footer--supplementary-social">
            <div class="kb-social">
                <h2 class="kb-social__title">
                    Follow Us
                </h2>
                <ul class="kb-social__icons">
                    <li class="kb-social__icon">
                        <a href="#" target="_blank" title="link opens in a new tab">
                            <img
                                class="kb-image"
                                src="https://via.placeholder.com/40x40.png"
                                alt="Facebook"
                                height="40"
                                width="40"
                            />
                        </a>
                    </li>
                    <li class="kb-social__icon">
                        <a href="#" target="_blank" title="link opens in a new tab">
                            <img
                                class="kb-image"
                                src="https://via.placeholder.com/40x40.png"
                                alt="Twitter"
                                height="40"
                                width="40"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <a class="kb-footer__manufacturer" href="#" target="_blank">
                <img class="kb-image" src="https://via.placeholder.com/250x100.png" alt="dealer" />
            </a>
        </div>

        <div class="kb-footer--supplementary">
            <ul class="kb-footer__list">
                <li class="kb-footer__item kb-footer__item--copyright">
                    &copy; Web Ltd 2010-2020
                </li>
                ${htmlFragmentLink}
                ${htmlFragmentLink}
                ${htmlFragmentLink}
            </ul>
            <div class="kb-footer__smallprint">
                Smallprint goes here...
            </div>
        </div>

    </div>
</footer>
`;
Footer.storyName = 'Footer';
