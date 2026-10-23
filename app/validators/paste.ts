import vine from '@vinejs/vine'

export const pasteValidator = vine.create({
  title: vine.string().trim().maxLength(120).nullable(),
  content: vine.string().minLength(1).maxLength(100_000),
  isUnlisted: vine.boolean(),
})
