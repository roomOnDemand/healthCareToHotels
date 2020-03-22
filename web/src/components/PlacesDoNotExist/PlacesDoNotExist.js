import { Form, Label, TextField, FieldError, Submit } from '@redwoodjs/web'

const PlacesDoNotExist = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>We Could Not Find Anything in Your Area</h2>
      <h3>We'll Get Back To You</h3>
      <Form onSubmit={onSubmit}>
        <Label name="email" className="label" errorClassName="label error" />
        <TextField
          name="email"
          className="input"
          errorClassName="input error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
            },
          }}
        />
        <FieldError name="email" className="error-message" />
        <Submit className="button">Submit</Submit>
      </Form>
    </div>
  )
}

export default PlacesDoNotExist
