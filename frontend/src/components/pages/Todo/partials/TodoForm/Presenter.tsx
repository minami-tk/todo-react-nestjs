import React from 'react'
import { InputText } from '../../../../uiParts/InputText'
import { SubmitButton } from '../../../../uiParts/SubmitButton'

type Form = {
  title: string
  description: string
}
type Props = {
  handleCreateTodo: (e: React.FormEvent<HTMLFormElement>) => void
  formData: Form
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Presenter = (props: Props) => {
  const {
    handleCreateTodo,
    formData,
    onChange
  } = props

  return (
    <>
      <form onSubmit={handleCreateTodo}>
        <InputText
          required
          name="title"
          label="title"
          value={formData.title}
          autoFocus
          onChange={onChange}
        />
        <InputText
          required
          name="description"
          label="description"
          value={formData.description}
          onChange={onChange}
        />
        <SubmitButton title="Save" />
      </form>
    </>
  )
}