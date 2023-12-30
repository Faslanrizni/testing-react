import React from 'react';
import {useContext} from 'react';
import {PropertyMain} from '../context';

/*===============get all uniqe values==============*/

const getUniqe = (items,value) =>{
    return [...new Set(items.map(item =>item[value]))]
}

/*===============get all uniqe values==============*/

export default function PropertiesFilter({rooms}){
    const context = useContext(PropertyMain);
    // console.log(context)
    const {
        handleChange,type,price,bedrooms,minPrice,maxPrice,
        minBedrroms,maxBrdrooms,location,dateFilter
    } = context;
    /*============get uniqu types============*/
    let types = getUniqe(rooms,'type');

    /*addding types*/
    types = ['all',...types];


    /*==========mapping to jsx========*/
    types = types.map((item,index)=>{
        return (<option value={item} key={index}> {item}</option>

        );
    });

    let bedroomNO = getUniqe(rooms,'bedrooms');
    bedroomNO = bedroomNO.map((item,index)=>{
        return (<option key={index} value={item}>{item}</option>)
    })
    return(
        <section className={'filter-container'}>
            <form className={'filter-form'}>
                {/*==select type=*/}

                <div className="form-group">
                    <label htmlFor="type">Property type</label>
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
                        properti price ${price}
                    </label>
                    <input type="range" name={'price'} min={minPrice}
                           max={maxPrice} id={'price'} value={price} onChange={handleChange}
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
    )
}