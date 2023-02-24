import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const Schema = Yup.object().shape({
    name: Yup.string().required('Required'),
  });

export const ContactsForm = ({onSave}) => {
    return(
        <Formik 
        initialValues={{ contacts: [], name: '' }}
        validationSchema = {Schema}
        onSubmit={(values, actions) => {
            // const = 
            onSave({
                name: values.name, 
                id: nanoid(),
            });
            actions.resetForm();
        }}>
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <button type="submit" >Add contact</button>
          </Form>
        </Formik>
    )
}