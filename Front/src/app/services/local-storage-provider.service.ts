export class LocalStorageProviderService {

  static authenticationTokenName: string = "authenticationToken";

  public static get authenticationToken(): string {
    return localStorage.getItem(this.authenticationTokenName);
}

public static set authenticationToken(token: string) {
    localStorage.setItem(this.authenticationTokenName, token);
}
}