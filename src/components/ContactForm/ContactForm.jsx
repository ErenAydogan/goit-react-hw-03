import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import FormButton from '../FormButton/FormButton';
import styles from './ContactForm.module.css';

const ContactForm = (props) => {
  const { contacts, setContacts } = props;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name cannot exceed 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number cannot exceed 50 characters')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: `id-${nanoid()}`,
      name: values.name,
      number: values.number,  
    };
    setContacts([...contacts, newContact]);
    resetForm();  
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles['label-group']}>
              <label htmlFor="name" className={styles['label-name']}>Name</label>
              <Field type="text" id="name" name="name" className={styles['label-input']} />
              <ErrorMessage name="name" component="div" className={styles['error-message']} />
            </div>

            <div className={styles['label-group']}>
              <label htmlFor="number" className={styles['label-name']}>Number</label>
              <Field type="text" id="number" name="number" className={styles['label-input']} />
              <ErrorMessage name="number" component="div" className={styles['error-message']} />
            </div>
            <FormButton type="submit">Add Contact</FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;