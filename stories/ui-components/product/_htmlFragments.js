export const htmlFragmentProductFilterCard = `
<a
    class="kb-card kb-product-card kb-product-card--filter"
    href="/"
    data-overlay="/ajax/fragment-nav-product-variants.html"
>
    <figure class="kb-card__media">
        <img
            class="kb-image"
            src="https://via.placeholder.com/200x113.png"
            alt=""
            loading="lazy"
            height="113"
            width="200"
        />
    </figure>
    <div class="kb-card__content">
        <p class="kb-card__title">Product name</p>
        <p class="kb-product-card__price">From &pound;19.999</p>
    </div>
</a>
`;

export const htmlFragmentFilteredSubMenu = `
<div class="kb-product-filter kb-tabs">
    <span class="kb-tabs__title">Filter 1</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
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
    <span class="kb-tabs__title">Filter 2</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
            <li>${htmlFragmentProductFilterCard}</li>
            <li>${htmlFragmentProductFilterCard}</li>
        </ul>
        <small>Smallprint goes here...</small>
    </div>
    <span class="kb-tabs__title">Filter 3</span>
    <div class="kb-tabs__content">
        <ul class="kb-grid">
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
<div class="kb-form__field kb-form__field--checkbox">
    <label class="kb-form__label">
        <span>Filter item</span>
        <input
            class="kb-form__input"
            type="checkbox"
        />
    </label>
</div>
`;

export const htmlFragmentRangeInputMultiple = `
<div class="kb-form__field kb-form__range kb-form__range--multiple">
    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Min
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
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
        <output class="kb-form__range__bubble"></output>
    </label>
    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Max
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
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
        <output class="kb-form__range__bubble"></output>
    </label>
</div>
`;

export const htmlFragmentRangeInputMultipleConversions = `
<div class="kb-form__field kb-form__range kb-form__range--multiple kb-form__range--unit-conversions">
    <fieldset class="kb-form__fieldset kb-form__fieldset--radio">
        <legend class="kb-form__legend">
            Range slider.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>CC</span>
                <input
                    class="kb-form__input"
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

        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Ltr</span>
                <input
                    class="kb-form__input"
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

    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Min
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
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
        <output class="kb-form__range__bubble"></output>
    </label>

    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Max
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
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
        <output class="kb-form__range__bubble"></output>
    </label>
</div>
`;
