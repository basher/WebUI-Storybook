import docs from './Grid.mdx';

export default {
    title: 'UI Components/Layouts/Grid',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        gridModifier: {
            control: {
                type: 'select',
                options: ['centered', 'no-gap'],
            },
        },
    },
};

const style = `
<style>
    [class*="ui-grid"] > * {
        background: rgba(235, 201, 90, 0.2);
    }
    [class*="ui-grid--asymmetric"] > * {
        min-height: 5rem;
    }
</style>
`;

export const Grid = (args) => `
${style}
<div class="ui-grid ui-grid--${args.gridModifier}">
    <div>Grid item 1 - lots more content to demonstrate equal height columns</div>
    <div>Grid item 2</div>
    <div>Grid item 3</div>
    <div>Grid item 4</div>
    <div>Grid item 5</div>
</div>
`;

export const GridList = (args) => `
${style}
<ul class="ui-grid ui-grid--${args.gridModifier}">
    <li>Grid item 1 - lots more content to demonstrate equal height columns</li>
    <li>Grid item 2</li>
    <li>Grid item 3</li>
    <li>Grid item 4</li>
    <li>Grid item 5</li>
</ul>
`;
GridList.storyName = 'Grid as a list';

export const GridAsymmetric = () => `
${style}
<div class="ui-grid--asymmetric">
    <div>Asymmetric col 1</div>
    <div>Col 2</div>
</div>
`;
GridAsymmetric.storyName = 'Asymmetric 2-column grid';

export const GridAsymmetricAlt = () => `
${style}
<div class="ui-grid--asymmetric-alt">
    <div>Asymmetric col 1</div>
    <div>Col 2</div>
</div>
`;
GridAsymmetricAlt.storyName = 'Asymmetric 2-column grid (reversed)';
