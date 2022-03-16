import docs from './BranchLocator.mdx';

export default {
    title: 'UI Components/Branch locator (contact)',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const BranchLocatorMap = () => `
<div class="kb-map__wrap">
    <div id="kb-location-map" class="kb-map">
        <!-- Hardcoded Google map for demo purposes -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39951.90126657198!2d-1.1423310291663946!3d51.25602297609176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487404c180a05953%3A0x682dc7216eb9702a!2sBasingstoke!5e0!3m2!1sen!2suk!4v1598600998938!5m2!1sen!2suk" frameborder="0" allowfullscreen aria-hidden="false" tabindex="0" title="[meaningful title]" style="height: 100%; width: 100%"></iframe>
    </div>

    <div class="kb-map__overlay">
        <div class="kb-card kb-contact-card">
            <div class="kb-card__content">
                <p class="kb-card__title">
                    <a href="#">Contact name</a>
                </p>
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
            <div class="kb-card__actions kb-button-group">
                <a href="#" class="kb-button kb-button--text kb-button--primary">
                    Get directions
                </a>
            </div>
        </div>
    </div>
</div>
`;
BranchLocatorMap.storyName = 'Map with overlay';