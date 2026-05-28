import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  title: Yup.string().required("Titel erforderlich"),
  release_date: Yup.string().required("Datum erforderlich"),
})

const GameForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        release_date: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form>
        <Field
          name="title"
          placeholder="Titel"
        />
        <ErrorMessage name="title" />

        <Field
          name="release_date"
          placeholder="Release Date"
        />
        <ErrorMessage name="release_date" />

        <button type="submit">
          Speichern
        </button>
      </Form>
    </Formik>
  )
}

export default GameForm