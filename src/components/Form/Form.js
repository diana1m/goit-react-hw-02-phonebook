import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const Schema = Yup.object().shape({
    name: Yup.string("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required('Required'),
    number: Yup.number().required(),
  });

export const ContactsForm = ({onSave}) => {
    return(
        <Formik 
        initialValues={{ contacts: [], name: '', number: '' }}
        validationSchema = {Schema}
        onSubmit={(values, actions) => {
            // const = 
            onSave({
                id: nanoid(),
                name: values.name, 
                number: values.number,
            });
            actions.resetForm();
        }}>
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />

            <button type="submit" >Add contact</button>
          </Form>
        </Formik>
    )
}