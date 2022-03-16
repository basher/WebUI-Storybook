import docs from './Float.mdx';

export default {
    title: 'UI Components/Layouts/Float',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        reverse: { control: 'boolean' },
    },
};

export const Float = (args) => `
<div class="ui-float ${args.reverse === true ? 'ui-float--reverse' : ''}">
    <img
        class="ui-image ui-float__content"
        src="https://via.placeholder.com/1024x655.png"
        alt=""
        loading="lazy"
        height="655"
        width="1024"
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
</div>
`;
