export class AuthService {
  isLoggedIn = false

  isAuthenticated() : Promise<boolean> {
    return new Promise<boolean>( resolve => {
      setTimeout(() => { resolve(this.isLoggedIn) }, 800)
    })
  }

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }
}