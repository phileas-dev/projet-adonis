import Paste from '#models/paste'
import { pasteValidator } from '#validators/paste'
import { randomBytes } from 'node:crypto'
import type { HttpContext } from '@adonisjs/core/http'

function pasteData(paste: Paste) {
  return {
    code: paste.code,
    title: paste.title,
    content: paste.content,
    isUnlisted: paste.isUnlisted,
    createdAt: paste.createdAt.toISO(),
  }
}

export default class PastesController {
  async index({ inertia }: HttpContext) {
    const pastes = await Paste.query()
      .where('isUnlisted', false)
      .orderBy('createdAt', 'desc')
      .limit(50)

    return inertia.render('home', { pastes: pastes.map(pasteData) })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('pastes/create', {})
  }

  async store({ request, auth, response, session }: HttpContext) {
    const data = await request.validateUsing(pasteValidator)
    const paste = await Paste.create({
      ...data,
      title: data.title || null,
      code: randomBytes(12).toString('base64url'),
      userId: auth.user?.id ?? null,
    })

    session.flash('success', 'Paste created.')
    return response.redirect().toRoute('pastes.show', { code: paste.code })
  }

  async show({ params, inertia, auth }: HttpContext) {
    const paste = await Paste.findByOrFail('code', params.code)

    return inertia.render('pastes/show', {
      paste: pasteData(paste),
      canEdit: auth.user?.id === paste.userId,
    })
  }

  async edit({ params, auth, inertia, response }: HttpContext) {
    const user = auth.user
    if (!user) {
      return response.unauthorized()
    }

    const paste = await Paste.findByOrFail('code', params.code)
    if (paste.userId !== user.id) {
      return response.forbidden()
    }

    return inertia.render('pastes/edit', { paste: pasteData(paste) })
  }

  async update({ params, auth, request, response, session }: HttpContext) {
    const user = auth.user
    if (!user) {
      return response.unauthorized()
    }

    const paste = await Paste.findByOrFail('code', params.code)
    if (paste.userId !== user.id) {
      return response.forbidden()
    }

    const data = await request.validateUsing(pasteValidator)
    paste.merge({ ...data, title: data.title || null })
    await paste.save()

    session.flash('success', 'Paste updated.')
    return response.redirect().toRoute('pastes.show', { code: paste.code })
  }

  async destroy({ params, auth, response, session }: HttpContext) {
    const user = auth.user
    if (!user) {
      return response.unauthorized()
    }

    const paste = await Paste.findByOrFail('code', params.code)
    if (paste.userId !== user.id) {
      return response.forbidden()
    }

    await paste.delete()
    session.flash('success', 'Paste deleted.')
    return response.redirect().toRoute('home')
  }

  async mine({ auth, inertia, response }: HttpContext) {
    const user = auth.user
    if (!user) {
      return response.unauthorized()
    }

    const pastes = await Paste.query().where('userId', user.id).orderBy('createdAt', 'desc')

    return inertia.render('dashboard', { pastes: pastes.map(pasteData) })
  }
}
