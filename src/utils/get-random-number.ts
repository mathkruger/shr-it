class Random {
  public next(max: number): number {
    return Math.floor(Math.random() * max);
  }
}

export class RandomIdGenerator {
  private static _base62chars: string[] =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  private static _random: Random = new Random();

  public static getBase62(length: number): string {
    let sb: string = "";
    for (let i: number = 0; i < length; i++) {
      sb += RandomIdGenerator._base62chars[RandomIdGenerator._random.next(62)];
    }
    return sb;
  }

  public static getBase36(length: number): string {
    let sb: string = "";
    for (let i: number = 0; i < length; i++) {
      sb += RandomIdGenerator._base62chars[RandomIdGenerator._random.next(36)];
    }
    return sb;
  }
}
