import docs from './Tables.mdx';
import {
    htmlFragmentTRow,
    htmlFragmentTRowWithHeaders,
} from './_htmlFragments';

export default {
    title: 'UI Components/Tables',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ResponsiveTable = () => `
<div
    class="kb-table-responsive-wrap"
    role="region"
    aria-labelledby="unique-caption1"
    tabindex="0"
>
    <table class="kb-table">
        <caption id="unique-caption1">Meaningful <code>&lt;caption&gt;</code> with unique <code>ID</code></caption>

        <thead>
            <tr>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
            </tr>
            ${htmlFragmentTRow}
            ${htmlFragmentTRow}
            ${htmlFragmentTRow}
            ${htmlFragmentTRow}
        </tbody>
    </table>
</div>
`;
ResponsiveTable.storyName = 'Responsive table';

export const ResponsiveTableRowHeaders = () => `
<div
    class="kb-table-responsive-wrap"
    role="region"
    aria-labelledby="unique-caption2"
    tabindex="0"
>
    <table class="kb-table">
        <caption id="unique-caption2">Meaningful <code>&lt;caption&gt;</code> with unique <code>ID</code></caption>

        <thead>
            <tr>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
                <th scope="col">Col heading</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th scope="row">Row heading</th>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
            </tr>
            ${htmlFragmentTRowWithHeaders}
            ${htmlFragmentTRowWithHeaders}
            ${htmlFragmentTRowWithHeaders}
            ${htmlFragmentTRowWithHeaders}
        </tbody>
    </table>
</div>
`;
ResponsiveTableRowHeaders.storyName = 'Responsive table with row headers';

export const ResponsiveStripedTable = () => `
<div
    class="kb-table-responsive-wrap"
    role="region"
    aria-labelledby="unique-caption3"
    tabindex="0"
>
    <table class="kb-table kb-table--striped">
        <caption id="unique-caption3">Meaningful <code>&lt;caption&gt;</code> with unique <code>ID</code></caption>
        <tbody>
            <tr>
                <th scope="row">Row heading</th>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
                <td>Table cell content...</td>
            </tr>
            ${htmlFragmentTRowWithHeaders}
            ${htmlFragmentTRowWithHeaders}
            ${htmlFragmentTRowWithHeaders}
            ${htmlFragmentTRowWithHeaders}
        </tbody>
    </table>
</div>
`;
ResponsiveStripedTable.storyName = 'Responsive striped table';
