import docs from './MapLocation.mdx';

export default {
    title: 'UI Components/Map location',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const MapLocation = () => `
<div class="ui-map__wrap">
    <div id="ui-location-map" class="ui-map">
        <!-- Hardcoded Google map for demo purposes -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39951.90126657198!2d-1.1423310291663946!3d51.25602297609176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487404c180a05953%3A0x682dc7216eb9702a!2sBasingstoke!5e0!3m2!1sen!2suk!4v1598600998938!5m2!1sen!2suk" frameborder="0" allowfullscreen aria-hidden="false" tabindex="0" title="[meaningful title]" style="height: 100%; width: 100%"></iframe>
    </div>

    <div class="ui-map__overlay">
        <div class="ui-card ui-contact-card">
            <div class="ui-card__content">
                <p class="ui-card__title">
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
            <div class="ui-card__actions ui-button-group">
                <a href="#" class="ui-button ui-button--text ui-button--primary">
                    Get directions
                </a>
            </div>
        </div>
    </div>
</div>
`;
