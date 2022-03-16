import domready from 'domready';
import docs from './Colours.mdx';

export default {
    title: 'Global Styles/Colours',
    parameters: {
        docs: {
            page: docs,
        },
    },
    loaders: [
        () =>
            fetch(process.env.STORYBOOK_EXPORTED_COLORS)
                .then((r) => r.json())
                .then((json) => json),
    ],
};

const style = `
<style>
    style + h2,
    .ui-grid:first-of-type {
        display: none;
    }
    .ui-grid {
        grid-template-columns: repeat(auto-fit, 12.5rem);
    }
    .ui-grid li {
        border: 1px solid;
        border-radius: 0.125rem;
        display: flex;
        flex-direction: column;
        font-size: 0.875rem;
        padding: 0.25rem;
    }
    .ui-grid span {
        word-break: break-all;
    }
    .styled {
        height: 4rem;
    }
</style>
`;

export const Colours = (args, { loaded }) => `
    ${style}
    ${
        // Build story HTML from 'exported-colors.json'.
        Object.keys(loaded)
            .map(
                (section) =>
                    `
            <h2>
                ${
                    section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/-/g, ' ')
                }
            </h2>
            <ul class="ui-grid">
                ${loaded[section]
                    .map(
                        (color) =>
                            `
                <li>
                    <span
                        class="styled"
                        style="background: ${color.compiledValue}">
                    </span>
                    <span>
                        ${color.name}
                    </span>
                    <span></span>
                </li>
                `
                    )
                    .join('')}
            </ul>
            `
            )
            .join('')
    }
    ${
        // Output computed RGB colours.
        domready(function () {
            let styledSpan = document.querySelectorAll('.styled');
            styledSpan.forEach((span) => {
                let computedSpan = span.nextElementSibling.nextElementSibling;
                computedSpan.innerHTML =
                    getComputedStyle(span).getPropertyValue('background-color');
            });
        })
    }
`;
