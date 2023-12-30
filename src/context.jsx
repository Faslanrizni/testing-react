import React, {Component} from 'react'
import item from './data.json';


// const RoomContext = React.createContext();
const PropertyMain = React.createContext();

class PropertyProvider extends Component{
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        bedrooms : 1,
        type:'all',
        price:0,
        minPrice:0,
        maxPrice:0,
        location:'',
        minBedrooms:0,
        maxBedrooms:0,
        dateFilter: '',
        images: []
    };

    componentDidMount() {
        console.log('Items:', item);
        let rooms = this.formatData(item);
        let featuredRooms = rooms.filter(room => room.tenure === "Freehold" );
        let maxPrice = Math.max(...rooms.map(item=>
            item.price
        ));
        /* let maxPrice = Math.max(...rooms.map(item=>
             item.price
         ));*/
        let maxBedrooms = Math.max(...rooms.map(item=>
            item.bedrooms
        ));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxBedrooms


        });

    }

    formatData(data) {
        let itemsArray = Array.isArray(data.properties) ? data.properties : [];

        let tempItems = itemsArray.map(item => {
            let id = item.fields.id;
            let imagesMain = item.fields.picture;
            let images = item.images;
            let addedMonth = item.added.month
            let addedDate = item.added.day
            let addedYear = item.added.year
            let room = { ...item.fields, imagesMain, id ,images,addedDate,addedMonth,addedYear};
            return room;
        });

        return tempItems;
    }


    /*    getRoom = slug =>{
            let tempRooks = [...this.state.rooms];
            const room = tempRooms.find(room => room.slug === slug);
            return room;
        };*/

    handleChange = event =>{
        const target = event.target
        const name = event.target.name
        const value = event.target.value
        /*=====call back====*/
        this.setState({
            [name]:value
        },this.filterProperties)

        console.log(`type: ${type} ,value: ${value}, name: ${name}`)
    }
    filterProperties = ()=>{
        let{/*we use let becuase we overidding the bedrooms in below*/
            rooms,type,price,maxPrice,minPrice,maxBedrooms,minBedrooms,bedrooms,dateFilter
        } = this.state

        let tempRooms = [...rooms];

        /*=========bedroom===========*/
        bedrooms = parseInt(bedrooms)
        // price = parseInt(price)


        if (bedrooms !== 1){
            tempRooms =tempRooms.filter(room => room.bedrooms >= bedrooms );
        }

        /*======filter by bedroom======*/
        if (bedrooms !== 1){
            tempRooms =tempRooms.filter(room => room.bedrooms >= bedrooms );
        }

        /*======filter by bedroom======*/

        /*======filter by price======*/

        tempRooms = tempRooms.filter(room => room.price <=price);

        /*======filter by price======*/
        if (dateFilter) {
            const selectedDate = new Date(dateFilter);
            tempRooms = tempRooms.filter((room) => {
                const addedDate = new Date(
                    room.added.year,
                    months.indexOf(room.added.month),
                    room.added.day
                );
                return addedDate >= selectedDate;
            });
        }


        if (type!=='all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        this.setState({
            sortedRooms:tempRooms
        })
    };
    getProperty = (tenure) =>{
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room =>room.tenure===tenure)
        return room;
    };

    render(){
        return(
            <PropertyMain.Provider
                value={{
                    ...this.state,
                    // getRoom: this.getRoom,
                    getRoom: this.getProperty,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </PropertyMain.Provider>
        );


    }
}

const RoomConsumer = PropertyMain.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export {PropertyProvider,RoomConsumer,PropertyMain}


