class Github {
  constructor() {
    this.client_id = 'dd3a4d2f71a8c9cf5ec8'
    this.client_secret = '8a59864146287ec13dd096e093ff6e58e50ed065'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()


    return {
      profile,
      repos
    }
  }
}