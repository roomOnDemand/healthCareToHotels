import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const SpaceForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.space?.id)
  }

  return (
    <div className="text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="address"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="address"
          defaultValue={props.space?.address}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="address" className={CSS.errorMessage} />

        <Label
          name="state"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="state"
          defaultValue={props.space?.state}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="state" className={CSS.errorMessage} />

        <Label
          name="zipcode"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="zipcode"
          defaultValue={props.space?.zipcode}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="zipcode" className={CSS.errorMessage} />

        <Label
          name="type"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="type"
          defaultValue={props.space?.type}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="type" className={CSS.errorMessage} />

        <Label
          name="size"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="size"
          defaultValue={props.space?.size}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="size" className={CSS.errorMessage} />

        <Label
          name="price"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="price"
          defaultValue={props.space?.price}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="price" className={CSS.errorMessage} />

        <Label
          name="availability"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="availability"
          defaultValue={props.space?.availability}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="availability" className={CSS.errorMessage} />

        <Label
          name="listingUrl"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="listingUrl"
          defaultValue={props.space?.listingUrl}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="listingUrl" className={CSS.errorMessage} />

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SpaceForm
