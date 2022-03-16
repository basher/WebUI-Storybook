import docs from './Social.mdx';

export default {
    title: 'UI Components/Social',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Social = () => `
<div class="ui-social">
    <h2 class="ui-social__title">
        Follow Us on Social Media
    </h2>
    <ul class="ui-social__icons">
        <li class="ui-social__icon">
            <a href="#" target="_blank" title="link opens in a new tab">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/48x48.png"
                    alt="Facebook"
                    height="48"
                    width="48"
                />
            </a>
        </li>
        <li class="ui-social__icon">
            <a href="#" target="_blank" title="link opens in a new tab">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/48x48.png"
                    alt="Twitter"
                    height="48"
                    width="48"
                />
            </a>
        </li>
        <li class="ui-social__icon">
            <a href="#" target="_blank" title="link opens in a new tab">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/48x48.png"
                    alt="Youtube"
                    height="48"
                    width="48"
                />
            </a>
        </li>
        <li class="ui-social__icon">
            <a href="#"  target="_blank" title="link opens in a new tab">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/48x48.png"
                    alt="Instagram"
                    height="48"
                    width="48"
                />
            </a>
        </li>
        <li class="ui-social__icon">
            <a href="#" target="_blank" title="link opens in a new tab">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/48x48.png"
                    alt="Whatsapp"
                    height="48"
                    width="48"
                />
            </a>
        </li>
    </ul>
</div>
`;
