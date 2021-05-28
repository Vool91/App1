export const UpdateobjectArray=(items,itemId,ProName,NewProName)=>{
    debugger
    items.map(u => {
    if (u[ProName]=== itemId) {
        return { ...u, ...NewProName }
    }
    return u;
})}
