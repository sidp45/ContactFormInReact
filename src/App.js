import React ,{Component}from 'react';
import ContactForm from './ContactForm'
import './App.css';

class App extends Component {
  state={
    fields:{}
  }
  onSubmit =(fields)=>{
    this.setState({fields:fields})
  }
  render(){
  return (
    <div className="App">
      <ContactForm onSubmit={this.onSubmit}/>
      <h3>{JSON.stringify(this.state.fields)}</h3>
    </div>
  );
}
}

export default App;
