import {Label } from "../ContactForm/ContactForm.styled";
import { Container, InputName } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
//import {setContact} from '../../Redux/contactSlice'
import {setContact} from '../../Redux/filterSlice'

const Filter = () => {
 // { value }
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);
    

    const handleFilter = e => {
        dispatch(setContact(e.target.value));
      };

     return (
    <Container>
        <Label>
            Find contacts by name
            <InputName type="text" value={filter} onChange={handleFilter} />
        </Label>
    </Container>
)}


export default Filter;