function getBag<T>(val: T): T{
          return val
}
interface Bag{
          name: string
          size: number
}
const myBag: Bag = {
    name: 'safari',
    size: 35
};


console.log(getBag<Bag>(myBag))