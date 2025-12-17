type Circle={
    radius:number
}
type Colorful={color:string}

type ColorCirclr=Circle & Colorful;
const cc:ColorCirclr={
    radius:42,
    color:"red"
}

type A={
    a:string
}
type B={
    b:number    
}
type AB=A & B & {c:number};

const ab:AB={
    a:"hello",
    b:42,
    c:100
}