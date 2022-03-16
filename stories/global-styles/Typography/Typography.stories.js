import domready from 'domready';
import docs from './Typography.mdx';

export default {
    title: 'Global Styles/Typography',
    parameters: {
        docs: {
            page: docs,
        },
    },
    loaders: [
        () =>
            fetch(process.env.STORYBOOK_EXPORTED_TYPOGRAPHY)
                .then((r) => r.json())
                .then((json) => json),
    ],
};

const style = `
<style>
    style + h2,
    .kb-grid + h2:last-of-type,
    .kb-grid:first-of-type,
    .kb-grid:last-of-type {
        display: none;
    }
    .kb-grid {
        grid-template-columns: repeat(auto-fit, 25rem);
    }
    .kb-grid li {
        border-block-end: 1px solid;
        display: flex;
        flex-direction: column;
        padding-block-end: 1rem;
    }
    .kb-grid span {
        word-break: break-all;
    }
    .kb-grid span:not(.styled) {
        font-size: 0.875rem;
    }
    .styled {
        margin-block-start: 1.5rem;
    }
</style>
`;

export const TypographyTheme = (args, { loaded }) => `
    ${style}
    ${
        // Build story HTML from 'exported-typography.json'.
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
            <ul class="kb-grid">
                ${loaded[section]
                    .map(
                        (type) =>
                            `
                <li>
                    <span>
                        ${type.name}
                    </span>
                    <span
                        class="styled"
                        style="font-family: ${type.compiledValue}">
                    </span>
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
        // Output computed typography values.
        domready(function () {
            let styledSpan = document.querySelectorAll('.styled');
            styledSpan.forEach((span) => {
                let computedSpan = span;
                computedSpan.innerHTML = getComputedStyle(
                    span
                ).getPropertyValue('font-family');
            });
        })
    }
`;
TypographyTheme.storyName = 'Theme typefaces';

export const TypographyExamples = () => `
<h1>Heading level 1 <br/>with line break to test line-height</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<p>Soluta voluptatem deleniti excepturi laudantium. Earum, modi molestiae. Officia at repudiandae quo nulla reiciendis optio modi nemo, placeat incidunt?</p>

<h2>Heading level 2 <br/>with line break to test line-height</h2>

<h3><a href="#">This H3 is a link</a></h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<p>Soluta voluptatem deleniti excepturi laudantium. Earum, modi molestiae. Officia at repudiandae quo nulla reiciendis optio modi nemo, placeat incidunt?</p>

<h3>Heading level 3 <br/>with line break to test line-height</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<p>Soluta voluptatem deleniti excepturi laudantium. Earum, modi molestiae. Officia at repudiandae quo nulla reiciendis optio modi nemo, placeat incidunt?</p>

<h4>Heading level 4 <br/>with line break to test line-height</h4>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<p>Soluta voluptatem deleniti excepturi laudantium. Earum, modi molestiae. Officia at repudiandae quo nulla reiciendis optio modi nemo, placeat incidunt?</p>

<h5>Heading level 5 <br/>with line break to test line-height</h5>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<h6>Heading level 6 <br/>with line break to test line-height</h6>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>

<h2 class="kb-h4">Heading level 2 with <code>class="kb-h4"</code></h2>
<h3 class="kb-h4">Heading level 3 with <code>class="kb-h4"</code></h3>

<div class="kb-cms__font-override">
    <p>This is HTML inside a <code>&lt;div class="kb-cms__font-override"&gt;</code> wrapper, to override typography styles if required.</p>
</div>

<p><small>Smallprint using <code>&lt;small&gt;</code> element.</small></p>

<p>Inline <a href="#">text link</a>.</p>

<p><del>Deleted text</del> using the <code>&lt;del&gt;</code> element.</p>

<ul>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item
        <ul>
            <li>Nested unordered list item</li>
            <li>Nested unordered list item</li>
            <li>Nested unordered list item
                <ul>
                    <li>Nested unordered list item</li>
                    <li>Nested unordered list item</li>
                    <li>Nested unordered list item</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<ol>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item
        <ol>
            <li>Nested ordered list item</li>
            <li>Nested ordered list item</li>
            <li>Nested ordered list item
                <ol>
                    <li>Nested ordered list item</li>
                    <li>Nested ordered list item</li>
                    <li>Nested ordered list item</li>
                </ol>
            </li>
        </ol>
    </li>
</ol>

<dl>
    <dt>Definition list - term</dt>
    <dd>Definition list - description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
    <dt>Definition list - term</dt>
    <dd>Definition list - description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
    <dt>Definition list - term</dt>
    <dd>Definition list - description. Lorem ipsum dolor sit amet consectetur adipisicing elit.</dd>
</dl>

<hr/>

<pre><code>
&lt;p&gt;Code example...&lt;/p&gt;
&lt;style&gt;
    code { font-family: $font-family-monospace; }
&lt;/style&gt;
</code></pre>
`;
TypographyExamples.storyName = 'Examples';
