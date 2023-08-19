export function seperator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function m(n,d){
    x=(''+n).length,p=Math.pow,d=p(10,d)
    x-=x%3
    return Math.round(n*d/p(10,x))/d+" kMBTPE"[x/3]
}
export function n(n){
    return n > 9 ? "" + n: "0" + n;
}