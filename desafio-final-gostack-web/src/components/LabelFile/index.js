import React, { useRef, useEffect, useState } from 'react'
import { useField } from '@rocketseat/unform'
import { MdAddAPhoto } from 'react-icons/md'
import api from '~/services/api'
import { Container, Label } from './styles'

export default function LabelFile({ name, fileData }) {
  const ref = useRef()

  const { fieldName, registerField } = useField(name)
  const [file, setFile] = useState()
  const [preview, setPreview] = useState()

  async function handleChangefile(e) {
    const data = new FormData()
    data.append('file', e.target.files[0])
    const response = await api.post('files', data)
    const { id, url } = response.data
    setFile(id)
    setPreview(url)
  }

  useEffect(() => {
    if (fileData) {
      setFile(fileData.id)
      setPreview(fileData.url)
    }
  }, [fileData])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.file'
    })
  }, [ref.current, file]); // eslint-disable-line

  return (
    <Container>
      <Label htmlFor="file" background={preview}>
        <MdAddAPhoto size={30} />
        <input
          name={fieldName}
          onChange={handleChangefile}
          type="file"
          accept="image/*"
          id="file"
          data-file={file}
          ref={ref}
        />
      </Label>
    </Container>
  )
}
