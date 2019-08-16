import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const AppForm = ({ errors, touched, values }) => {
  return (
    <div>
      <Form>
        <Field type='name' name='name' placeholder='Name' />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='email' name='email' placeholder='Email' />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='password' name='password' placeholder='Password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label>
          <Field type='checkbox' name='term' checked={values.term} />I agree to
          the Terms and Conditions
        </label>
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ name, email, password, term }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      term: term || false
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(0)
      .required()
  }),
  handleSubmit(values, { resetForm }) {
    console.log(values)
    resetForm()
  }
})
const AWF = FormikApp(AppForm)

export default AWF
