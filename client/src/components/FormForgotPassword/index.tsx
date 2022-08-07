import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { Email, ErrorOutline } from 'styled-icons/material-outlined'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import { useRouter } from 'next/router'
import { FieldErrors, forgotValidate } from 'utils/validations'

const defaultValues = {
  email: ''
}

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState(defaultValues)
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)
    setFormError('user name or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="Email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <Button disabled={loading} type="submit" size="large" fullWidth>
          {loading ? <FormLoading /> : <span>Send Email</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
