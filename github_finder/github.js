class Github {
  constructor() {
    this.client_id = 'dd3a4d2f71a8c9cf5ec8'
    this.client_secret = '8a59864146287ec13dd096e093ff6e58e50ed065'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return {
      profile
    }
  }
}