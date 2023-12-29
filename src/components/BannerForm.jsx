import React from 'react'
export default function BannerForm({ type, bedrooms, price, minPrice, maxPrice, dateFilter, handleChange }) {
    return (
        <section className={'filter-container'}>
            <form className={'filter-form'}>
                {/*==select type=*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className={'form-control'}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*==select type=*/}

                {/*==select for bedrrom nuumber type=*/}
                <div className="form-group">
                    <label htmlFor="bedrooms">Bedroom number</label>
                    <select
                        name="bedrooms"
                        id="bedrooms"
                        value={bedrooms}
                        className={'form-control'}
                        onChange={handleChange}
                    >
                        {bedroomNO}
                    </select>
                </div>
                {/*==select bedrrom nuumber type=*/}

                {/*==============room price==========*/}
                <div className="form-group">
                    <label htmlFor="price">
                        property price ${price}
                    </label>
                    <input
                        type="range"
                        name={'price'}
                        min={minPrice}
                        max={maxPrice}
                        id={'price'}
                        value={price}
                        onChange={handleChange}
                        className={'form-control'}
                    />
                </div>
                {/*==============room price==========*/}

                <div className="form-group">
                    <label htmlFor="dateFilter">Filter by Date</label>
                    <input
                        type="date"
                        name="dateFilter"
                        id="dateFilter"
                        value={dateFilter}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
            </form>
        </section>
    );
}
