import React, { FormEventHandler, MouseEventHandler } from 'react'
import Icons from '../Icons/Icons'

export interface Props {
  title: string
  closeModal: MouseEventHandler
  submit: FormEventHandler
  child?: JSX.Element | JSX.Element[]
  btnText: string | JSX.Element
}

const EditInfo: React.FC<Props> = ({ child, title, closeModal, submit, btnText }) => {
  return (
    <form className='w-full bg-white rounded-md p-3 flex flex-col gap-2' onSubmit={submit}>
      <div className='flex justify-between items-center'>
        <p className='text-lg text-primary'>{title}</p>
        <div onClick={closeModal}>
          <Icons name='cancel' style='h-5 w-5 fill-primary' />
        </div>
      </div>
      <hr />
      <div>
        { child }
      </div>
      <div className='flex justify-center items-center'>
        <button type='submit' className='my-2 bg-action w-1/4 py-1 rounded flex justify-center items-center'>{ btnText }</button>
      </div>
    </form>
  )
}

export default EditInfo