import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              placeholder="first name"
              name="firstName"
              component={MyField}
            />
          </div>
          <div>
            <Field
              placeholder="last name"
              name="lastName"
              component={MyField}
            />
          </div>
          <div>
            <Field placeholder="email" name="email" component={MyField} />
          </div>
          <Button type="submit">submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
