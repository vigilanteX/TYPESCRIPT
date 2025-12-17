type Song={
    title: string,
    artist: string,
    duration: number,
    moreInfo: {
        album: string,
        releaseYear: number
    }
}
function printSongInfo(song: Song): void {
console.log(song)
}
printSongInfo({title:"meow", artist:"cat", duration:3, moreInfo:{album:"cats album", releaseYear:2020}})