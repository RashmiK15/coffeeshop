import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      allDrinks : [
        {
          id: 1,
          name: 'Dana',
          size: 'Medium',
          milk:'Regular',
          isHot: 'Hot',
          drink:'Honey Bear Latte',
          flavour:'no'

        },
    
      ]


      
    }
    this.addNewDrink = this.addNewDrink.bind(this);
  }

  addNewDrink(drink){
    let allDrinksAdded = this.state.allDrinks
    allDrinksAdded.push({
        id:       allDrinksAdded.length+1, 
        name:     drink.newName, 
        size:     drink.newDrinkSize,
        milk:     drink.newDrinkMilk,
        isHot:    drink.newDrinkHot,
        drink:    drink.newDrink,
        flavour:  drink.newDrinkFlavour
    })
    this.setState({
      allDrinks: allDrinksAdded
    });
  }

  render(){
    return(
      <>
      <Header count={this.state.allDrinks} />
      <DrinkList list={this.state.allDrinks} toAddNewDrink= {(data) => this.addNewDrink(data)} />
      <Footer />

      </>
    )

  }
}



function DrinkList(props){
  return(
    <>
    <div className="container">
      <DrinksForm onDrinkCreate= {(data) => props.toAddNewDrink(data)}/>

      <section className="ordersContainer">

        {props.list.map(Order => <DisplayDrinks Order={Order} key={Order.id}/>)} 

      </section>
    
    </div>
    </>
  )
}


function DisplayDrinks(props){
  return(
    <>
      <div className="order"> 
           <p>Order{props.Order.id}: {props.Order.name}, {props.Order.drink}
           , with {props.Order.flavour} flavour
           , {props.Order.size}
           , {props.Order.milk} milk
           , {props.Order.isHot}</p>
      </div>
    </>
  )

}

class DrinksForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // newDrinkName:'',
      // newDrinkType:'',
      newName:'', 
      newDrinkSize:'',
      newDrinkMilk:'',
      newDrinkHot:'',
      newDrink:'',
      newDrinkFlavour:''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let name = event.target.drinkName.value
    let size = event.target.size.value
    let milk = event.target.milk.value
    let hot = event.target.isHot.value
    let drink = event.target.drinkType.value
    let flavour = event.target.Flavour.value


    this.setState((state, props) => ({
      // newDrinkName : name,
      // newDrinkType : type
      newName        : name, 
      newDrinkSize   : size,
      newDrinkMilk   : milk,
      newDrinkHot    : hot,
      newDrink       : drink,
      newDrinkFlavour: flavour
    }), ()=>{
      console.log(this.state);
      this.props.onDrinkCreate(this.state);
    });
   

  }


  render(){
    return(
      <>
        <div className="formContainer">
          <h3>Place a new order</h3>
          <form onSubmit={this.handleSubmit}>
              {/* <label >Place a new order:</label><br /> */}

              <label >Your Name:</label><br />
              <input type="text" required name="drinkName" placeholder="Name"/><br />
              
            
              <label>Drink</label><br />
              <select name="drinkType">
                <option value="black Coffee">Black Coffee</option>
                <option value="latte">Latte</option>
                <option value="Irish Cappuccino">Irish Cappuccino</option>
                <option value="Honey Bear Latte">Honey Bear Latte</option>
                <option value="Caramel Ice-Blended ">Ice-Blended </option>
                <option value="Caramel Ice-Blended ">frappe</option>

              </select><br />

              <label>Flavour</label><br />
              <select name="Flavour">
                <option value="Caramel">Caramel</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Hazelnut">Hazelnut</option>
                <option value="No">No Flavour</option>
              </select><br />

              <label>Size:</label><br />
              <select name="size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select><br />

              <label>Milk</label><br />
              <select name="milk">
                <option value="regular"> Regular </option>
                <option value="almond"> Almond </option>
                <option value="coconut"> Coconut </option>
                <option value="none"> None </option>  
              </select> <br />
        
              <label>Hot: </label>
              <input name="isHot" type="radio" value="Hot" />

              <label>Cold: </label>
              <input name="isHot" value="Cold" type="radio"/><br />


              <button className='button' type="submit">Order </button>


       </form>
    </div>


      </>
  )}
}




function Header(props){
  return(
    <>
    <h2 className="count"> Number of Orders: {props.count.length}</h2>
    </>
  )
}




function Footer(props){
  return(
    <>
    <p className="footer"> May your Coffee kicks in before Reality does! </p>
    </>
  )
}





export default App;
