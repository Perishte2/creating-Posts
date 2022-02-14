import React,   {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
//import App from './App';
import App from './components/app';



/*
function WhoAmI(props) {
  return (
    <>
       <h1>My name is {props.name}, surname -  {props.surname} </h1>
       <a href={props.link} >My Profile</a>
    </>
  )
}
*/

/*
class WhoAmI extends Component {
  constructor (props) {
    super (props);
    this.state = {
      years : 26
    }
    //first method for setState
    //for each state of object we bind 
    //this.nextYear = this.nextYear.bind(this);
    //Second method of setState
    this.nextYear = () => {
      this.setState(state => ({
        years: ++state.years
    }))
    }
  }

 /*
  nextYear() {
    console.log(1);
    this.setState(state => ({
        years: ++state.years
    }))
    */
  
    /*
    render(){
      const {name, surname, link} = this.props;
      const {years} = this.state;
       return(
         <>
         <button onClick={this.nextYear} >++</button>
        <h1>My name is {name}, surname -  {surname}, years = {years} </h1>
        <a href={link} >My Profile</a>
        </>
       )
       }
        
    
  }

  */
   


/*
function WhoAmI({name, surname, link}) {
  return (
    <>
       <h1>My name is {name}, surname -  {surname} </h1>
       <a href={link} >My Profile</a>
    </>
  )
}

*/

/*const All = () => {
  return (
    <>
    <WhoAmI name= "Milana" surname="Suiunbaeva" link="www.youtube.com" />
    <WhoAmI name= "George" surname="Thomps" link="www.youtube.com" />
    <WhoAmI name= "Jack" surname="Archebald" link="www.youtube.com" />
    </>
  )
}
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

