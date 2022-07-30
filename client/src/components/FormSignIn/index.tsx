import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'
import * as S from './styles'

import { FormWrapper, FormLink } from 'components/Form'
import { useRouter } from 'next/router'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    console.error('dados invalidos')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="Email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="Password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth>
          Sign in now
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href={'/sign-up'}>
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
