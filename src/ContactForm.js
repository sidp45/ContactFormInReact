import React ,{Component}  from 'react'
import {Form,FormGroup,Label,Input,Button,textarea} from 'reactstrap'
class ContactForm extends Component{
    constructor(props){
        super(props);
        this.initialstate={
            name:'',
            email:'',
            city:'',
            message:''
        }
        this.state=this.initialstate;
    }
    handleChange=( e)=>
    {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit=(e)=>{
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.setState(this.initialstate);
        e.preventDefault();
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <h1 className="text-center">Contact Form!</h1>
                <FormGroup>
                    <Label>UserName</Label>
                    <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} ></Input>
                    <Label>Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} ></Input>
                    <FormGroup>
                    <Label>City</Label>
                    <Input type="select" name="city"value={this.state.city} onChange={this.handleChange} >
                        <option value="">select City ....</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Kanpur">Kanpur</option>
                         <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Allahabad">Allahabad</option>
                     </Input>
                    </FormGroup>
                     <Label> Message: </Label>
                    <textarea name="message" value={this.state.message} onChange={this.handleChange} ></textarea>
                    
                   
                    
                </FormGroup>
                <Button type="submit">SendMessage</Button>
           </Form>
        )
    }
}
export default ContactForm;