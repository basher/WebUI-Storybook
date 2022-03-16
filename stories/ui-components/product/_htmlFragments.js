export const htmlFragmentProductFilterCard = `
<a
    class="ui-card ui-product-card ui-product-card--filter"
    href="/"
    data-overlay="/ajax/fragment-nav-product-variants.html"
>
    <figure class="ui-card__media">
        <img
            class="ui-image"
            src="https://via.placeholder.com/200x113.png"
            alt=""
            loading="lazy"
            height="113"
            width="200"
        />
    </figure>
    <div class="ui-card__content">
        <p class="ui-card__title">Product name</p>
        <p class="ui-product-card__price">From &pound;19.999</p>
    </div>
</a>
`;

export const htmlFragmentFilteredSubMenu = `
<div class="ui-product-filter ui-tabs">
    <span class="ui-tabs__title">Filter 1</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="ui-tabs__title">Filter 2</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="ui-tabs__title">Filter 3</span>
    <div class="ui-tabs__content">
        <ul class="ui-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
</div>
`;

export const htmlFragmentFilterCheckbox = `
<div class="ui-form__field ui-form__field--checkbox">
    <label class="ui-form__label">
        <span>Filter item</span>
        <input
            class="ui-form__input"
            type="checkbox"
        />
    </label>
</div>
`;

export const htmlFragmentRangeInputMultiple = `
<div class="ui-form__field ui-form__range ui-form__range--multiple">
    <label class="ui-form__label">
        <span class="ui-form__range__label">
            <span class="ui-form__range__minmax">
                Min
            </span>
            Range slider
        </span>
        <input
            class="ui-form__input"
            type="range"
            data-range="min"
            step="1"
            value="1"
            min="1"
            max="19"
            aria-valuenow="1"
            aria-valuemin="1"
            aria-valuemax="19"
        />
        <output class="ui-form__range__bubble"></output>
    </label>
    <label class="ui-form__label">
        <span class="ui-form__range__label">
            <span class="ui-form__range__minmax">
                Max
            </span>
            Range slider
        </span>
        <input
            class="ui-form__input"
            type="range"
            data-range="max"
            step="1"
            value="20"
            min="2"
            max="20"
            aria-valuenow="20"
            aria-valuemin="2"
            aria-valuemax="20"
        />
        <output class="ui-form__range__bubble"></output>
    </label>
</div>
`;

export const htmlFragmentRangeInputMultipleConversions = `
<div class="ui-form__field ui-form__range ui-form__range--multiple ui-form__range--unit-conversions">
    <fieldset class="ui-form__fieldset ui-form__fieldset--radio">
        <legend class="ui-form__legend">
            Range slider.
        </legend>
        <div class="ui-form__field">
            <label class="ui-form__label">
                <span>CC</span>
                <input
                    class="ui-form__input"
                    type="radio"
                    name="engine-size"
                    checked
                />
            </label>

            <!-- Hidden <input/> for JavaScript -->
            <input
                type="hidden"
                data-id="min"
                id="minUnitType-CC"
                name="minUnitType-CC"
                value="min-0,max-1990,step-10,value-0"
            />
            <input
                type="hidden"
                data-id="max"
                id="maxUnitType-CC"
                name="maxUnitType-CC"
                value="min-10,max-2000,step-10,value-2000"
            />
        </div>

        <div class="ui-form__field">
            <label class="ui-form__label">
                <span>Ltr</span>
                <input
                    class="ui-form__input"
                    type="radio"
                    name="engine-size"
                />
            </label>

            <!-- Hidden <input/> for JavaScript -->
            <input
                type="hidden"
                data-id="min"
                id="minUnitType-LTR"
                name="minUnitType-LTR"
                value="min-0,max-1.8,step-0.2,value-0"
            />
            <input
                type="hidden"
                data-id="max"
                id="maxUnitType-LTR"
                name="maxUnitType-LTR"
                value="min-0.2,max-2.0,step-0.2,value-2.0"
            >
        </div>
    </fieldset>

    <label class="ui-form__label">
        <span class="ui-form__range__label">
            <span class="ui-form__range__minmax">
                Min
            </span>
            Range slider
        </span>
        <input
            class="ui-form__input"
            type="range"
            data-range="min"
            step="10"
            value="0"
            min="0"
            max="1990"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="1990"
        />
        <output class="ui-form__range__bubble"></output>
    </label>

    <label class="ui-form__label">
        <span class="ui-form__range__label">
            <span class="ui-form__range__minmax">
                Max
            </span>
            Range slider
        </span>
        <input
            class="ui-form__input"
            type="range"
            data-range="max"
            step="10"
            value="2000"
            min="10"
            max="2000"
            aria-valuenow="2000"
            aria-valuemin="10"
            aria-valuemax="2000"
        />
        <output class="ui-form__range__bubble"></output>
    </label>
</div>
`;
