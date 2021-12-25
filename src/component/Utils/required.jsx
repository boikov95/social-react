
export const required =(value)=>{
    if(value) return undefined;
    return 'Is not empty';
} 

export const lengthControls = (count)=>(value)=>{
    if(value.length > count) return `Pole is not length ${count} symbol`;
    return undefined;
}