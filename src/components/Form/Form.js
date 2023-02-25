import { Formik, Field } from 'formik';
import * as yup from 'yup';  
import 'yup-phone';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {Form, ErrorFormik, Button} from './Form.styled';

const Schema = yup.object().shape({
    name: yup.string("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),
    number: yup.number().required(),
  });

export const ContactsForm = ({onSave, contacts}) => {
    return(
        <Formik 
        initialValues={{ contacts: [], name: '', number: '' }}
        validationSchema = {Schema}
        onSubmit={(values, actions) => {
            if(contacts.find(contact => contact.name === values.name)){
              alert(`${values.name} is already in contacts!`)
            }else{
              onSave({
                id: nanoid(),
                name: values.name, 
                number: values.number,
              });
            }
            
            actions.resetForm();
        }}>
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorFormik name="name" component="span"/>

            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" />
            <ErrorFormik name="number" component="span" />

            <Button type="submit" >Add contact</Button>
          </Form>
        </Formik>
    )
}

ContactsForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
).isRequired,
}