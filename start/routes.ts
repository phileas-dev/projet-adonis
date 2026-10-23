/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.get('/', [controllers.Pastes, 'index']).as('home')
router.get('pastes/create', [controllers.Pastes, 'create']).as('pastes.create')
router.post('pastes', [controllers.Pastes, 'store']).as('pastes.store')
router.get('pastes/:code', [controllers.Pastes, 'show']).as('pastes.show')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.get('pastes/:code/edit', [controllers.Pastes, 'edit']).as('pastes.edit')
    router.put('pastes/:code', [controllers.Pastes, 'update']).as('pastes.update')
    router.delete('pastes/:code', [controllers.Pastes, 'destroy']).as('pastes.destroy')
    router.get('/dashboard', [controllers.Pastes, 'mine']).as('dashboard')
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
