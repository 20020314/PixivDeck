/**
 * @jest-environment node
 */
// @flow
import { fetchAuth, getRequest, postRequest } from './api'

const USERNAME: ?string = process.env.USERNAME
const PASSWORD: ?string = process.env.PASSWORD

describe('API', () => {
  if (!(USERNAME && PASSWORD)) {
    test.skip('skip api test', () => {})
    return
  }

  const info = {
    username: USERNAME,
    password: PASSWORD,
  }

  test.skip('login success', async () => {
    const res = await fetchAuth(info)
    expect(res.user.account).toEqual(USERNAME)
  })

  test.skip('no params', async () => {
    const { accessToken } = await fetchAuth(info)
    const { result } = await getRequest(
      '/v1/illust/ranking?mode=day',
      {},
      accessToken
    )
    expect(result).toHaveProperty('nextUrl')
  })

  test.skip('have nextUrl', async () => {
    const { accessToken } = await fetchAuth(info)
    const { result } = await getRequest(
      '/v1/illust/ranking',
      { mode: 'day' },
      accessToken
    )
    expect(result).toHaveProperty('nextUrl')
  })

  test.skip('get success', async () => {
    const { accessToken } = await fetchAuth(info)

    const { result } = await getRequest(
      '/v1/user/detail',
      { userId: 471355 },
      accessToken
    )
    expect(result).toHaveProperty('profile')
  })

  test.skip('post success', async () => {
    const { accessToken } = await fetchAuth(info)

    const postData = await postRequest(
      '/v2/illust/bookmark/add',
      { illustId: 63576594, restrict: 'public' },
      accessToken
    )
    expect(postData).toEqual({})
  })
})
